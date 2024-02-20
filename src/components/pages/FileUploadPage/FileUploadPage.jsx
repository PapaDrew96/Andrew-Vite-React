// src/components/FileUploadPage.jsx
import React, { useState } from 'react';
import './FileUploadPage.css';

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implement the file upload logic here
    console.log('Uploading', selectedFile?.name);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <button onClick={handleUpload}>Upload</button>}
    </div>
  );
};

export default FileUploadPage;
