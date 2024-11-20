import React from 'react';
import { PreferenceProps } from '../../types/preferenceTypes';

type PreferencesGridProps = {
  preferences: PreferenceProps[];
  onSelectionChange: (id: number) => void;
};

const PreferencesGrid: React.FC<PreferencesGridProps> = ({ preferences, onSelectionChange }) => {
  return (
    <div className='preferences-grid'>
      {preferences.map((preference) => (
        <div key={preference.id} >
  
          <button className='preference'
            onClick={() => onSelectionChange(preference.id)}
            >
              {
              /^\d/.test(preference.name)  ?  ( 
              <img src={`/${preference.name}.png`} className="image" 
                style={{display:'block', paddingLeft: '40px', paddingBottom: '20px', alignItems:'center', width:'100px', height:'140px'}}
                /> 
            ) :  <img src={`/${preference.name}.png`} className="image" 
            style={{display:'block', paddingLeft: '40px', paddingBottom: '20px', alignItems:'center', width:'100px', height:'100px'}}
            /> 
            }
            {/* <img src={`/${preference.name}.png`} className="image" 
            style={{display:'block', paddingLeft: '40px', paddingBottom: '20px', alignItems:'center', width:'100px', height:'100px'}}
            />  */}
              {preference.name}  
          </button>
        </div>
      ))}
    </div>
  );
};

export default PreferencesGrid;