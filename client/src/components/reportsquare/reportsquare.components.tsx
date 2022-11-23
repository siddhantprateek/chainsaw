import React from 'react'
import './reportsquare.styles.css'
import { MarbleBlue, MarbleGreen } from '../../assets'
const Reportsquare = () => {
  return (
    <div className='square'>
        <div className='squarecard'
          style={{
            backgroundImage: `url(${MarbleBlue})`
          }}
        >
          <h2 className="wide-title">Study 78X</h2>
          <p className="wide-sub">In Progress</p>
          <button className='square-button'>VIEW REPORT</button>
        </div>

        <div className='squarecard'
          style={{
            backgroundImage: `url(${MarbleGreen})`
          }}
        >
          <h2 className="wide-title">Analysis</h2>
          <p className="wide-sub">Completed</p>
          <button className='square-button'>VIEW REPORT</button>
        </div>

    </div>
  )
}

export default Reportsquare;