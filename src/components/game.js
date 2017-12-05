import React, { Component } from 'react';
import { Board } from './board';

export class Game extends Component {
  render(){
    return (
      <div>
        <h1>Game</h1>
        <Board />
      </div>
    )
  }
}
