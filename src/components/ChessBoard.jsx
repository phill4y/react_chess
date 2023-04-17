import { SquareColor } from "../classes/Square";

const Square = ({ color }) => {
  const squareStyle = {};

  if (color === SquareColor.Bright) {
    squareStyle.background = `rgb(255, 213, 153)`;
  } else if (color === SquareColor.Dark) {
    squareStyle.background = `rgb(177, 110, 65)`;
  }

  return <div className="chessboard-square" style={squareStyle} />;
};

const ChessBoard = ({ context }) => {
  // TODO: Add logic to check if the game is over
  // const gameOver = (gamePlay, row, col) => {};

  return (
    <div className="chessboard-container">
      {context.state.squares.map((squareRow, row) => {
        return squareRow.map((square, col) => {
          return (
            <Square color={square.color} key={row * col} />
          );
        });
      })}
    </div>
  );
};

export default ChessBoard;
