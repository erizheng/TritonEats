import React from 'react'
import { RecommendFilter } from '../components/Menu/MenuFilter';
import { DishList } from '../components/Menu/MenuList'
import { RecommendSearch } from '../components/Menu/MenuSearch';
import { MenuSortButtons } from '../components/Menu/MenuSortButtons'
// import Navbar from '../components/NavBar';
import { AppProvider } from '../context/MenuContext';
import NavBar from '../components/NavBar';

export const Menu = () => {

    return (
        <AppProvider>
        <body>
            <head>
                <title>Menu</title>
            </head>
            {/* <div className='recNavBar'><Navbar selected='Recipes'/></div> */}
            <NavBar selected='Menu'/>

            <div className="gridContainer">
                <RecommendFilter/>
                <RecommendSearch/>
                <MenuSortButtons/>

                    <DishList/>
                
            </div>
        </body>
        </AppProvider>
        
    );}