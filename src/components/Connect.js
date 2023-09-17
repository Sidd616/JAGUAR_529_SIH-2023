import React from 'react'
import {Link} from 'react-router-dom'

// import '../App.css';
import dumper from './images/dumper.png';
import Select from './Select';

export default function Connect() {
  return (

      <div className="row justify-content-center" style={{marginTop:'130px'}}>
        {/* <Select/> */}
      <div className="card col-8 mt-5" >
      {/* <img src={dumper} className="card-img-top" alt="dumper"/> */}
      <div className="card-body">
        <h5 className="card-title">Establish Connection</h5>
        <p className="card-text">Click the button below to start pairing with the nearest Dumper available.<hr></hr>To see the Load Status establish connection...</p>
        
        <div className="text-center">
          <Link to="/" className="btn btn-success">See available</Link><br></br>
    
        </div>
        
        </div>
    </div>
    </div>
  )
}
