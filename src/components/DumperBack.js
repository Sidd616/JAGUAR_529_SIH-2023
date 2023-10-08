import React, { useState, useEffect } from 'react';
import './DumperBack.css'; // Import a CSS file for styling
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

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
    navigate('/');
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
    <Navbar/>
      {/* <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
        <strong>Connection Secured</strong> successfully!
      </div> */}
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
      
      {/* <Footer /> */}
      <button
        type="button" 
        className="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#staticBackdrop"
        id="exit"
        style={{
          position: 'fixed',
          bottom: '0',
          start: '0',
          margin: '1rem',
          //marginBottom: '3rem',
          //position-fixed bottom-0 start-0 mb-3
        }}  
      >
        Disconnect
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Attention!</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        You are now Disconnecting from the dumper...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  onClick={handleDisconnect} >Disconnect</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default DumperBack;
