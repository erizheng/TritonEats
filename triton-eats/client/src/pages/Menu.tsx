import React from 'react'
import { RecommendFilter } from '../components/Menu/MenuFilter';
import { DishList } from '../components/Menu/MenuList'
import { RecommendSearch } from '../components/Menu/MenuSearch';
import { MenuSortButtons } from '../components/Menu/MenuSortButtons'
import { AppProvider } from '../context/MenuContext';
import Navbar from '../components/NavBar';

export const Menu = () => {

    return (
        <AppProvider>
                <title>Menu</title>
            <Navbar selected='Menu'/>

            <div className="gridContainer">
                <RecommendFilter/>
                <RecommendSearch/>
                <MenuSortButtons/>

                    <DishList/>
                
            </div>
        </AppProvider>
        
    );}