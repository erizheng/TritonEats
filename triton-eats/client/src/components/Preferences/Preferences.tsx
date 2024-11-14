import React, { useState } from 'react';
import PreferenceGrid from './PreferenceGrid';
import { PreferenceProps } from '../../types/preferenceTypes';


const Preferences: React.FC = () => {
  // Manage the preferences state in the parent (Preferences component)
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
    { id: 11, name: 'Vegeterian', selected: false },
    { id: 12, name: 'Vegan', selected: false },
    { id: 13, name: 'Wellness', selected: false },
    { id: 14, name: 'Sustainability', selected: false },
  ]);

  const [time, setTime] = useState<PreferenceProps[]>([
    { id: 15, name: '>5 min', selected: false },
    { id: 16, name: '5-10 min', selected: false },
    { id: 17, name: '10-20 min', selected: false },
    { id: 18, name: '20-30 min', selected: false },
    { id: 19, name: '30-45 min', selected: false },
  ]);

  const [distance, setDistance] = useState<PreferenceProps[]>([
    { id: 20, name: '30-45 min', selected: false },
    { id: 21, name: '30-45 min', selected: false },

  ]);

  // Handle the preferences selection change
  const handleSelectionChange = (id: number) => {
    setPreferences((prevPreferences) =>
      prevPreferences.map((pref) =>
        pref.id === id ? { ...pref, selected: !pref.selected } : pref
      )
    );
  };

  return (
    <div>
      {/* <h1>Preferences</h1> */}
      <h2>Allergens:</h2>
      <div className='preferences-grid'>
      {/* Pass preferences and the handler to PreferencesGrid */}
      <PreferenceGrid 
        preferences={preferences}
        onSelectionChange={handleSelectionChange}
      />
      </div>
      {/* <div className="selected-preferences">
        <h2>Selected Preferences:</h2>
        <ul>
          {preferences
            .filter((pref) => pref.selected)
            .map((pref) => (
              <li key={pref.id}>{pref.name}</li>
            ))}
        </ul>
      </div> */}
      <h2>Dietary Restrictions:</h2>
      <div className = 'preferences-grid'>
      <PreferenceGrid 
        preferences={dietary}
        onSelectionChange={handleSelectionChange}
      />
      </div>
      <div>
      <div><h2>Time:</h2></div>
      <div className = 'preferences-grid'>
        <PreferenceGrid 
          preferences={time}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      <div><h2>Distance:</h2></div>

      </div>
    </div>
  );
};

export default Preferences;