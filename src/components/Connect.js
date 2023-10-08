import React from 'react'
import {Link} from 'react-router-dom'
import './Confirm.css';
// import '../App.css';
import dumper from './images/dumper.png';
import Select from './Select';

export default function Connect() {
  return (
<div className="row justify-content-center" style={{marginTop:'9em'}}>
    
      <div className="card col-8" >
   
      <div className="card-body">
        <h5 className="card-title">Establish Connection</h5>
        <p className="card-text">Click the button below to start pairing with the nearest Dumper available.<hr></hr>To see the Load Status establish connection...</p>
        
        <div className="text-center">
          <Link to="/" className="btn btn-primary">See available</Link><br></br>
    
        </div>
        
        </div>
    </div>
    </div>
  )
}
