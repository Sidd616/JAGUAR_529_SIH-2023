import React from 'react'
import {Link, Router} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from './minsof.png'
import DateTimeDisplay from './DateTimeDisplay'

export default function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGuideClick = () => {
    navigate('/user');  
  };

  const handleConnectClick = () => {
    navigate('/connect');  
  };
  return (
   
    <nav className="mynavbar">
        <img className='logo' src={logo} alt='Ministry of Coal'></img>
        {/* <button type="button" id='naver'  className="btn btn-outline-primary" onClick={() => handleHomeClick()}>Home</button>
        <button type="button"  id='naver' className="btn btn-outline-primary" onClick={() => handleGuideClick()}>User Guides</button>
        <button type="button"  id='naver' className="btn btn-outline-primary" onClick={() => handleConnectClick()}>Connect</button> */}
        <div className="links">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/user">User Guide</Link>
        </li>
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/connect">Connect</Link>
        </li>
        </ul>
        <DateTimeDisplay/>
      </div>

    
    </nav>
  
  )
}
