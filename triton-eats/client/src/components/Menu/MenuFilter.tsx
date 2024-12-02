import React from 'react'
import { Slider } from '@mui/material';
import { MenuCheckBox } from './MenuCheckBox';
import { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { dishItem } from '../../types/menuTypes';
import { marks } from '../../constants/menuConstants';

export const RecommendFilter = () => {

    //tempory for slider
    const [value, setValue] = React.useState<number[]>([0, 30]);
    const { dishes, setDishes } = useContext(MenuContext);
    const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        //console.log(newValue)
    }; 

    const onSubmit = (event: React.FormEvent<HTMLFormElement>, newValue: number | number[]) => {
        event.preventDefault();
    
        //filtering
        let range = newValue as number[];
        const revertBack = [...dishes, ...filteredOut].sort((a, b) => 
            a.food_name.localeCompare(b.food_name));

        const searchFiltered = revertBack.filter(i => i.cost >= range[0] && i.cost <= range[1]);
        const notSearched = revertBack.filter(i => (i.cost < range[0] || i.cost > range[1]));
        setFilteredOut(notSearched);
        setDishes(searchFiltered);
      };

    return (
        <div className='MenuFilter'>
            <h1>
                Filter:
            </h1>

            <div>Price</div>
            <form onSubmit={(event) => onSubmit(event, value)}>
            <div className="slider">
                <Slider
                    getAriaLabel={() => 'Cost range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={20}
                    marks = {marks}
                    data-testid='slide'
                />
            </div>
                <button type="submit" data-testid='subButton'>
                Submit
                </button>
            </form>

            

            <div className='filterLocations'>Location <MenuCheckBox/></div>
            <div className='filterAllergens'>Allergens: nothing yet, need to decide on what to include for allergens</div>

        </div>
    );

    
}
export default RecommendFilter;