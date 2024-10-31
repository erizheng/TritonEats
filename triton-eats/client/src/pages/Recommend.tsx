//import navBar
import React from 'react'
import { RecommendFilter } from '../components/RecommendFilter';
import { RecommendImage } from '../components/RecommendImage';


export const Recommend = () => {
   
    return (
        <body>
            <head>
                <title>Recommendations</title>
            </head>
            {/*Add <NavBar /> when available*/}
            <div className="gridContainer">
                <RecommendFilter/>
                
                
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
        
    );

    
}