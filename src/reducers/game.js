const initialState = [
  {
    board: [
      [ 1,1,1 ],
      [ 1,1,1 ],
      [ 1,1,1 ]
    ],
    nextPlay: 3,
    counter: 0,
  }
]

export default function game (state = initialState, action) {
  switch (action.type) {
    case 'Update_Board':
      return [
        ...state,
        {
          board: state.board.map((row, iRowIndex) => {
            return row.map((value, iColIndex) => {
              if ((iRowIndex === action.rowIndex && iColIndex === action.colIndex))
                return action.nextPlay
              
              else return value 
            })
          }),
          counter: state.counter + 1
        }
      ]
    default:
      return state
  } 
}