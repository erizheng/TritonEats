import React, { ChangeEventHandler, useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";
import { FilterChecks } from "../../types/menuTypes";
import { dummyCheckList1 } from "../../constants/menuConstants";
import { useParams } from "react-router-dom";
import { SearchSort } from "./SortFunction";

export function MenuCheckBox() {
  const { dishes, setDishes, arrowCost, arrowName, arrowRate, setNotShown } = useContext(MenuContext);
  const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);
  const [loc, setLoc] = useState(dummyCheckList1);

  const { name } = useParams();

  function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
    const checkbox = e.target as HTMLInputElement;
    const itemName = checkbox.name;

    const updatedLoc = loc.map((item) =>
      item.name === itemName ? { ...item, checked: checkbox.checked } : item
    );
    setLoc(updatedLoc);

    updateFilteredDishes(updatedLoc);
  }

  function updateFilteredDishes(updatedLoc: FilterChecks[]) {
    const checkedItems = updatedLoc.filter((item) => item.checked).map((i) => i.name);
    const revertBack = SearchSort([...dishes, ...filteredOut], arrowCost, arrowName, arrowRate);

    const searchFiltered = revertBack.filter((i) => checkedItems.includes(i.location.dining_hall));
    const notSearched = revertBack.filter((i) => !checkedItems.includes(i.location.dining_hall));

    setFilteredOut(notSearched);
    setNotShown(notSearched);
    setDishes(searchFiltered);
  }

  function handleCheckAll() {
    const updatedLoc = loc.map((item) => ({ ...item, checked: true }));
    setLoc(updatedLoc);
    updateFilteredDishes(updatedLoc);
  }

  function handleUncheckAll() {
    const updatedLoc = loc.map((item) => ({ ...item, checked: false }));
    setLoc(updatedLoc);
    updateFilteredDishes(updatedLoc);
  }

  return (
    <div>
        <form action=".">
            {loc.map((item) => ListItem(item, handleCheckboxClick))}
        </form>
        <div className = "checkAll">
        <button type="button" onClick={handleCheckAll} data-testid="check-all">
            Check All
        </button>
        <button type="button" onClick={handleUncheckAll} data-testid="uncheck-all">
            Uncheck All
        </button>
        </div>
    
    </div>
  );
}

function ListItem(item: FilterChecks, changeHandler: ChangeEventHandler) {
    return (
        <label className="checkBoxLocations">
            <input
                type="checkbox"
                onChange={changeHandler}
                checked={item.checked}
                name={item.name}
                data-testid={item.name}
            />
            {item.name}
        </label>
    );
}