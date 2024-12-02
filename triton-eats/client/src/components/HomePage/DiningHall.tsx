import React from 'react';
import { DiningHall as DiningHallType } from '../../types/homepageTypes';

// Creates a singular dining hall object
const DiningHall: React.FC<DiningHallType> = ({ name, busyness, isOpen, hourSummary }) => {
    // Setups progress bar based off busyness
    const getProgressBarClass = (busyness: number) => {
        if (busyness > 75) return 'progress-bar high';
        if (busyness > 50) return 'progress-bar medium';
        return 'progress-bar low';
    };
    
    return (
        <div className="dining-hall-card">
            <h2>{name}</h2>
            {isOpen ? (
                <div className="busyness-container">
                    <span className="busyness-text">{busyness}% Busy</span>
                    <div className="progress-bar-container">
                        <div className={getProgressBarClass(busyness)} style={{ width: `${busyness}%` }}></div>
                    </div>
                </div>
            ) : (
                // If dining hall is not open, just return hourSummary
                <p>{hourSummary}</p>
            )}
        </div>
    );
};

export default DiningHall;