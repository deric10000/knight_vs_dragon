import React from 'react';
import { Square } from './square';

export const Board = ({square, knightPos, keydown, knightIsActive}) => (
  <div className="board">
    <div className="flexcontainer">
      {
        square.map((square, i) =>
          <Square
            key={ i }
            square={ square }
            knightPos={ knightPos }
            keydown={ () => keydown }
            knightIsActive={ knightIsActive }
          />
        )
      }
    </div>
  </div>
)
