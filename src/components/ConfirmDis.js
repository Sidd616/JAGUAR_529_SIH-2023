import React from 'react'
import {Link} from 'react-router-dom'
import './Confirm.css';

export default function ConfirmDis() {
  return (
    <div className="row justify-content-center" style={{marginTop:'150px'}} >
      <div className="card col-8 mt-5" >
      <div className="card-body">
        <h5 className="card-title text-center mb-3">Are you sure!<br></br> Do you want to Disconnect?</h5>
        <div className="text-center">
            <Link to="/dumperBack" className="btn btn-primary mx-4">No</Link>
            <Link to="/connect" className="btn btn-danger my-1">Disconnect</Link>
        </div>
        </div>
        </div>
    </div>
    
  )
}
