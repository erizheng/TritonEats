import React from 'react';
import { DiningHall as DiningHallType } from '../../types/homepageTypes';

const DiningHall: React.FC<DiningHallType> = ({ name, distance, busyness, isOpen, hourSummary }) => {
    const getProgressBarClass = (busyness: number) => {
        if (busyness > 75) return 'progress-bar high';
        if (busyness > 50) return 'progress-bar medium';
        return 'progress-bar low';
    };
    
    return (
        <div className="dining-hall-card">
            <h2>{name}</h2>
            <div className="dining-hall-distance">
                <img src={"images/distanceIcon.png"} alt="Walking distance icon" />
                <span>{distance}mi</span>
            </div>
            {isOpen ? (
                <div className="busyness-container">
                    <span className="busyness-text">{busyness}% Busy</span>
                    <div className="progress-bar-container">
                        <div className={getProgressBarClass(busyness)} style={{ width: `${busyness}%` }}></div>
                    </div>
                </div>
            ) : (
                <p>{hourSummary}</p>
            )}
        </div>
    );
};

export default DiningHall;