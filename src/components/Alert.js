import React from 'react'

export default function Alert() {
  return (
    <div>
      <div id="searching-alert" class="alert alert-primary" role="alert" data-bs-delay="5000" data-bs-autohide="false">
            <h4 class="alert-heading">Searching for Available Trucks</h4>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
      </div>
    </div>
  )
}
