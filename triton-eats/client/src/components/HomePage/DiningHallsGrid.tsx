import React from 'react';
import DiningHall from './DiningHall';
import { DiningHall as DiningHallType } from '../../types/homepageTypes';

interface DiningHallsGridProps {
    diningHalls: DiningHallType[];
}

// Handles grid creation after each dining hall has been created
const DiningHallsGrid: React.FC<DiningHallsGridProps> = ({ diningHalls }) => {
    // Defaults to loading screen when dining hall array is empty
    if (!diningHalls || diningHalls.length === 0) {
        return (
            <div data-testid="loading" className="loading">
                <div className="loading-spinner"></div>
                Loading dining halls...
            </div>
        )
    }
    
    return (
        <div className="dining-hall-grid">
            {diningHalls.map(hall => (
                // Adds testing id for jest testing
                 <div key={hall.id} data-testid={`dining-hall-${hall.id}`}>
                    <DiningHall {...hall} />
                </div>
            ))}
        </div>
    );
};

export default DiningHallsGrid;