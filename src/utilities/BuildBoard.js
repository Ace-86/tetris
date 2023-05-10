import React from 'react';
import {defaultCell} from "./Cell"
import { transferToBoard } from './Tetrominoes';


export const buildBoard = ({ rows, columns }) => {
const buildRows = Array.from({ length: rows}, () =>
  Array.from({length : columns}, () => ({...defaultCell}))
);

  return {
    rows: buildRows,
    size: {rows, columns}
  };
}

export const nextBoard = ({
  board,
  player, 
  resetPlayer, 
  addLinesCleared
}) => {
  const { tetromino, position } = player;

  let rows = board.rows.map((row) => 
    row.map((cell) => (cell.occupied ? cell : {...defaultCell}))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape
  });

  return {
    rows,
    size: { ...board.size}
  };
};

export const hasCollision = ({ board, position, shape}) => {
  for (let y= 0; y < shape.length; y++) {
    const row = y + position.row;

    for(let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }
  return false; 
}

export const isWithinBoard = ({ board, position, shape}) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidRotation = board.row[row] && board.rows[row][column];
      
      if (!isValidRotation) return false;
      }
    }
  }

  return true;
}

