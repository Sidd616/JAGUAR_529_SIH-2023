import React from 'react'
import {Link} from 'react-router-dom'
import './Confirm.css';
import Navbar from './Navbar'

export default function Confirm() {
  return (
    <>
    <Navbar/>
    <div className="row justify-content-center" style={{marginTop:'9em'}}>
      <div className="card col-8 " >
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Are you sure!<br></br> Do you want to connect?</h5>
        <div className="text-center">
            <Link to="/" className="btn btn-secondary mx-4">No</Link>
            <Link to="/select" className="btn btn-primary my-1">YES Connect!</Link>
        </div>
        </div>
        </div>
    </div>
    </>
    
  )
}
