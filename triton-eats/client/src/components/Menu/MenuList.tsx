import MenuItems from "./MenuItems";
import { MenuContext } from "../../context/MenuContext";
import { useContext, useEffect } from "react";
import { dishItem } from "../../types/menuTypes";
import { fetchDishes } from "../../utils/menu-utils";
import { mockDishes } from "../../constants/menuConstants";

export const DishList = () => {
    const { dishes, setDishes } = useContext(MenuContext);
 
    useEffect(() => {
        loadMenu();
    }, []);

    // Function to load expenses and handle errors
    const loadMenu = async () => {
        try {
            const dishList = await fetchDishes();
            setDishes(dishList);
            console.log("after this");
            console.log("dishList value", dishList);
            //console.log(dishList);
        } catch (err: any) {
            console.log(err.message);
        }
    };
  
    return (
        <div className="image-grid">
            {dishes.map((dish: dishItem) => (
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
            ))}
        </div>
    );
  };
  
  export default DishList;