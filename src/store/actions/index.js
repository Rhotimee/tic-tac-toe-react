export const updateBoard = (rowIndex, colIndex, nextPlay) => ({
  type: 'Update_Board',
  rowIndex,
  colIndex,
  nextPlay
});

export const resetBoard = () => ({ type: 'Reset' })