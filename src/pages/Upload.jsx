import React from 'react';
import './Upload.css';

const Upload = () => {
  return (
    <div className="upload">
      <h2>Upload Excel File</h2>
      <p>Drag and drop your Excel file here or click the button below</p>
      <button className="upload-button">Choose File</button>
    </div>
  );
};

export default Upload;
