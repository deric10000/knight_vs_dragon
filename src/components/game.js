import React, { Component } from 'react';
import { Board } from './board';
// import { movementHandler } from '../gameLogic/movementHandler'

//player is the knight
//the dragon is the enemy
//turn based strategy with a sprinkle of D&D style combat system
//board will be setup like chess or checkers
//player collects attack options on the map and can use them immediately
//player and dragon "roll" for initiative to see who goes first (similar to D&D)
//player attacks might include: sword attack (range would be one square), archery attack (range would be multiple squares)
//when player attacks, player must "roll" to see if he hits and see what damage he does
//player moves one square per round, maybe there is a collectable that allows player to move more squares
//dragon can use attacks at will, but maybe there are attacks that the dragon can collect if left alone too long that could increase his range

//possibilty for future gameplay: Could incorporate a DM and the ability to design levels for charactor encounters
//as well as additional monsters to fight and party vs party or party vs DM

// git checkout master
// git pull origin master
// git merge square
// git push origin master

// right = +1, left = -1, up = -4, down = +4

const makeSquare = () => {
  return [
    {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},
    {x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:3,y:-1},
    {x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:3,y:-2},
    {x:0,y:-3},{x:1,y:-3},{x:2,y:-3},{x:3,y:-3}
  ]
}

// const makeSquares = () => {
//   var rows = [];
//   console.log(rows)
//   for (var x = 0, y = 0; x < 4; x++) {
//         rows.push(makeSquare(x, y));
//   };
//   for (var x = 0, y = -1; x < 4; x++) {
//         rows.push(makeSquare(x, y));
//   };
//   for (var x = 0, y = -2; x < 4; x++) {
//         rows.push(makeSquare(x, y));
//   };
//   for (var x = 0, y = -3; x < 4; x++) {
//         rows.push(makeSquare(x, y));
//   };
//   return rows;
// };

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: makeSquare(),
      knightPos: {x:2,y:0}
    };
    this.moveTheKnight = this.moveTheKnight.bind(this);
  }

  moveTheKnight() {
    const movementChecker = (event) => {
      const key = event.keyCode;
      var currentX = this.state.knightPos.x;
      var currentY = this.state.knightPos.y;
      var consoleLogger = { key: key, lastPos: currentX, currentY };

      if (key === 37) {
        console.log(consoleLogger);
        this.setState({
          knightPos: {x: currentX - 1, y: currentY }
        });
      } else if (key === 38) {
        console.log(consoleLogger);
        this.setState({
          knightPos: {x: currentX, y: currentY + 1 }
        });
      } else if (key === 39) {
        console.log(consoleLogger);
        this.setState({
          knightPos: {x: currentX + 1, y: currentY }
        });
      } else if (key === 40) {
        console.log(consoleLogger);
        this.setState({
          knightPos: {x: currentX, y: currentY - 1 }
        });
      } else {
        return null
      }
      document.removeEventListener('keydown', movementChecker);
    }
    document.addEventListener('keydown', movementChecker)
  }

  render(){
    return (
      <div className="game">
        <h1>Game</h1>
        <Board
          square={ this.state.square }
          knightPos={ this.state.knightPos }
          keydown={ this.moveTheKnight() }
        />
      </div>
    )
  }
}
