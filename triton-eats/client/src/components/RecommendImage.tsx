import React from 'react'

export const RecommendImage = () => {
   
    return (
        <div className='RecommendImage'>
           <img src='images/placeHolderImage.png' className='recPics'/>

           {/* Will make the values in here parameters for creating list */}
           <div className='gridContainer'>
                <div className='recImageText'>
                    <h3>Food Item</h3>
                    <h2>Cost</h2>
                    <p>Location</p>
                </div>
                <div className='recImageRating'>
                    temp: 5/5 stars
                </div>
           </div>
           
            
        </div>
    );

    
}

export default RecommendImage;