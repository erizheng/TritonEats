import { useState, useEffect } from 'react';
import { DiningHall } from '../../types/homepageTypes';
import { diningHalls } from '../../constants/homepageConstants';

// Fetch and filter dining hall data from waitz.io
export const useFetchDiningHalls = () => {
    const [filteredHalls, setFilteredHalls] = useState<DiningHall[]>([]);
    const [allHalls, setAllHalls] = useState<DiningHall[]>([]);

    const fetchDiningHalls = async () => {
        try {
            // watiz.io external API call
            const response = await fetch('https://waitz.io/live/ucsd');
            const data = await response.json();

            // Non dining hall data is included in waitz.io must be excluded
            const excludedIds = [204, 8, 12, 205, 13, 7];

            const transformedData: DiningHall[] = data.data
                .filter((item: any) => !excludedIds.includes(item.id))
                .map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    busyness: item.busyness,
                    isOpen: item.isOpen,
                    hourSummary: item.hourSummary,
                }));

            // default sorting is busyness acsending
            const sortedHalls = transformedData.sort((a, b) => {
                if (a.isOpen === b.isOpen) {
                    return a.busyness - b.busyness; 
                }
                return a.isOpen ? -1 : 1;
            });
            setAllHalls(sortedHalls);
            setFilteredHalls(sortedHalls);

            // CONSTANTS TESTING
            // const sortedHalls2 = diningHalls.sort((a, b) => {
            //     if (a.isOpen === b.isOpen) {
            //         return a.busyness - b.busyness;
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