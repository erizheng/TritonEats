import { useState } from 'react';
import { DiningHall } from '../../types/homepageTypes';
import { diningHalls as initialDiningHalls } from '../../constants/homepageConstants';

export const useDiningHallSearchSort = () => {
    const [filteredHalls, setFilteredHalls] = useState<DiningHall[]>(initialDiningHalls);
    const [distanceAsc, setDistanceAsc] = useState(true);
    const [busynessAsc, setBusynessAsc] = useState(true);

    const handleSearch = (searchTerm: string) => {
        const filtered = initialDiningHalls.filter(hall =>
            hall.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHalls(filtered);
    };

    const handleSortByDistance = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                return distanceAsc ? a.distance - b.distance : b.distance - a.distance;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setDistanceAsc(!distanceAsc);
    };

    const handleSortByBusyness = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                return busynessAsc ? b.busyness - a.busyness : a.busyness - b.busyness;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setBusynessAsc(!busynessAsc);
    };

    return {
        filteredHalls,
        handleSearch,
        handleSortByDistance,
        handleSortByBusyness
    };
};
