import React from 'react'
import { RecommendFilter } from '../components/RecommendFilter';
import { RecommendImage } from '../components/RecommendImage';
import { RecommendSearch } from '../components/RecommendSearch';
import { Navbar } from '../components/NavBar';

export const Recommend = () => {

    return (
        <body>
            <head>
                <title>Recommendations</title>
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


                <div className="image-grid">
                    {/* Plan to make this into a list instead of repetitive calls */}
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                    <RecommendImage/>
                </div>
            </div>
        </body>
        
    );}