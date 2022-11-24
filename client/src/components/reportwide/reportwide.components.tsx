import React from 'react'
import './reportwide.styles.css'
import { MarbleYellow } from '../../assets'
const Reportwide = () => {
  return (
    <div className='wide'
    style={{
      backgroundImage:`url(${MarbleYellow})`
    }}
    >
      <h2 className="wide-title">Weekly Report</h2>
      <p className="wide-sub">Track your performance</p>
      <button className='wide-button'>VIEW REPORT</button>
    </div>
  )
}

export default Reportwide;