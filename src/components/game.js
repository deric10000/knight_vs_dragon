import React, { Component } from 'react';
import { Board } from './board';
import { HitPoints } from './hitpoints';
import { Attacks } from './attacks'
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

let makeSquare = [
    {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},
    {x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:3,y:-1},
    {x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:3,y:-2},
    {x:0,y:-3},{x:1,y:-3},{x:2,y:-3},{x:3,y:-3}
  ];

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: makeSquare,
      knightPos: {x:0,y:0},
      knightHealth: 30,
      knightIsActive: true,
      countKnightHasMoved: 0,
      countKnightHasAttacked: 1,
      countKnightHasUsedItem: 1,
      dragonHealth: 100,
      countDragonHasMoved: 1,
      countDragonHasAttacked: 1,
      countDragonHasUsedItem: 1,
      countRounds: 1
    };
    this.moveTheKnight = this.moveTheKnight.bind(this);
    this.roundControllerKnight = this.roundControllerKnight.bind(this);
    this.roundControllerDragon = this.roundControllerDragon.bind(this);
    this.temporaryDragonTurn = this.temporaryDragonTurn.bind(this);
  }

  moveTheKnight() {
    const movementChecker = (event) => {
      const key = event.keyCode;
      var currentX = this.state.knightPos.x;
      var currentY = this.state.knightPos.y;
      var edge = makeSquare.length - 1;
      var consoleLogger = { key: key, lastPos: currentX, currentY };
      this.roundControllerKnight(1,0,0);

      const moveLeft = () => {
        if (currentX - 1 < 0) {
          console.log("CANT MOVE LEFT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX - 1, y: currentY }
          });
        }
      }

      const moveUp = () => {
        if (currentY + 1 > 0) {
          console.log("CANT MOVE UP")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX, y: currentY + 1 }
          });
        }
      }

      const moveRight = () => {
        if (currentX + 1 > makeSquare[edge].x) {
          console.log("CANT MOVE RIGHT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX + 1, y: currentY }
          });
        }
      }

      const moveDown = () => {
        if (currentY - 1 < makeSquare[edge].y) {
          console.log("CANT MOVE DOWN")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX, y: currentY - 1 }
          });
        }
      }

      const moveDownRight = () => {
        if (currentY - 1 < makeSquare[edge].y) {
          console.log("CANT MOVE DOWN RIGHT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else if (currentX + 1 > makeSquare[edge].x) {
          console.log("CANT MOVE DOWN RIGHT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX + 1, y: currentY - 1 }
          });
        }
      }

      const moveUpRight = () => {
        if (currentY + 1 > 0) {
          console.log("CANT MOVE UP RIGHT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else if (currentX + 1 > makeSquare[edge].x) {
          console.log("CANT MOVE UP RIGHT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX + 1, y: currentY + 1 }
          });
        }
      }

      const moveDownLeft = () => {
        if (currentY - 1 < makeSquare[edge].y) {
          console.log("CANT MOVE DOWN LEFT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else if (currentX - 1 < 0) {
          console.log("CANT MOVE DOWN LEFT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX - 1, y: currentY - 1 }
          });
        }
      }

      const moveUpLeft = () => {
        if (currentY + 1 > 0) {
          console.log("CANT MOVE UP LEFT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else if (currentX - 1 < 0) {
          console.log("CANT MOVE UP LEFT")
          this.setState({
            knightPos: {x: currentX, y: currentY }
          });
        } else {
          this.setState({
            knightPos: {x: currentX - 1, y: currentY + 1 }
          });
        }
      }

      switch (key) {
        case 37:
          moveLeft();
          break;
        case 38:
          moveUp();
          break;
        case 39:
          moveRight();
          break;
        case 40:
          moveDown();
          break;
        case 65:
          moveDownRight();
          break;
        case 66:
          moveDownLeft();
          break;
        case 67:
          moveUpLeft();
          break;
        case 68:
          moveUpRight();
          break;
        default:
          return null;
      }
      document.removeEventListener('keydown', movementChecker);
    }
    document.addEventListener('keydown', movementChecker);
  }

  roundControllerKnight(knightMove, knightAttack, knightItem) {
    var knightHasMoved = this.state.countKnightHasMoved;
    var knightHasAttacked = this.state.countKnightHasAttacked;
    var knightHasUsedItem = this.state.countKnightHasUsedItem;

    (knightHasMoved + knightMove > 0) &&
    (knightHasAttacked + knightAttack > 0) &&
    (knightHasUsedItem + knightItem > 0)
    ? this.setState({
      knightIsActive: false,
    })
    : console.log('error with knight');
  }

  roundControllerDragon(dragonMove, dragonAttack, dragonItem) {
    var dragonHasMoved = this.state.countDragonHasMoved;
    var dragonHasAttacked = this.state.countDragonHasAttacked;
    var dragonHasUsedItem = this.state.countDragonHasUsedItem;
    var round = this.state.countRounds;

    (dragonHasMoved > 0) &&
    (dragonHasAttacked > 0) &&
    (dragonHasUsedItem > 0)
    ? this.setState({
      knightIsActive: true,
      countRounds: round + 1
    })
    : console.log(dragonHasMoved, dragonHasAttacked, dragonHasUsedItem, 'error with dragon');
  }

  temporaryDragonTurn() {
    //replace this function with dragon AI functionality
    const movementChecker = () => {
      this.roundControllerDragon(1,1,1);
      document.removeEventListener('click', movementChecker);
    }
  document.addEventListener('click', movementChecker);
  }

  render(){
    return (
      <div className="game">
        <header>
          <h1>Knight VS Dragon</h1>
          <h3>Round: { this.state.countRounds }</h3>
        </header>
        <HitPoints
          knightHP={this.state.knightHealth}
          dragonHP={this.state.dragonHealth}
        />
        <Board
          square={ this.state.square }
          knightPos={ this.state.knightPos }
          keydown={ this.state.knightIsActive ? this.moveTheKnight() : null }
          knightIsActive={ this.state.knightIsActive }
        />
        <Attacks />
        <button id="temporaryBtn" onClick={ () => this.temporaryDragonTurn() }>Dragon Turn</button>
      </div>
    )
  }
}
