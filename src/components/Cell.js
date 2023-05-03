import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { GameObject } from '../gameObject';


function Cell ({ type }) {
return (
    <StyledCell type={'L'} color={GameObject['L'].color}>
      cell
    </StyledCell>
)
  }

export default Cell;
