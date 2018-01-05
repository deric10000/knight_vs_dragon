import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({square, knightPos, knightIsActive, lastKnightPos}) => (
  <div className="square" id="square">
    { square.x === knightPos.x && square.y === knightPos.y ? <Knight /> : null }
    { square.x === 3 && square.y === -3 ? <Dragon /> : null }
    { knightIsActive === true ? (
        (square.x === lastKnightPos.x + 1 && square.y === lastKnightPos.y) ||
        (square.x === lastKnightPos.x && square.y === lastKnightPos.y - 1) ||
        (square.x === lastKnightPos.x - 1 && square.y === lastKnightPos.y) ||
        (square.x === lastKnightPos.x && square.y === lastKnightPos.y + 1) ||
        (square.x === lastKnightPos.x + 1 && square.y === lastKnightPos.y + 1) ||
        (square.x === lastKnightPos.x - 1 && square.y === lastKnightPos.y - 1) ||
        (square.x === lastKnightPos.x + 1 && square.y === lastKnightPos.y - 1) ||
        (square.x === lastKnightPos.x - 1 && square.y === lastKnightPos.y + 1)
          ? <div className='availableMove' /> : null
      ) : null
    }
  </div>
)
