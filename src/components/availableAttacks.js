import React from 'react';
import FaShield from 'react-icons/lib/fa/shield';
import MdFlashAuto from 'react-icons/lib/md/flash-auto'

export const BasicAttack = () => (
  <div className="availableAttacks">
    <MdFlashAuto className="icons" id="attacksClose" onClick={ () => console.log("BASIC ATTACK") } />
  </div>
)

export const BasicDefend = () => (
  <div className="availableAttacks">
    <FaShield className="icons" id="attacksClose" onClick={ () => console.log("BASIC DEFEND") } />
  </div>
)
