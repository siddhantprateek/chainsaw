import React from 'react'
import { Sidebar, ReportAnalysis } from '../../components'
import './dashboard.styles.css'
const Dashboard = () => {
  return (
    <div>
      <div className="all-components">
      <Sidebar/>
      <ReportAnalysis/>      
      </div>
    </div>
  )
}

export default Dashboard;