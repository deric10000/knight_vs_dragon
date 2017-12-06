import React from 'react';
import { Dragon } from './dragon';
import { Knight } from './knight';
import { Square } from './square';

export const Board = () => (
  <div className="board">
    <h2>Board</h2>
    <Dragon />
    <Knight />
    <Square />
  </div>
)
