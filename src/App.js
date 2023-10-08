
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Confirm from './components/Confirm';
import ConfirmDis from './components/ConfirmDis';
import Connect from './components/Connect';
import Homepage from './components/Homepage';
import DumperStatus from './components/DumperStatus';
import DumperBack from './components/DumperBack';
import Select from './components/Select';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import MainContent from './components/MainContent';
import UserGuide from './components/UserGuide';

function App() {
  return (
    <>
      
      <SplashScreen/>
      <Router>
        <Routes>
        
        <Route exact path="/" element={<MainContent/>} />
        <Route exact path="/user" element={<UserGuide/>} />
          <Route exact path="/connect" element={<Homepage/>} />
          <Route exact path="/cross" element={<Connect/>} />
          <Route exact path="/confirm" element={<Confirm/>} />
          <Route exact path="/dumperStatus" element={<DumperStatus/>} />
          <Route exact path="/dumperBack" element={<DumperBack/>} />
          <Route exact path="/confirmDis" element={<ConfirmDis/>} />
          <Route exact path="/select" element={<Select/>} />
        </Routes>
      
      </Router>
      </>
  );
}

export default App;
