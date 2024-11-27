import React from 'react';
import DiningHall from './DiningHall';
import { DiningHall as DiningHallType } from '../../types/homepageTypes';

interface DiningHallsGridProps {
    diningHalls: DiningHallType[];
}

const DiningHallsGrid: React.FC<DiningHallsGridProps> = ({ diningHalls }) => {
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
                 <div key={hall.id} data-testid={`dining-hall-${hall.id}`}>
                    <DiningHall {...hall} />
                </div>
            ))}
        </div>
    );
};

export default DiningHallsGrid;