import React, { Component } from 'react';
import { BasicAttack, BasicDefend } from './availableAttacks';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';

export class Attacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAttackList: false
    };
    this.toggleAttackList = this.toggleAttackList.bind(this);
  }

  toggleAttackList() {
    if (this.state.clickedAttackList === false) {
      this.setState(() => {
        return {
          clickedAttackList: true
        }
      })
    } else {
      this.setState(() => {
        return {
          clickedAttackList: false
        }
      })
    }
  }

  render() {
      return (
      <div className="attacks">
        <h3>Attacks &nbsp;
          {
            this.state.clickedAttackList === true ?
              <div id="attackList">
                <FaArrowCircleLeft className="icons" id="attacksClose" onClick={ this.toggleAttackList } />
                  <div className="attackElement" id="basicAttack">
                    <BasicAttack
                      knightBasicAttack={ this.props.knightBasicAttack }
                      knightHasAttacked={ this.props.knightHasAttacked }
                    />
                  </div>
                  <div className="attackElement">
                    <BasicDefend />
                  </div>
                  <div className="attackElement"></div>
                  <div className="attackElement"></div>
                  <div className="attackElement"></div>
              </div>
              :
              <FaArrowCircleRight className="icons" id="attacksOpen" onClick={ this.toggleAttackList } />
          }
        </h3>
      </div>
    )
  }
}
