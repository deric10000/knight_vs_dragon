import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';

export const Square = ({value}) => (
  <div className="square">
    { value.value === 0 ? <Knight /> : null }
    { value.value === 15 ? <Dragon /> : null }
  </div>
)
