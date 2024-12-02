import React from 'react'
import { dishItem } from '../../types/menuTypes';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';

//This component is a support component to list all the menu items, each card will represent one menu item.
//It uses the Card component from Materials joy UI
export const MenuItems = (currentDish: dishItem) => {
   
    return (

        //Resizeable container from https://mui.com/joy-ui/react-card/
        //Edit give_your_path to make it go to where you need
        <Link to={`/dish_details/${currentDish.food_id}`}>
        <Box sx={{ minHeight: 350 }}>
        <Card
          variant="outlined"
          sx={(theme) => ({
            width: 300,
            gridColumn: 'span 2',
            flexDirection: 'row',
            flexWrap: 'wrap',
            resize: 'horizontal',
            overflow: 'hidden',
            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
            transition: 'transform 0.3s, border 0.3s',
            '&:hover': {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
              transform: 'translateY(-2px)',
            },
            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
          })}
        >
    
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 200 }}>
            <Box sx={{ display: 'flex' }}>

                {/* Dish Name and Location */}

              <div>
                <Typography level="title-lg"> {currentDish.food_name}
                </Typography>
                <br></br>
                <Typography level="body-sm">{currentDish.location.name}, {currentDish.location.dining_hall}</Typography>
              </div>

            </Box>
            <AspectRatio
              variant="soft"
              sx={{
                '--AspectRatio-paddingBottom':
                  'clamp(0px, (100% - 200px) * 999, 200px)',
                pointerEvents: 'none',
              }}
            >
              <img
                alt=""
                src={currentDish.img}//<--------------------Dish Image
              />
            </AspectRatio>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>

              {/* Dish Description, Cost, and Ratings */}
              <div>
                <Typography level="body-xs">{currentDish.description}</Typography>
                <Typography level="body-md">${currentDish.cost}</Typography>
              </div>
              <Typography level="body-xs" sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                {currentDish.rating}
                </Typography>


            </Box>
          </Box>
        </Card>
      </Box>
      </Link>

      // <div className='DishItem'>
        //    <img src={currentDish.img} className='recPics'/>

        //    <div className='gridContainer'>
        //         <div className='recImageText'>
        //             <h3>{currentDish.food_name}</h3>
        //             <h2>${currentDish.cost}</h2>
        //             <p>{currentDish.location.name}</p>
        //             <p>{currentDish.location.dining_hall}</p>
        //         </div>
        //         <div className='recImageRating'>
        //             {currentDish.rating}
        //         </div>
        //    </div>

           
            
        // </div>

    );
    
}

export default MenuItems;