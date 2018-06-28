export const updateBoard = (rowIndex, colIndex, nextPlay) => ({
  type: 'Update_Board',
  rowIndex,
  colIndex,
  nextPlay
});

export const incrementCounter = (counter) => ({
  type: 'Increment_Counter',
  counter: counter++
})