import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { GameObject } from '../gameObject';


const Cell = ({ type }) => (

    <StyledCell type={'L'} color={GameObject['L'].color}>
      cell
    </StyledCell>
  )


export default Cell;
