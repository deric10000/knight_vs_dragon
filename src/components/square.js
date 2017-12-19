import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({square, knightPos, keydown}) => (
  <div className="square" id="square">
    {  square.value === knightPos ? <Knight /> : null }
    { square.value === 15 ? <Dragon /> : null }
  </div>
)
