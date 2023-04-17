import { createContext, Component } from "react";
import { Square, SquareColor } from "./Square";

const chessBoard = () => {
  const numRows = 8;
  const numCols = 8;
  var board = [];

  // Creates all lines:
  for (var row = 0; row < numRows; row++) {
    // Creates an empty line
    board.push([]);

    // Adds cols to the empty line:
    board[row].push(new Array(numCols));

    for (var col = 0; col < numCols; col++) {
      // Initializes:
      if ((row + col) % 2 === 0) {
        board[row][col] = new Square(SquareColor.Bright);
      }
      else {
        board[row][col] = new Square(SquareColor.Dark);
      }
    }
  }

  return board;
};

export const ChessContext = createContext();

class ChessProvider extends Component {
  state = { squares: chessBoard() };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ChessContext.Provider
        value={{
          state: this.state,
          setSquares: (value) =>
            this.setState({
              squares: value,
            }),
        }}
      >
        {this.props.children}
      </ChessContext.Provider>
    );
  }
}

export default ChessProvider;
