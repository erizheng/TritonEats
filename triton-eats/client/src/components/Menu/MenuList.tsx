import MenuItems from "./MenuItems";
import { MenuContext } from "../../context/MenuContext";
import { useContext, useEffect } from "react";
import { dishItem } from "../../types/menuTypes";
import { fetchDishes } from "../../utils/menu-utils";

//This component handles the grid listing of all the menu items
//It also calls the backend to retrieve the menu items
export const DishList = () => {
    const { dishes, setDishes,
        arrowCost, setArrowCost,
         arrowName, setArrowName,
          arrowRate, setArrowRate, 
           notShown, setNotShown } = useContext(MenuContext);
    
    //uses useEffect to load the Menu from the backend
    useEffect(() => {
        loadMenu();
    }, []);

    // Function to load expenses and handle errors
    const loadMenu = async () => {
        try {
            const dishList = await fetchDishes();
            //sort database menu items by alphabetical name
            dishList.sort((a, b) => 
                a.food_name.localeCompare(b.food_name));
            setDishes(dishList);
            console.log("after this");
            console.log("dishList value", dishList);
            //console.log(dishList);
        } catch (err: any) {
            console.log(err.message);
        }
    };
    
    //returns each item from the menu as a MenuItem through the use of a map

    if ((!dishes && !notShown) || (dishes.length === 0 && notShown.length === 0)) {
        return (
            <div data-testid="loading" className="loading">
            <div className="loading-spinner"></div>
                Loading Menu Items...
            </div>
    )
    }

    return (
        <div className="image-grid">
            {dishes.map((dish: dishItem) => (
            <div data-testid={`dish-${dish.food_id}`}>
                <MenuItems food_id={dish.food_id}
                    img={dish.img}
                    food_name={dish.food_name}
                    cost={dish.cost}
                    location={dish.location}
                    allergens={dish.allergens}
                    rating={dish.rating}
                    description={dish.description} 
                    numReviews={dish.numReviews} 
                    numRecommend={dish.numRecommend} 
                    />
            </div>
            ))}
            
        </div>
    );
  };
  
  export default DishList;