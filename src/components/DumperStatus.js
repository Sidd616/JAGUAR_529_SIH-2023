import React from 'react'

export default function DumperStatus() {
     
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Connection Secured</strong> successfully!
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      
      </div>
      <button type="button" className="btn btn-primary" id="exit" 
      style={{position: 'absolute',bottom: '1', start: '0', margin:'15px'}}>Disconnect</button>
    </div>
  )
}
