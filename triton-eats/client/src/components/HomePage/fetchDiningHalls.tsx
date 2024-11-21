import { useState, useEffect } from 'react';
import { DiningHall } from '../../types/homepageTypes';
import { diningHalls } from '../../constants/homepageConstants';

// Fetch and filter dining hall data
export const useFetchDiningHalls = () => {
    const [filteredHalls, setFilteredHalls] = useState<DiningHall[]>([]);
    const [allHalls, setAllHalls] = useState<DiningHall[]>([]);

    const fetchDiningHalls = async () => {
        try {
            const response = await fetch('https://waitz.io/live/ucsd');
            const data = await response.json();

            const excludedIds = [204, 8, 12, 205, 13, 7];

            const transformedData: DiningHall[] = data.data
                .filter((item: any) => !excludedIds.includes(item.id))
                .map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    distance: 0, // Replace with actual distance when available
                    busyness: item.busyness,
                    isOpen: item.isOpen,
                    hourSummary: item.hourSummary,
                }));

            const sortedHalls = transformedData.sort((a, b) => {
                if (a.isOpen === b.isOpen) {
                    return a.distance - b.distance;
                }
                return a.isOpen ? -1 : 1;
            });
            setAllHalls(sortedHalls);
            setFilteredHalls(sortedHalls);

            // Testing
            // const sortedHalls2 = diningHalls.sort((a, b) => {
            //     if (a.isOpen === b.isOpen) {
            //         return a.distance - b.distance;
            //     }
            //     return a.isOpen ? -1 : 1;
            // });
            // setFilteredHalls(sortedHalls2);
            // setAllHalls(sortedHalls2);
        } catch (error) {
            console.error('Error fetching dining hall data:', error);
        }
    };

    useEffect(() => {
        fetchDiningHalls();
    }, []);

    return {
        filteredHalls,
        setFilteredHalls,
        allHalls,
    };
};
