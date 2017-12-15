import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({value, knightPos, keydown}) => (
  <div className="square" id="square" onChange={ () => keydown() } >
    { value.value === knightPos ? <Knight /> : null }
    { value.value === 15 ? <Dragon /> : null }
  </div>
)
