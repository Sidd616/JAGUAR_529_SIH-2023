import React from 'react'
import {Link} from 'react-router-dom'
import './Confirm.css';

export default function Confirm() {
  return (
    <>
    <div className="row justify-content-center" style={{marginTop:'150px'}}>
      <div className="card col-8 mt-5" >
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Are you sure!<br></br> Do you want to connect?</h5>
        <div className="text-center">
            <Link to="/connect" className="btn btn-danger mx-4">No</Link>
            <Link to="/select" className="btn btn-success my-1">YES Connect!</Link>
        </div>
        </div>
        </div>
    </div>
    </>
    
  )
}
