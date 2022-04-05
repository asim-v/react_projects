import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import Title from './title'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  


  constructor(props) {

    function generateBoardArray(props) {
      // TODO: create array-of-arrays of true/false values
      let rows = [];
      for (let i = 0; i < props.nrows;i++){
        let cols = [];
        for (let j = 0; j < props.ncols;j++){
          if (Math.random() < props.chanceLightStartsOn){
            cols.push(true);
          }else{
            cols.push(false);
          }
        }
        rows.push(cols);
      }
      return rows
    }

    super(props);

    this.state={
      board:generateBoardArray(props),
      hasWon:null,

    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */



  generateBoardVisual(){
    let rows = [];
    for (let i = 0; i <this.props.nrows;i++){
      let cols = [];
      for (let j = 0; j < this.props.ncols; j++) {
          // note: we are adding a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          if (this.state.board[i][j] === true){
            cols.push(<Cell coords={i+"-"+j} key={i+"-"+j} isLit={true} flip = {this.flipCellsAround}></Cell>);
          }else{
            cols.push(<Cell coords={i+"-"+j} key={i+"-"+j} isLit={false} flip = {this.flipCellsAround}></Cell>);
          }
          
      }
      rows.push(<tr>{cols}</tr>)
    }
    return rows
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    // console.log(coord);
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }    
    }

    flipCell(y,x)
    flipCell(y,x+1)
    flipCell(y,x-1)
    flipCell(y+1,x)
    flipCell(y-1,x)

    this.setState(st=>({board:board}))

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    
    return(
      <center>
        <Title hasWon={this.state.hasWon}></Title>
        <table>
          <tbody>
            {this.generateBoardVisual()}
          </tbody>
        </table>
      </center>
    )
  }
}


export default Board;
