import React from 'react'
import './reportAnalysis.styles.css'
import { Ellipse } from '../../assets'
import { Reportwide, Reportsquare } from '../../components'
const ReportAnalysis = () => {
  return (
    <div className='report-analysis'>
      <div className="report-text">
        <h2 className="report-title">Report Analysis</h2>
        <div className="title-items">
          <img src={Ellipse} className='item-image' alt="" />
          <div className="sidetext">Granted Access</div>
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