import React from 'react';
import { Square } from './square';

export const Board = ({square, knightPos, knightIsActive, lastKnightPos}) => (
  <div className="board">
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square
            key={ i }
            square={ square }
            knightPos={ knightPos }
            lastKnightPos={ lastKnightPos }
            knightIsActive={ knightIsActive }
          />
        )
      }
    </div>
  </div>
)
