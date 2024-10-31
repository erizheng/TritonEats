import React from 'react'
import '../CSS/Homepage.css';

export const HomeSidebar: React.FC = () => {
    return (
        <div className='home-sidebar'>
            <h2>Open Dining Halls</h2>
            <h3>Capacity</h3>

            <div className="divider"></div>

            {/* Dining Hall Location*/}
            <div className="dining-hall">
                <span className="dining-hall-name">64 Degrees</span>
                <span className="dining-hall-status">63% Busy</span>
                <div className="progress-bar" style={{ width: '63%' }}></div>
            </div>

            <div className="dining-hall">
                <span className="dining-hall-name">7th Market</span>
                <span className="dining-hall-status">34% Busy</span>
                <div className="progress-bar" style={{ width: '34%' }}></div>
            </div>

            <div className="dining-hall">
                <span className="dining-hall-name">Ventanas</span>
                <span className="dining-hall-status">10% Busy</span>
                <div className="progress-bar" style={{ width: '10%' }}></div>
            </div>

            <div className="dining-hall">
                <span className="dining-hall-name">Canyon Vista</span>
                <span className="dining-hall-status">15% Busy</span>
                <div className="progress-bar" style={{ width: '15%' }}></div>
            </div>
        
        </div> 
    );
};

export default HomeSidebar;