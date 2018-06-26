import React from 'react'

const mapping = {
  3: 'X',
  5: 'O',
  1: '-'
}

const Tile = (props) => {
  return (
    <div className="col" onClick={() => props.onClickUpdate(props.rowIndex, props.colIndex)}>{mapping[props.value]}</div>
  );
}


export default Tile;