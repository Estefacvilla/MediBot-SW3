import React from 'react';
import '../styles/body.css';
import smile from '../images/agmLandPic.png';

function Body() {
    return (
        <div className="body-container">
            <img className="landing__image" src={smile} alt="SmilePic" />
        </div>
    );
}
export default Body;
