import React from 'react';
import { Ellipse } from '../../assets';
import './reportcard.styles.css';

const Reportcard = () => {
  return (
    <div className='reportcard'>
      <div>
        <div className="report-header">
          <div className="report-date">{Date.now()}</div>
          <div>●●●</div>
        </div>
        <h2 className='report-title'>Brain Tumor Report</h2>
      </div>

      <div className="actions">
        <div className="notify">
          Unread Feedback
        </div>
        <div className="permission-user">
          <p>revoke</p>
          <img src={Ellipse} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Reportcard;