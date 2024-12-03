import React, { useState } from 'react';
import PreferenceGrid from './PreferenceGrid';
import { PreferenceProps } from '../../types/preferenceTypes';

const Preferences: React.FC = () => {
  const [preferences, setPreferences] = useState<PreferenceProps[]>([
    { id: 1, name: 'Dairy', selected: false },
    { id: 2, name: 'Tree Nuts', selected: false },
    { id: 3, name: 'Soy', selected: false },
    { id: 4, name: 'Wheat', selected: false },
    { id: 5, name: 'Fish', selected: false },
    { id: 6, name: 'Shellfish', selected: false },
    { id: 7, name: 'Peanuts', selected: false },
    { id: 8, name: 'Eggs', selected: false },
    { id: 9, name: 'Sesame', selected: false },
    { id: 10, name: 'Gluten', selected: false }
  ]);

  const [dietary, setDietary] = useState<PreferenceProps[]>([
    { id: 11, name: 'Vegetarian', selected: false },
    { id: 12, name: 'Vegan', selected: false },
    { id: 13, name: 'Wellness', selected: false },
    { id: 14, name: 'Sustainability', selected: false },
  ]);

  const [time, setTime] = useState<PreferenceProps[]>([
    { id: 15, name: '0 - 5 min', selected: false },
    { id: 16, name: '5 - 10 min', selected: false },
    { id: 17, name: '10 - 20 min', selected: false },
    { id: 18, name: '20 - 30 min', selected: false },
    { id: 19, name: '30 - 45 min', selected: false },
  ]);

  const [distance, setDistance] = useState<PreferenceProps[]>([
    { id: 20, name: '0 - 0.5 miles', selected: false },
    { id: 21, name: '0.5 - 1 miles', selected: false },
    { id: 22, name: '1 - 1.5 miles', selected: false },
    { id: 23, name: '1.5+ miles', selected: false },
  ]);

  // Toggle the selection state (selected/unselected) for each section
  const handleSelectionChange = (id: number, section: 'preferences' | 'dietary' | 'time' | 'distance') => {
    switch (section) {
      case 'preferences':
        setPreferences((prevPreferences) =>
          prevPreferences.map((pref) =>
            pref.id === id ? { ...pref, selected: !pref.selected } : pref
          )
        );
        break;
      case 'dietary':
        setDietary((prevDietary) =>
          prevDietary.map((pref) =>
            pref.id === id ? { ...pref, selected: !pref.selected } : pref
          )
        );
        break;
      case 'time':
        setTime((prevTime) =>
          prevTime.map((pref) =>
            pref.id === id ? { ...pref, selected: !pref.selected } : pref
          )
        );
        break;
      case 'distance':
        setDistance((prevDistance) =>
          prevDistance.map((pref) =>
            pref.id === id ? { ...pref, selected: !pref.selected } : pref
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="preferences-page">
      <h2>Allergens:</h2>
      <div className="preferences-grid">
        <PreferenceGrid
          preferences={preferences}
          onSelectionChange={(id) => handleSelectionChange(id, 'preferences')} // Pass section name
        />
      </div>

      <h2>Dietary Restrictions:</h2>
      <div className="preferences-grid">
        <PreferenceGrid
          preferences={dietary}
          onSelectionChange={(id) => handleSelectionChange(id, 'dietary')} // Pass section name
        />
      </div>

      <h2>Time:</h2>
      <div className="preferences-grid">
        <PreferenceGrid
          preferences={time}
          onSelectionChange={(id) => handleSelectionChange(id, 'time')} // Pass section name
        />
      </div>

      <h2>Distance:</h2>
      <div className="preferences-grid">
        <PreferenceGrid
          preferences={distance}
          onSelectionChange={(id) => handleSelectionChange(id, 'distance')} // Pass section name
        />
      </div>

      <div className="preferences-grid-btn">
        <button className="preferences-btn">Submit</button>
      </div>
    </div>
  );
};

export default Preferences;

