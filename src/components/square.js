import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({square, knightPos, changeBorderColor}) => (
  <div className="square" id="square">
    { square.x === knightPos.x && square.y === knightPos.y ? <Knight /> : null }
    { square.x === 3 && square.y === -3 ? <Dragon /> : null }
    { (square.x === knightPos.x + 1 && square.y === knightPos.y) ||
      (square.x === knightPos.x && square.y === knightPos.y - 1) ||
      (square.x === knightPos.x - 1 && square.y === knightPos.y) ||
      (square.x === knightPos.x && square.y === knightPos.y + 1) ||
      (square.x === knightPos.x + 1 && square.y === knightPos.y + 1) ||
      (square.x === knightPos.x - 1 && square.y === knightPos.y - 1) ||
      (square.x === knightPos.x + 1 && square.y === knightPos.y - 1) ||
      (square.x === knightPos.x - 1 && square.y === knightPos.y + 1)
        ? <div className='availableMove' /> : null }
  </div>
)
