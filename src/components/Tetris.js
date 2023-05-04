import React from 'react';
import "./styles/Tetris.css"
import Board from "./Board"
import { useBoard } from "../hooks/useBoard"
// import Stage from './Stage';
// import Display from './Display';
// import StartButton from './StartButton';
// import { createStage } from '../gameHelpers';
// import { StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';


function Tetris ({rows, columns, setGameOver}) {
    const [board, setBoard] = useBoard({rows, columns});

  return <Board board={board}/>
}

export default Tetris;
