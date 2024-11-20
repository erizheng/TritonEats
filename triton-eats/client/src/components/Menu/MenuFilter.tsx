import React from 'react'
import { Slider } from '@mui/material';
import { MenuCheckBox } from './MenuCheckBox';

export const RecommendFilter = () => {

    //tempory for slider
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }; 

    return (
        <div className='MenuFilter'>
            <h1>
                Filter:
            </h1>

            <div>Price</div>
            <div className="slider">
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </div>
            

            <div className='filterLocations'>Location <MenuCheckBox/></div>
            <div className='filterAllergens'>Allergens </div>

        </div>
    );

    
}
export default RecommendFilter;