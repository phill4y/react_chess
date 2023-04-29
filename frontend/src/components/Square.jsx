import { useState } from "react";
import { SquareColor } from "../classes/Square";
import ChessPiece from "./ChessPiece";

const Square = ({ board, square, handleOnDragStart, handleOnDrop }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [borderColor, setBorderColor] = useState("transparent");

  const handleOnDragOver = ({ e, square }) => {
    const sourceRow = parseInt(e.dataTransfer.getData("sourceRow"));
    const sourceCol = parseInt(e.dataTransfer.getData("sourceCol"));
    // Abort if there is no piece on source square
    if (!board[parseInt(sourceRow)][parseInt(sourceCol)].piece) {
      return;
    }
    console.log(`sourceRow: ${sourceRow}, sourceCol: ${sourceCol}`);
    e.preventDefault();
    setIsDraggingOver(true);
    if (
      board[parseInt(sourceRow)][parseInt(sourceCol)].piece.checkMove(
        board,
        sourceRow,
        sourceCol,
        square.row,
        square.col
      )
    ) {
      setBorderColor("green");
    } else {
      setBorderColor("red");
    }
  };

  const handleOnDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleOnDragEnd = () => {
    setIsDraggingOver(false);
  };

  const squareStyle = {
    background: square.color === SquareColor.White ? "rgb(255, 213, 153)" : "rgb(177, 110, 65)",
    border: isDraggingOver ? `4px solid ${borderColor}` : "0px solid transparent",
  };

  return (
    <div
      className="chessboard-square"
      style={squareStyle}
      onDragStart={(e) => handleOnDragStart({ e, square })}
      onDragOver={(e) => handleOnDragOver({ e, square })}
      onDragLeave={handleOnDragLeave}
      onDragEnd={handleOnDragEnd}
      onDrop={(e) => handleOnDrop({ e, square, setIsDraggingOver })}
      draggable={square.piece ? true : false} // Set only squares with a piece to be draggable
    >
      {square.piece && <ChessPiece piece={square.piece} />}
      <p style={{ userSelect: "none" }}>{`[${square.col}|${square.row}]`}</p>
    </div>
  );
};

export default Square;
