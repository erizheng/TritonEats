import React, { ChangeEventHandler } from "react";
import { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";
import { FilterChecks } from "../../types/menuTypes";
import { dummyCheckList1, dummyCheckList2 } from "../../constants/menuConstants";
import { useParams } from "react-router-dom";
import { SearchSort } from "./SortFunction";

export function MenuCheckBox() {
  const { dishes, setDishes,
    arrowCost, setArrowCost,
     arrowName, setArrowName,
      arrowRate, setArrowRate } = useContext(MenuContext);
  const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);

    const { name } = useParams();

    let [loc, setLoc] = useState(dummyCheckList1);

    function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
        const checkbox: HTMLInputElement = e.target as HTMLInputElement;
     
        const itemName = checkbox.name;
     
        const itemIndex = loc.findIndex((item) => item.name === itemName);
        loc[itemIndex] = { name: itemName, checked: checkbox.checked };

        const checkedItems = loc.filter((item) => item.checked);
        const checkedAdd:string[] = [];
        checkedItems.map(i => checkedAdd.push(i.name));
        console.log(checkedAdd);
     
        
        //to filter out
        const revertBack = SearchSort([...dishes, ...filteredOut], arrowCost, arrowName, arrowRate);
        

        const searchFiltered = revertBack.filter(i => checkedAdd.includes(i.location.dining_hall));
        const notSearched = revertBack.filter(i => !checkedAdd.includes(i.location.dining_hall));
      
        console.log(searchFiltered);
        console.log(notSearched);

        setFilteredOut(notSearched);
        setDishes(searchFiltered);
     
    }

    return (
        <div>
          <div>
            {/* <h1>{name}</h1> */}
            <form action=".">
              
              {loc.map((item) => ( ListItem(item, handleCheckboxClick)))}
              
            </form>
          </div>
        </div>
    );


}

function ListItem(item: FilterChecks, changeHandler: ChangeEventHandler) {
    return (
      <div className="checkBoxLocations">
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={item.checked}
          name={item.name}
          data-testid={item.name}
          
        />
        {item.name}
      </div>
    );
}

