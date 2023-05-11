import React from 'react';
import "./styles/Tetris.css";
import GameController from './GameController';
import Board from "./Board";
import Previews from "./Previews";
import GameStats from "./GameStats";

import { useBoard } from "../hooks/useBoard";
import  { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";




function Tetris ({rows, columns, setGameOver}) {
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({
      rows, 
      columns,
      player,
      resetPlayer,
      addLinesCleared
    });
   
    return (
      <div className='Tetris'>
        <Board board={board} />
        <GameStats gameStats={gameStats} />
        <Previews tetrominoes = {player.tetrominoes} />
        <GameController
          board= {board}
          gameStats={gameStats}
          player={player}
          setGameOver={setGameOver}
          setPlayer={setPlayer}
          />
      </div>
    )
  };

export default Tetris;
