import React from 'react'

export default function DumperStatus() {
     
  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Connection Secured</strong> successfully!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      
      </div>
      <button type="button" class="btn btn-danger" id="exit" 
      style={{position: 'absolute',bottom: '1', start: '0', margin:'15px'}}>Disconnect</button>
    </div>
  )
}
