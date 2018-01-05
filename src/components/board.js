import React from 'react';
import { Square } from './square';

export const Board = ({square, knightPos, keydown, knightIsActive, lastKnightPos}) => (
  <div className="board">
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square
            key={ i }
            square={ square }
            knightPos={ knightPos }
            lastKnightPos={ lastKnightPos }
            keydown={ () => keydown }
            knightIsActive={ knightIsActive }
          />
        )
      }
    </div>
  </div>
)
