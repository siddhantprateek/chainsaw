import React from 'react'
import './reportAnalysis.styles.css'
import { Ellipse } from '../../assets'
import { Reportwide, Reportsquare } from '../../components'

const UserProfile = () => (
<div className="title-items">
  <img src={Ellipse} className='item-image' alt="" />
</div>
);


const ReportAnalysis = () => {
  return (
    <div className='report-analysis'>

      <div className="report-text">
        <h2 className="report-title">Report Analysis</h2>
        <div className="grant-section">
          <div className="granted-user">
            <UserProfile />
            <UserProfile />
            <UserProfile />
          </div>
          <p className="sidetext">Granted Access</p>
        </div>
      </div>
      <div className='cards'>
        <Reportwide />
        <Reportsquare />
      </div>

    </div>
  )
}

export default ReportAnalysis
