import React from 'react'
import { Sidebar, ReportAnalysis, ReportCard } from '../../components'
import './dashboard.styles.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="all-components">
        <Sidebar/>
        <ReportAnalysis/>      
        <div className="reports">
          <div className="report-section-header">
            <h2>Pinned Reports</h2>
            <p>view all</p>
          </div>
          <ReportCard/>
          <ReportCard/>
          <ReportCard/>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard;