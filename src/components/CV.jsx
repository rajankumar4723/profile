import React from 'react';
import Resume from '../assets/RM.pdf';

const CV = () => {
  const handleDownloadClick = async () => {
    try {
      // Correct the file path and use forward slashes in the URL
      const response = await fetch('C:/Users/INDIA/Desktop/My Portfolio/Profile/src/assets/RM.pdf');
      const blob = await response.blob();

      // Create a data URL from the Blob data
      const dataUrl = window.URL.createObjectURL(blob);

      // Open the PDF in a new tab
      window.open(dataUrl, '_blank');
    } catch (error) {
      console.error('Error fetching or processing the PDF:', error);
    }
  };

  return (
    <div>
      {/* Your other components */}
      <button onClick={handleDownloadClick}>Open CV in New Tab</button>
    </div>
  );
};

export default CV;
