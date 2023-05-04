import React from 'react';
import "./styles/Menu.css";


function Menu({onClick}) {
  return (
    <div className='Menu'>
        <button className="Button" onClick={onClick}>
            Play
        </button> 
    </div>
  );
}

export default Menu;
