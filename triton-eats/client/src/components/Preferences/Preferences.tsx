// import React, { useState } from 'react';
// import PreferencesGrid from './PreferenceGrid';

// type PreferenceProps = {
//     name: string;
//     selected: boolean;
//     onSelected: () => void;
// };

// const Preferences: React.FC<PreferenceProps> = ({ name, selected, onSelected }) => {
//     // // const capacityColor = capacity > 70 ? 'red' : capacity > 40 ? 'orange' : 'green';

//     // return (
//     //     <div className="preferences">
//     //         <h3>{name}</h3>
//     //         <p>{selected}</p>
//     //         {/* <p>{capacity}% Busy</p>
//     //         <div className="capacity-bar" style={{ backgroundColor: capacityColor, width: `${capacity}%` }}></div>
//     //         <button onClick={onFavorite}>{isFavorited ? '⭐' : '☆'}</button> */}
//     //     </div>
//     // );


//     const [preferences, setPreferences] = useState<PreferenceProps[]>([]);

//     // Handle the updated preferences coming from the grid
//     const handlePreferencesChange = (updatedPreferences: PreferenceProps[]) => {
//       setPreferences(updatedPreferences);
//     };
  
//     return (
//       <div>
//         <h1>Preferences</h1>
        
//         {/* Render the Preferences Grid */}
//         <PreferencesGrid  />
  
//         <div className="selected-preferences">
//           <h2>Selected Preferences:</h2>
//           <ul>
//             {preferences.filter(p => p.selected).map((pref, index) => (
//               <li key={index}>{pref.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
// };

// export default Preferences;
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
      <h1>Preferences</h1>
      
      {/* Pass preferences and the handler to PreferencesGrid */}
      <PreferenceGrid 
        preferences={preferences}
        onSelectionChange={handleSelectionChange}
      />
      
      <div className="selected-preferences">
        <h2>Selected Preferences:</h2>
        <ul>
          {preferences
            .filter((pref) => pref.selected)
            .map((pref) => (
              <li key={pref.id}>{pref.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Preferences;