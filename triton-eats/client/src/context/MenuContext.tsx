import { createContext, useState } from "react";
import { dishItem } from "../types/menuTypes";

interface MenuContextType {
    dishes: dishItem[];
    setDishes: React.Dispatch<React.SetStateAction<dishItem[]>>;
}

const initialState: MenuContextType = {
    dishes: [],
    setDishes: () => {},

};
  
export const MenuContext = createContext<MenuContextType>(initialState);

export const AppProvider = (props: any) => {
const [dishes, setDishes] = useState<dishItem[]>(initialState.dishes);


    return (
      <MenuContext.Provider
        value={{
          dishes: dishes,
          setDishes: setDishes,
        }}
      >
        {props.children}
      </MenuContext.Provider>
    );
};
