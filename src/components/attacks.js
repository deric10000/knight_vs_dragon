import React from 'react';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';

export const Attacks = ({toggleAttackList, clickedAttackList}) => (
  <div className="attacks">
    <h3>Attacks &nbsp;
      {
        clickedAttackList === true ?
          <div id="attackList">
            <FaArrowCircleLeft className="icons" id="attacksClose" onClick={ toggleAttackList } />
              <div className="attackElement" id="basicAttack"></div>
              <div className="attackElement"></div>
              <div className="attackElement"></div>
              <div className="attackElement"></div>
              <div className="attackElement"></div>
          </div>
          :
          <FaArrowCircleRight className="icons" id="attacksOpen" onClick={ toggleAttackList } />
      }
    </h3>
  </div>
)
