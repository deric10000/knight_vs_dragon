import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';
import { Square } from './square';

export const Board = ({square}) => (
  <div className="board">
    <h2>Board</h2>
    <Dragon />
    <Knight />
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square
            key={ i }
            value={ square.value }
          />
        )

      }
    </div>
  </div>
)
