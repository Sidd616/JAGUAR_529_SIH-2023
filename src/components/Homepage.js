import React, { useState, useEffect } from 'react';
import './Homepage.css';

// import "./trucks.json";

import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [trucks, setTrucks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      // Fetch the truck data when the component mounts
      fetch('trucks.json') // Replace with the actual path to your JSON file
        .then((response) => response.json())
        .then((data) => setTrucks(data))
        .catch((error) => console.error('Error fetching truck data:', error));
    }, []);

//   const trucks = [
//     {
//       id: 1,
//       name: 'Truck 1',
//       numberPlate: 'MH01-AP-3545',
//       modelNumber: 'Model XYZ',
//       capacity: '5 tons',
//     },
//     {
//       id: 2,
//       name: 'Truck 2',
//       numberPlate: 'MH01-BH-7829',
//       modelNumber: 'Model ABC',
//       capacity: '4 tons',
//     },
//   ];

  const handleTruckClick = (truck) => {
    setSelectedTruck(truck);
  };

  const handleClosePopup = () => {
    setSelectedTruck(null);
  };

  const handleSelection = () => {
      // setSelectedTruck(null);
      navigate('/confirm');
    };

  return (
<div className="homepage">
      <div className="search-ring"></div>
      <div className="search-ring"></div>
      <div className="search-ring"></div>
      <div className="center-circle">
        <h5 className="center-heading">Available Dumpers    
        <div className="spinner-grow spinner-grow-sm" id="spin" style={{color: '#16FF00'}} role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" id="spin" style={{color: '#16FF00'}} role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" id="spin" style={{color: '#16FF00'}} role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            </h5>
         {/* <div className="truck-container">
          {trucks.map((truck) => (
            <div
              key={truck.id}
              className="truck-item"
              onClick={() => handleTruckClick(truck)}
            >
              <div className="truck-content">
                <h3>{truck.name}</h3>
                <p>Number Plate: {truck.numberPlate}</p>
                <p>Model Number: {truck.modelNumber}</p>
                <p>Capacity: {truck.capacity}</p>
              </div>
            </div>
          ))}
        </div> */}
        {/* <ul className="list-group list-group-flush" id="truck-list">
        {trucks.map((truck) => (
                  <li key={truck.id}
                   className="list-group-item"
                   id="truck-item"
                   onClick={() => handleTruckClick(truck)}
                   >{truck.name}
                   </li>
                  ))}
            </ul> */}
      <div className="truck-container">
      <ul className="list-group" id="truck-list">
          {trucks.map((truck, index) => (
            <li
              key={truck.id}
              className={`list-group-item ${index % 2 === 0 ? 'even' : 'odd'}`}
              onClick={() => handleTruckClick(truck)}
            >
              {truck.name}
            </li>
          ))}
        </ul>
        </div>

      </div>
      {selectedTruck && (
        <div className="popup">
          <h2 className="popup-heading">{selectedTruck.name}</h2>
          
          <ul className="popup-details">
            <li>
              <strong>Number Plate:</strong> {selectedTruck.numberPlate}
            </li>
            <li>
              <strong>Model Number:</strong> {selectedTruck.modelNumber}
            </li>
            <li>
              <strong>Capacity:</strong> {selectedTruck.capacity}
            </li>
          </ul>
          
          <div className="options">
          <button className="btn btn-warning mx-4" id="popup-close" onClick={handleClosePopup}>
            Back
          </button>
          <button className="btn btn-success mx-4" onClick={handleSelection}>
            Select
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
