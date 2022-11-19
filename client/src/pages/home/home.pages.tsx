import React from 'react'
import { Hero } from '../../components';
import './home.styles.css';

const Home = () => {
  return (
    <div className='pages'>
      <div className="home-page">
        <Hero />
      </div>
    </div>
  )
}

export default Home;