import React from 'react'
import PreferenceGrid from "../components/Preferences/PreferenceGrid"
import  Navbar  from '../components/NavBar';
import { AppProvider } from '../context/MenuContext';
import Preferences from '../components/Preferences/Preferences';
import '../CSS/Preferences.css';


export const PreferencesPage = () => {

    return (
        <AppProvider>
            <body>
                <head>
                    <title>Preferences</title>
                </head>
                <div className='NavBar'><Navbar selected='Preferences'/></div>
                <div className="preferences-page">
                    <Preferences />
                </div>
            </body>
        </AppProvider>

    );
}
