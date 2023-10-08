import React from 'react'
import {Link} from 'react-router-dom'
import './Confirm.css';
import Navbar from './Navbar'

export default function ConfirmDis() {
  return (
    <>
    <Navbar/>
    <div className="row justify-content-center" style={{marginTop:'9em'}}>
      <div className="card col-8" >
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Are you sure!<br></br> Do you want to Disconnect?</h5>
        <div className="text-center">
            <Link to="/dumperBack" className="btn btn-secondary mx-4">No</Link>
            <Link to="/" className="btn btn-primary my-1">Disconnect</Link>
        </div>
        </div>
        </div>
    </div>
    </>
    
  )
}
