import React, { useState, useEffect } from 'react';
import './DumperBack.css'; // Import a CSS file for styling
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const DumperBack = () => {
  const [loadCellData, setLoadCellData] = useState([]); // Initialize an empty array for loadCell data
  const navigate = useNavigate();

  // Function to calculate the color based on weight
  const getColor = (weight) => {
    if (weight < 50) return 'blue';
    if (weight < 100) return 'green';
    if (weight < 150) return 'orange';
    return 'red';
  };

  const handleDisconnect = () => {
    navigate('/confirmDis');
  };

  // Fetch the JSON data and update the loadCellData state
useEffect(() => {
  // Replace 'your-json-url' with the actual URL of your JSON file
  fetch('trucks.json')
    .then((response) => response.json())
    .then((data) => {
      // Assuming data is an array containing one object with 'loadCell' property
      if (Array.isArray(data) && data.length === 1 && data[0].loadCell) {
        setLoadCellData(data[0].loadCell);
      }
    })
    .catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
}, []); // Empty dependency array to fetch data once when the component mounts


  return (
    <>
      <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
        <strong>Connection Secured</strong> successfully!
      </div>
      <div className='outerBox'>
        <div className='front'>
            <p>
              F<br></br>
              R<br></br>
              O<br></br>
              N<br></br>
              T
              </p>
              <p>
              E<br></br>
              N<br></br>
              D
              </p>
        </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dumper-back">
          {loadCellData.map((weight, index) => (
            <div
              key={index}
              className={`dumper-part ${getColor(weight)}`}
            >
              {weight} kg
            </div>
          ))}
        </div>
      </div>
      <div className='front'>
            <p>
              R<br></br>
              E<br></br>
              A<br></br>
              R
              </p>
              <p>
              E<br></br>
              N<br></br>
              D
              </p>
        </div>
      </div>
      
      <Footer />
      <button
        type="button"
        className="btn btn-danger"
        id="exit"
        onClick={handleDisconnect}
        style={{
          position: 'absolute',
          bottom: '0',
          start: '0',
          margin: '15px',
          marginBottom: '55px',
        }}
      >
        Disconnect
      </button>
    </>
  );
};

export default DumperBack;
