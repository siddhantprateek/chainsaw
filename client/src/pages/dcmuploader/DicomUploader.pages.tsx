import React from 'react'
import { Sidebar } from '../../components';
import './dicomuploder.styles.css';

const DicomUploader = () => {
  return (
    <div className='dicom-uploader'>
      <Sidebar />
      <div className="uploader-section">
        <input className='upload-btn' type="file" name="" id="" />
      </div>
      <div className="editor-section">

      </div>
    </div>
  )
}

export default DicomUploader;