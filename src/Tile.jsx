import React from 'react'

const mapping = {
  3: 'X',
  5: 'O',
  1: ' '
}

const Tile = (props) => {
  const tileColor = () => {
    if (props.value === 3){
      return 'col bg-danger'
    }
    else if (props.value === 5) {
      return 'col bg-success'
    }
    else {
      return 'col'
    }
  }
  return (
    <div className={tileColor()} onClick={() => props.onClickUpdate(props.rowIndex, props.colIndex)}>{mapping[props.value]}</div>
  );
}


export default Tile;