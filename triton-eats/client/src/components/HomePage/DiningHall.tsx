import React, { useState } from 'react';

type DiningHallProps = {
    name: string;
    capacity: number;
    isFavorited: boolean;
    onFavorite: () => void;
};

const DiningHall: React.FC<DiningHallProps> = ({ name, capacity, isFavorited, onFavorite }) => {
    const capacityColor = capacity > 70 ? 'red' : capacity > 40 ? 'orange' : 'green';

    return (
        <div className="dining-hall">
            <h3>{name}</h3>
            <p>{capacity}% Busy</p>
            <div className="capacity-bar" style={{ backgroundColor: capacityColor, width: `${capacity}%` }}></div>
            <button onClick={onFavorite}>{isFavorited ? '⭐' : '☆'}</button>
        </div>
    );
};

export default DiningHall;
