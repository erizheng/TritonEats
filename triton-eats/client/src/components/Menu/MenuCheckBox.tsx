import React, { ChangeEventHandler } from "react";
import { useState } from "react";
import { FilterChecks } from "../../types/menuTypes";
import { dummyCheckList1, dummyCheckList2 } from "../../constants/menuConstants";
import { useParams } from "react-router-dom";

export function MenuCheckBox() {
    const { name } = useParams();

    let [loc, setLoc] = useState(dummyCheckList1);

    function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
        const checkbox: HTMLInputElement = e.target as HTMLInputElement;
     
        const itemName = checkbox.name;
     
        const itemIndex = loc.findIndex((item) => item.name === itemName);
        loc[itemIndex] = { name: itemName, checked: checkbox.checked };
     
        const uncheckedItems = loc.filter((item) => !item.checked);
        const checkedItems = loc.filter((item) => item.checked);

        const newItems = uncheckedItems.concat(checkedItems);
     
        setLoc(newItems);
     
    }

    return (
        <div>
          <div>
            <h1>{name}</h1>
            <form action=".">
              {loc.map((item) => ListItem(item, handleCheckboxClick))}
            </form>
          </div>
        </div>
    );


}

function ListItem(item: FilterChecks, changeHandler: ChangeEventHandler) {
    return (
      <div >
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

