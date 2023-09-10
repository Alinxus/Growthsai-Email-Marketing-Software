// frontend/components/FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setIsFileSelected(true);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here (e.g., send the file to the server)
      onFileUpload(selectedFile);

      // Clear the selected file and reset the state
      setSelectedFile(null);
      setIsFileSelected(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept=".jpg, .jpeg, .png, .pdf" onChange={handleFileChange} />
      {isFileSelected && (
        <>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
