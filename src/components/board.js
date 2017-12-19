import React from 'react';
import { Square } from './square';

export const Board = ({square, knightPos, keydown}) => (
  <div className="board">
    <h2>Board</h2>
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square
            key={ i }
            square={ square }
            knightPos={ knightPos }
            keydown={ () => keydown }
          />
        )
      }
    </div>
  </div>
)
