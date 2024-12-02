import React, { createContext, useState } from "react";
import { dishItem, sortArrows } from "../types/menuTypes";
//import { mockDishes } from "../constants/menuConstants";


interface MenuContextType {
    dishes: dishItem[];
    setDishes: React.Dispatch<React.SetStateAction<dishItem[]>>;
    notShown: dishItem[];
    setNotShown: React.Dispatch<React.SetStateAction<dishItem[]>>;

    //used to keep track of which sorting arrangement is being used
    arrowCost: string;
    setArrowCost: React.Dispatch<React.SetStateAction<string>>;
    arrowRate: string;
    setArrowRate: React.Dispatch<React.SetStateAction<string>>;
    arrowName: string;
    setArrowName: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: MenuContextType = {
    dishes: [],
    setDishes: () => {},
    arrowCost: "",
    setArrowCost: () => "",
    arrowRate: "",
    setArrowRate: () => "",
    arrowName: "",
    setArrowName: () => "",
    notShown: [],
    setNotShown: () => {},

};
  
export const MenuContext = createContext<MenuContextType>(initialState);

export const AppProvider = (props: any) => {
const [dishes, setDishes] = useState<dishItem[]>(initialState.dishes);
const [arrowCost, setArrowCost] = useState<string>(initialState.arrowCost);
const [arrowRate, setArrowRate] = useState<string>(initialState.arrowRate);
const [arrowName, setArrowName] = useState<string>(initialState.arrowName);
const [notShown, setNotShown] = useState<dishItem[]>(initialState.dishes);

    return (
      <MenuContext.Provider
        value={{
          dishes: dishes,
          setDishes: setDishes,
          arrowCost: arrowCost,
          setArrowCost: setArrowCost,
          arrowRate: arrowRate,
          setArrowRate: setArrowRate,
          arrowName: arrowName,
          setArrowName: setArrowName,
          notShown: notShown,
          setNotShown: setNotShown,
        }}
      >
        {props.children}
      </MenuContext.Provider>
    );
};
