import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({value, knightPos}) => (
  <div className="square">
    { value.value === knightPos ? <Knight /> : null }
    { value.value === 15 ? <Dragon /> : null }
  </div>
)
