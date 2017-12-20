import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({square, knightPos}) => (
  <div className="square" id="square">
    { square.x === knightPos.x && square.y === knightPos.y ? <Knight /> : null }
    { square.x === 3 && square.y === -3 ? <Dragon /> : null }
  </div>
)
