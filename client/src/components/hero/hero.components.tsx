import React from 'react'
import { LAYDOWNSVG } from '../../assets';
import './hero.styles.css';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-left-content">
            <h1>Solution to</h1><br/>
            <h1 className='green-box'>Secure</h1><br/>
            <h1>Living</h1><br/>
        </div>
        <div className="hero-right-container">
            <img className='hero-image' src={LAYDOWNSVG} alt="" />
        </div>
    </div>
  )
}

export default Hero;