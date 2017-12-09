import React from 'react';
import { Square } from './square';

export const Board = ({square}) => (
  <div className="board">
    <h2>Board</h2>
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square key={ i } value={ square } />
        )
      }
    </div>
  </div>
)
