import React, { Component } from 'react';
import logo from './logo.svg';
import './Board.css';
import Tile from './Tile'

class Board extends Component {
  constructor(props){
    super (props);

    this.state = {
      board: [
        [ 1,1,1 ],
        [ 1,1,1 ],
        [ 1,1,1 ]
      ],
      nextPlay: 3,
      winner: null
    }
  }

  clickTile = (rowIndex, colIndex) => {

    if (this.state.board[rowIndex][colIndex] === 1){
      
      const nextPlay = this.getNextPlay()
      this.setState((state) => {
        return { ...state, ...{
          winner: this.checkIfWin(),
          board: state.board.map((row, iRowIndex) => {
            return row.map((value, iColIndex) => {
              if ((iRowIndex === rowIndex && iColIndex === colIndex))
                return nextPlay
              
              else return value 
            })
          })
        }  }
      })
    }
  }

  
  sumNumbers = (arg1, arg2, arg3) => {
    return arg1 * arg2 * arg3
  }

  checkIfWin = () => {
    const a = this.state.board[0][0]
    const b = this.state.board[0][1]
    const c = this.state.board[0][2]
    const d = this.state.board[1][0]
    const e = this.state.board[1][1]
    const f = this.state.board[1][2]
    const g = this.state.board[2][0]
    const h = this.state.board[2][1]
    const i = this.state.board[2][2]

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

  
  getNextPlay = () => {
    const nextPlay = this.state.nextPlay;
    this.setState({
      nextPlay: (nextPlay === 3) ? 5 : 3 
    });
    return nextPlay
  }

  render() {

    const mapping = {
      3: 'X',
      5: 'O',
      1: '-'
    }

    return (
      <div className="container board mt-5 text-center">
        <p>The winner is {mapping[this.state.winner]}</p>
        {
          this.state.board.map((row, rowIndex) => 
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

export default Board;
