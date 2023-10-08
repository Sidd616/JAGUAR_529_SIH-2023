import React from 'react'

export default function Alert() {
  return (
    <div>
      <div id="searching-alert" className="alert alert-primary" role="alert" data-bs-delay="5000" data-bs-autohide="false">
            <h4 className="alert-heading">Searching for Available Trucks</h4>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
      </div>
    </div>
  )
}
