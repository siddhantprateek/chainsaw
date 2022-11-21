import React from 'react'
import { Hero, FeatureCard } from '../../components';
import { ONCHAIN, SECURITYIMG } from '../../assets';
import './home.styles.css';

const Home = () => {
  return (
    <div className='pages'>
      <div className="home-page">
        <div className="hero-area">
          <Hero />
        </div>
        <div className="brown-bx">
        </div>
        <div className="hr-container-2">
          <p className='p-content'>
            <p className='p-content-white'>We provide security, and transparency of sharing 
            medical data</p> in the health care system. 
          </p>
          <img className='on-chain-img' src={ONCHAIN} alt="" />
        </div>

        <div className="hr-container-3">
          <img className='secure-lock' src={SECURITYIMG} alt="" />
          <p className='p-content'>We avoid the fear of data manipulation in healthcare and supports a unique data storage pattern at the highest level of security.</p>
        </div>
        <div className="service-header">
          <h1>What we provide</h1>
          <hr />
          <hr />
        </div>
        <div className="services-container">

          <FeatureCard color="white" />
          <FeatureCard color="green" />
          <FeatureCard color="white" />
        </div>
      </div>

    </div>
  )
}

export default Home;