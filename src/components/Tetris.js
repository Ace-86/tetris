import React from 'react';
import "./styles/Tetris.css";
import Board from "./Board";
import { useBoard } from "../hooks/useBoard";
import GameStats from "./GameStats";
import  { useGameStats } from "../hooks/useGameStats";
// import Stage from './Stage';
// import Display from './Display';
// import StartButton from './StartButton';
// import { createStage } from '../gameHelpers';
// import { StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';


function Tetris ({rows, columns, setGameOver}) {
    const [board, setBoard] = useBoard({rows, columns});
    const [gameStats, addLinesCleared] = useGameStats();

    return (
      <div className='Tetris'>
        <Board board={board} />;
        <GameStats gameStats={gameStats} />
      </div>
    )
  };

export default Tetris;
