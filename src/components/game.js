import React, { Component } from 'react';
import { Board } from './board';
import { movementHandler } from '../gameLogic/movementHandler'

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

const makeSquare = (i) => {
  return {
    value: i
  }
}

const makeSquares = () => {
  var rows = [];
  for (var i = 0; i < 16; i++) {
        rows.push(makeSquare(i));
  };
  return rows;
};

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: makeSquares(),
      knightPos: 0
    };
  }

  render(){
    return (
      <div className="game">
      { movementHandler() }
        <h1>Game</h1>
        <Board square={ this.state.square } knightPos={ this.state.knightPos } />
      </div>
    )
  }
}
