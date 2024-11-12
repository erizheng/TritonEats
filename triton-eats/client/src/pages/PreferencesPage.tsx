import React from 'react'
import PreferenceGrid from "../components/Preferences/PreferenceGrid"
import { Navbar } from '../components/NavBar';
import { AppProvider } from '../context/MenuContext';
import Preferences from '../components/Preferences/Preferences';

export const PreferencesPage = () => {

    return (
        <AppProvider>
        <body>
            <head>
                <title>Preferences</title>
            </head>
            <div className='recNavBar'><Navbar/></div>


            <div className="gridContainer">
                
               <Preferences  />

                
            </div>
        </body>
        </AppProvider>
        
    );}