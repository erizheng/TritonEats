import React from 'react'
import { RecommendFilter } from '../components/Menu/MenuFilter';
import { DishList } from '../components/Menu/MenuList'
import { RecommendSearch } from '../components/Menu/MenuSearch';
import { Navbar } from '../components/NavBar';
import { AppProvider } from '../context/MenuContext';

export const Menu = () => {

    return (
        <AppProvider>
        <body>
            <head>
                <title>Menu</title>
            </head>
            <div className='recNavBar'><Navbar/></div>


            <div className="gridContainer">
                <RecommendFilter/>
                <RecommendSearch/>
                <div className='sortFilter'>
                    <ul className="navbar-links">
                        <li className="sortItem">Distance</li>
                        <li className="sortItem">Ratings</li>
                        <li className="sortItem">Busyness</li>
                        <li className="sortItem">Price</li>
                    </ul>
                </div>

                    <DishList/>
                
            </div>
        </body>
        </AppProvider>
        
    );}