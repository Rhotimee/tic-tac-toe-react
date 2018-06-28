import initialState from '../state'

export default function game (state, action) {
  switch (action.type) {
    case 'Update_Board':
      return ({
        ...state,
        ...{
          board: state.board.map((row, iRowIndex) => {
            return row.map((value, iColIndex) => {
              if ((iRowIndex === action.rowIndex && iColIndex === action.colIndex))
                return action.nextPlay
              
              else return value 
            })
          }),
          counter: state.counter + 1,
          nextPlay: (state.nextPlay === 3) ? 5 : 3
        }
      })
    case 'Reset':
      const newState = ({
        ...state,
        ...{
          board: state.board.map((row) => {
            return row.map(() => 1)
          }),
          nextPlay: 3,
          counter: 0
        }
      })
      console.log(newState, action)
      return newState
    default:
      return state
  } 
}