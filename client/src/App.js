import React, { useState } from 'react'
import './App.css';
import { useFormik } from 'formik'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);
  const [inputContainsFile, setInputContainsFile] = useState(false);
  const [currentlyUploading, setCurrentlyUploading] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [progress, setProgress] = useState(null);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    setInputContainsFile(true);
  };

  console.log(file)
  const formik = useFormik({
    initialValues: {},
    onSubmit: async (values) => {

      const fd = new FormData();

      fd.append('image', file, file.name);
      try {
        const res = await axios.post('/sendPRData', fd)
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h6>Name</h6>
          <input type="text" name="name" onChange={formik.handleChange} />
        </div>
        <div>
          <h6>Surname</h6>
          <input type="text" name="surname" onChange={formik.handleChange} />
        </div>
        <div>
          <h6>upload doc</h6>
          <input className='file-input'
            onChange={handleFile}
            type='file'
            name='file'
            id='file' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
