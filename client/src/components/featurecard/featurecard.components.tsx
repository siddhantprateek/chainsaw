import React from 'react';
import { LOCK } from '../../assets';
import './featurecard.styles.css';

const Featurecard = (props: any) => {
  return (
    <div className={`feature-card ${props.color}`}>
        <img className='feature-img' src={LOCK} alt="" />
        <h1>Doing all the little things right</h1>
        <p>We only have a few firewalls with policies consisting of tens of rules.</p>
    </div>
  )
}

export default Featurecard;