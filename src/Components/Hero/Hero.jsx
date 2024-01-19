import React from 'react';
import './Hero.css'; // Use a relative import

import hand_icon from '../Asset/hand_icon.png';
import arrow_icon from '../Asset/arrow.png';
import hero_img from '../Asset/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div className="hero-hand-icon"> 
          <div>NEW</div>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p> for everyone</p>
      </div>
      
      <div className="hero_right"> 
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
