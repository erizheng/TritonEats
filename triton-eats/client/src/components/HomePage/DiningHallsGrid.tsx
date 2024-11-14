import React, { useState } from 'react';
import DiningHall from './DiningHall';

type DiningHallData = {
    id: number;
    name: string;
    capacity: number;
    isFavorited: boolean;
};

const DiningHallsGrid: React.FC = () => {
    const [diningHalls, setDiningHalls] = useState<DiningHallData[]>([
        //Sixth
        { id: 1, name: 'Wolftown', capacity: 25, isFavorited: false },
        { id: 2, name: 'Crave', capacity: 25, isFavorited: false },
        { id: 3, name: 'Noodles', capacity: 51, isFavorited: false },
        { id: 4, name: 'Rooftop', capacity: 25, isFavorited: false },
        { id: 5, name: 'Makai', capacity: 25, isFavorited: false },
        // Club Med
        { id: 6, name: 'Club Med', capacity: 0, isFavorited: false },
        // Foodworx
        { id: 7, name: 'Foodworx Impinger', capacity: 25, isFavorited: false },
        { id: 8, name: 'Deli & Salad', capacity: 67, isFavorited: false },
        // 64 Degrees
        { id: 9, name: '64 Triton Grill', capacity: 25, isFavorited: false },
        { id: 10, name: 'Wok', capacity: 25, isFavorited: false },
        { id: 11, name: 'Taqueria', capacity: 86, isFavorited: false },
        { id: 12, name: 'Al Dente', capacity: 25, isFavorited: false },
        { id: 13, name: '64 Garden Bar', capacity: 35, isFavorited: false },
        { id: 14, name: 'Umi', capacity: 25, isFavorited: false },
        // Audreys
        { id: 15, name: 'Audreys Cafe', capacity: 25, isFavorited: false },
        // Canyon Vista
        { id: 16, name: 'Fusion Grill', capacity: 85, isFavorited: false },
        { id: 17, name: '360', capacity: 25, isFavorited: false },
        { id: 18, name: 'Earls Coffeehouse', capacity: 25, isFavorited: false },
        { id: 19, name: 'Fresh', capacity: 100, isFavorited: false },
        // Roger's Market
        { id: 20, name: 'Rogers Coffeehouse', capacity: 63, isFavorited: false },
        // Johns Market
        { id: 21, name: 'Johns Market', capacity: 25, isFavorited: false },
        // Pines
        { id: 22, name: 'hEAT', capacity: 25, isFavorited: false },
        { id: 23, name: 'Pines Triton Grill', capacity: 25, isFavorited: false },
        { id: 24, name: 'Toasted', capacity: 25, isFavorited: false },
        { id: 25, name: 'Farmers Market', capacity: 12, isFavorited: false },
        { id: 26, name: 'Roots', capacity: 25, isFavorited: false },
        // Ocean View
        { id: 27, name: 'Counter Culture', capacity: 25, isFavorited: false },
        { id: 28, name: 'Spcie', capacity: 25, isFavorited: false },
        { id: 29, name: 'Scholars Pizza', capacity: 25, isFavorited: false },
        { id: 30, name: 'Scholars Italian', capacity: 25, isFavorited: false },
        // Ventanas
        { id: 31, name: 'Soul', capacity: 25, isFavorited: false },
        { id: 32, name: 'Journey', capacity: 25, isFavorited: false },
        { id: 33, name: 'Vibe', capacity: 25, isFavorited: false },
        { id: 34, name: 'HaPi', capacity: 25, isFavorited: false },
        { id: 35, name: 'Tandoor', capacity: 25, isFavorited: false },
        { id: 36, name: 'Kaldi', capacity: 25, isFavorited: false },
        //Seventh
        { id: 37, name: 'Bistro', capacity: 31, isFavorited: false },
        { id: 38, name: 'Seventh Coffeehouse', capacity: 100, isFavorited: false },
        { id: 39, name: 'Northside Deli', capacity: 37, isFavorited: false },
    ]);

    const handleFavorite = (id: number) => {
        setDiningHalls((prevHalls) =>
            prevHalls.map((hall) =>
                hall.id === id ? { ...hall, isFavorited: !hall.isFavorited } : hall
            )
        );
    };

    const sortedDiningHalls = diningHalls
        .slice()
        .sort((a, b) =>
            a.isFavorited === b.isFavorited ? a.capacity - b.capacity : b.isFavorited ? 1 : -1
        );

    return (
        <div className="dining-halls-grid">
            {sortedDiningHalls.map((hall) => (
                <DiningHall
                    key={hall.id}
                    name={hall.name}
                    capacity={hall.capacity}
                    isFavorited={hall.isFavorited}
                    onFavorite={() => handleFavorite(hall.id)}
                />
            ))}
        </div>
    );
};

export default DiningHallsGrid;
