import React from 'react'
import './sidebar.styles.css'
import { Man, Dashboard, Resources, Settings } from '../../assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top-section'>
        <div className="profile">
            <img className='profile-image' src={ Man } alt="" />
          <div className="profile-text">
            <h3 className="title">Dr. Amberson</h3>
            <p className="sub">Professor</p>
          </div>
        </div>
        <div className="sidebar-items">
          <ul>
            <li className="items">
              <img src= { Dashboard } alt="" />
              Dashboard</li>
            <li className="items">
              <img src= { Resources} alt="" />
              Resources</li>
            <li className="items">
              <img src={ Settings } alt="" />
              Settings</li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
         <img src="" alt="AL" />
          <p>Disconnect</p>
      </div>
    </div>
  )
}

export default Sidebar;