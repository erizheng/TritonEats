import React from 'react';
import DiningHall from './DiningHall';
import { DiningHall as DiningHallType } from '../../types/homepageTypes';

interface DiningHallsGridProps {
    diningHalls: DiningHallType[];
}

const DiningHallsGrid: React.FC<DiningHallsGridProps> = ({ diningHalls }) => {
    return (
        <div className="dining-hall-grid">
            {diningHalls.map(hall => (
                <DiningHall key={hall.id} {...hall} />
            ))}
        </div>
    );
};

export default DiningHallsGrid;
