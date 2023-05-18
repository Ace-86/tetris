// import React from "react";
// import Tetris from './components/Tetris'
import "./styles.css"
import  Game  from "./components/Game";

function App() {
  return (
    <div className="App">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Tetris Game</h1> 
      <Game rows={20} columns={10} />
        
    </div>
  );
}

export default App;
