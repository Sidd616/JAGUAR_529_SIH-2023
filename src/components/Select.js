import React from 'react'
import './Select.css'
import sand from './sand.jpeg'
import sandStone from './sandStone.jpg'
import coal from './coal.jpg'
import { useNavigate } from 'react-router-dom';

export default function Select() {
  const navigate = useNavigate();

  const handleSandClick = () => {
    navigate('/dumperBack');
  };

  const handleSandStoneClick = () => {
    navigate('/dumperBack');  
  };

  const handleCoalClick = () => {
    navigate('/dumperBack');  
  };

  return (
    <>
    <div className='choice'>
    <h4 className='selhf'>Select Material</h4>
    <div className='pushCat'>
      <div className="myCard" onClick={() => handleSandClick()}>
          <img className='selectImg' src={sand} alt='Sand'></img>
          <h2 className='selht'>Sand</h2>
      </div>
      <div className="myCard" onClick={() => handleSandStoneClick()}>
          <img className='selectImg' src={sandStone} alt='Sand Stone'></img>
          <h2 className='selht'>Sandstone</h2>
      </div>
      <div className="myCard" onClick={() => handleCoalClick()}>
          <img className='selectImg' src={coal} alt='Coal'></img>
          <h2 className='selht'>Coal</h2>
      </div>
    </div>
    </div>
    </>
  )
}
