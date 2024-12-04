import React from 'react';
import { dishItem } from '../../types/menuTypes';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

// Calculate the number of full, half, and empty stars
const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); 
    const halfStars = rating % 1 >= 0.15 ? 1 : 0; // Add a half star if decimal part is >= 0.15
    const emptyStars = 5 - fullStars - halfStars; 

    return (
        <>
            <span aria-label="ratingStarFilled" className="star filled">
                {'★'.repeat(fullStars)}
            </span>
            {halfStars > 0 && <img src="/images/half-star.png" className='halfStar' aria-label="ratingStarHalfFilled" />}
            <span className="star" aria-label="ratingStarEmpty">
                {'★'.repeat(emptyStars)}
            </span>
        </>
    );
};


//This component is a support component to list all the menu items, each card will represent one menu item.
//It uses the Card component from Materials joy UI
export const MenuItems = (currentDish: dishItem) => {
    return (
        //Resizeable container from https://mui.com/joy-ui/react-card/
        //Edit give_your_path to make it go to where you need
        <Link to={`/dish_details/${currentDish.food_id}`} style={{ textDecoration: 'none' }}>  {/* Remove underline from Link */}
            <Box sx={{ minHeight: 350 }}>
            <Tooltip title="Click for Reviews" arrow disableInteractive>
                <Card
                    variant="outlined"
                    sx={(theme) => ({
                        width: '100%',  
                        maxWidth: 350,  
                        gridColumn: 'span 2',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        overflow: 'hidden',
                        gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s, border 0.3s, box-shadow 0.3s',  
                        '&:hover': {
                            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                            transform: 'translateY(-5px) scale(1.05)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                        },
                        '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
                    })}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%' }}>
                            {/* Dish Name and Location */}
                            <div>
                                <Typography level="title-lg" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', textDecoration: 'none' }}>
                                    {currentDish.food_name}
                                </Typography>
                                <br />
                                <Typography level="body-sm" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', textDecoration: 'none' }}>
                                    {currentDish.location.name}, {currentDish.location.dining_hall}
                                </Typography>
                            </div>

                            {/* Cost in the upper-right corner, larger font */}
                            <Typography
                                level="body-md"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    marginTop: '0.5rem',
                                    marginRight: '0.5rem',
                                    fontSize: '1.2rem',  
                                }}
                            >
                                ${currentDish.cost}
                            </Typography>

                            {/* Stars - Left aligned and no underline */}
                            <Typography
                                level="body-xs"
                                sx={{
                                    ml: 0, 
                                    alignSelf: 'flex-start',
                                    textDecoration: 'none',  
                                    display: 'flex', 
                                    gap: '4px', 
                                    alignItems: 'center',
                                }}
                            >
                                {renderStars(currentDish.rating)}
                            </Typography>
                        </Box>

                        <AspectRatio
                            variant="soft"
                            sx={{
                                '--AspectRatio-paddingBottom': 'clamp(0px, (100% - 200px) * 999, 200px)',
                                pointerEvents: 'none',
                            }}
                        >
                            <img alt="" src={currentDish.img} />
                        </AspectRatio>

                        <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                            {/* Dish Description - No Underline */}
                            <div>
                                <Typography level="body-xs" sx={{ textDecoration: 'none' }}>
                                    {currentDish.description}
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </Card>
                </Tooltip>
            </Box>
        </Link>
    );
};

export default MenuItems;