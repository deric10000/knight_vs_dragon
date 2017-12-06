import React, { Component } from 'react';
import { Board } from './board';

//player is the knight
//the dragon is the enemy
//turn based strategy
//board will be setup like chess or checkers
//player collects attack options on the map and can use them immediately
//player attacks might include: sword attack (range would be one square), archery attack (range would be multiple squares)
//player moves one square per round, maybe there is a collectable that allows player to move more squares
//dragon can use attacks at will, but maybe there are attacks that the dragon can collect if left alone too long that could increase his range

// git checkout master
// git pull origin master
// git merge test
// git push origin master

export class Game extends Component {
  render(){
    return (
      <div className="game">
        <h1>Game</h1>
        <Board />
      </div>
    )
  }
}
