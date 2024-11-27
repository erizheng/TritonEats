import MenuItems from "./MenuItems";
import { MenuContext } from "../../context/MenuContext";
import { useContext, useEffect } from "react";
import { DiningHalls, dishItem } from "../../types/menuTypes";
import { fetchDishes } from "../../utils/menu-utils";
import { Link } from "react-router-dom";
import { mockDishes } from "../../constants/menuConstants";

export const DishList = () => {
    const { dishes, setDishes } = useContext(MenuContext);
 
    useEffect(() => {
        loadMenu();
        setDishes([mockDish]);

    }, []);

    // Function to load expenses and handle errors
    const loadMenu = async () => {
        try {
        const dishList = await fetchDishes();
        setDishes(dishList);
        } catch (err: any) {
        console.log(err.message);
        }
    };
    const mockDish: dishItem = {
        food_id: "testDishID1234567890987654321",
        img: "/images/placeHolderImage.png",
        food_name: "something",
        cost: 1,
        location: { 
            name: "Revelle", 
            location_id: 1, 
            dining_hall: DiningHalls.sixtyfour // Correct reference to the enum value
        },
        allergens: [],
        rating: 3.25,
        description: "something made with a bit of something cooked in a something topped with something with a side of something",
        numReviews: 0,
        numRecommend: 0,
    };

    
    // useEffect(() => {
    //     loadMenu();
    // }, []);

    // // Function to load expenses and handle errors
    // const loadMenu = async () => {
    //     try {
    //     const dishList = await fetchDishes();
    //     setDishes(dishList);
    //     } catch (err: any) {
    //     console.log(err.message);
    //     }
    // };
  
    return (
        <div className="image-grid">
            {dishes.map((dish) => (
               
                    <MenuItems
                        food_id={dish.food_id}
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