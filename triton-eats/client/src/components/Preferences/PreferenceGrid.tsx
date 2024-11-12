// import React, { useState } from 'react';
// import Preferences from './Preferences';

// type PreferencesData = {
//     id: number;
//     name: string;
//     selected: boolean;
// };

// const PreferencesGrid: React.FC = () => {
//     const [preferences, setPreferences] = useState<PreferencesData[]>([
//         //Sixth
//         { id: 1, name: 'Dairy', selected: false },
//         { id: 2, name: 'Tree Nuts', selected: false },
//         { id: 3, name: 'Soy',  selected: false },
//         { id: 4, name: 'Wheat', selected: false },
//         { id: 5, name: 'Fish',  selected: false },
//         // Club Med
//         { id: 6, name: 'Shellfish',  selected: false },
//         // Foodworx
//         { id: 7, name: 'Peanuts',  selected: false },
//         { id: 8, name: 'Eggs',  selected: false },
//         // 64 Degrees
//         { id: 9, name: 'Sesame',  selected: false },
//         { id: 10, name: 'Gluten',  selected: false },
       
    
//     ]);

//     const handleSelected = (id: number) => {
//         setPreferences((prevPrefs) =>
//             prevPrefs.map((pref) =>
//                 pref.id === id ? { ...pref, selected: !pref.selected } : pref
//             )
//         );
//     };

    
//     return (
//         <div className="preferences-grid">
//             {preferences.map((preference) => (
//                 <Preferences
//                     key={preference.id}
//                     name={preference.name}
//                     selected={preference.selected}
//                     onSelected={() => handleSelected(preference.id)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default PreferencesGrid;

import React from 'react';
import { PreferenceProps } from '../../types/preferenceTypes';

type PreferencesGridProps = {
  preferences: PreferenceProps[];
  onSelectionChange: (id: number) => void;
};

const PreferencesGrid: React.FC<PreferencesGridProps> = ({ preferences, onSelectionChange }) => {
  return (
    <div className="preferences-grid">
      {preferences.map((preference) => (
        <div key={preference.id}>
          <input
            type="checkbox"
            checked={preference.selected}
            onChange={() => onSelectionChange(preference.id)}
          />
          <label>{preference.name}</label>
        </div>
      ))}
    </div>
  );
};

export default PreferencesGrid;