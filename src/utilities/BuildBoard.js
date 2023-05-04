import React from 'react';
import {defaultCell} from "./Cell"

function BuildBoard({ rows, columns }) {
const buildRows = Array.from({ length: rows}, () =>
  Array.from({length : columns}, () => ({...defaultCell}))
);

  return {
    rows: buildRows,
    size: {rows, columns}
  };

}

export default BuildBoard;
