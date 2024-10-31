import React from 'react'
import { Slider } from '@mui/material';

export const RecommendFilter = () => {

    //tempory
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }; 

    return (
        <div className='RecommendFilter'>
            <div className='filterPref'>
                <ul className="navbar-links">
                    <li className="sortItem">Distance  x</li>
                    <li className="sortItem">Allergens  x</li>
                    <li className="sortItem">Price  x</li>
                </ul>
            </div>

            <div>Price</div>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />

            <div>Going to refer lab 3 code for list checkboxes</div>

        </div>
    );

    
}
export default RecommendFilter;