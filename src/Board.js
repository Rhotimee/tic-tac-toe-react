import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Board.css';
import Tile from './Tile'
import { updateBoard, resetBoard } from './store/actions'
import { store } from './store'

class Board extends Component {


  clickTile = (rowIndex, colIndex) => {
    const checkWin = this.checkIfWin()

    if (this.props.board[rowIndex][colIndex] === 1 && checkWin !== 3 && checkWin !== 5){
      
      const nextPlay = this.getNextPlay()

      this.props.updateBoard(rowIndex, colIndex, nextPlay)
    }
  }

  
  sumNumbers = (arg1, arg2, arg3) => {
    return arg1 * arg2 * arg3
  }

  checkIfWin = () => {
    const state = this.props

    const a = state.board[0][0]
    const b = state.board[0][1]
    const c = state.board[0][2]
    const d = state.board[1][0]
    const e = state.board[1][1]
    const f = state.board[1][2]
    const g = state.board[2][0]
    const h = state.board[2][1]
    const i = state.board[2][2]

    if (this.sumNumbers(a, b, c) === 27 || this.sumNumbers(a, b, c) === 125){
      return a
    }
    else if (this.sumNumbers(d, e, f) === 27 || this.sumNumbers(d, e, f) === 125){
      return d
    }
    else if (this.sumNumbers(g, h, i) === 27 || this.sumNumbers(g, h, i) === 125){
      return g
    }
    else if (this.sumNumbers(a, d, g) === 27 || this.sumNumbers(a, d, g) === 125){
      return a
    }
    else if (this.sumNumbers(b, e, h) === 27 || this.sumNumbers(b, e, h) === 125){
      return b
    }
    else if (this.sumNumbers(c, f, i) === 27 || this.sumNumbers(c, f, i) === 125){
      return c
    }
    else if (this.sumNumbers(a, e, i) === 27 || this.sumNumbers(a, e, i) === 125){
      return a
    }
    else if (this.sumNumbers(c, e, g) === 27 || this.sumNumbers(c, e, g) === 125){
      return c
    }

  }

  playAgain = () => {
    return store.dispatch(resetBoard())
  }
  
  getNextPlay = () => {
    const nextPlay = this.props.nextPlay;
    this.setState({
      nextPlay: (nextPlay === 3) ? 5 : 3 
    });
    return nextPlay
  }

  render() {

    const mapping = {
      3: 'X',
      5: 'O',
      1: ' '
    }

    const checkWin = this.checkIfWin()
    const nextPlay = this.props.nextPlay

    return (
      <div className="container board mt-2 text-center p-3">
        <h3 className="m-3 ">Tic Tac Toe</h3>
        {
          !checkWin && nextPlay ? <p>{mapping[nextPlay]} to play</p> : null
        }
        {
          checkWin ? 
          <div> 
            <p className="mt-3">{mapping[checkWin]} won the game</p> 
            <button className="mb-3 btn btn-primary" onClick={() => this.playAgain()}>Play Again</button> 
          </div>
          : null
        }
        {
          this.props.counter === 9 && !checkWin ?
          <div> 
            <p className="mt-3">Draw</p> 
            <button className="mb-3 btn btn-success" onClick={() => this.playAgain()}>Play Again</button> 
          </div> 
           : null
        }
        {
          this.props.board.map((row, rowIndex) => 
            (
            <div className="row" key={rowIndex}>
              {
                row.map((value, colIndex) => (
                    <Tile 
                      value={value} 
                      key={colIndex} 
                      rowIndex={rowIndex} 
                      colIndex={colIndex} 
                      onClickUpdate={this.clickTile}
                    />
                ))
              }
            </div>
            )
          )
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    nextPlay: state.nextPlay,
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBoard: (rowIndex, colIndex, nextPlay) => dispatch(updateBoard(rowIndex, colIndex, nextPlay)),
    resetBoard: () => dispatch(resetBoard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
