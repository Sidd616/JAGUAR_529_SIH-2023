import React, { useState, useEffect } from 'react';
import './DateTime.css';

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const optionsTime = { hour: '2-digit', minute: '2-digit' };
  const formattedDate = dateTime.toLocaleDateString(undefined, optionsDate);
  const formattedTime = dateTime.toLocaleTimeString(undefined, optionsTime);

  return (
    <div className='timebox'>
      <p id='time'>{formattedTime}</p>
      <p id='date'>{formattedDate}</p>
    </div>
  );
}

export default DateTimeDisplay;
