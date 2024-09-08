import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const storedData = localStorage.getItem('userData');
  const userData = JSON.parse(storedData);

  const [file, setFile] = useState(null);
  const emailName = userData.email;
  

  const handleFileChange   
 = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('emailname', emailName)
    formData.append('file', file);
    if (userData.email){
      try {
        const response = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);   

      }
    } else {
      console.log('Not signed in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>   

  );
}

export default FileUpload;