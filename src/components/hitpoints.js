import React from 'react';

export const HitPoints = ({knightHP, dragonHP}) => (
  <div className="hitpoints">
    <div id="knightHP">
      <h3>Knight Health</h3>
      <p>{ knightHP }</p>
    </div>
    <div id="dragonHP">
      <h3>Dragon Health</h3>
      <p>{ dragonHP }</p>
    </div>
  </div>
)
