import { useState, useEffect } from "react";
import { InitialPiecesList, generateChessBoard, ColumnNames, RowNames } from "../classes/Chessboard";
import Square from "./Square";


const ChessBoard = () => {
  const [pieces, setPieces] = useState(InitialPiecesList);
  const [board, setBoard] = useState(generateChessBoard());

  useEffect(() => {
    console.log("Use effect called");
  }, []);

  // TODO: Add logic to check if the game is over
  // const gameOver = (gamePlay, row, col) => {};

  // TODO: Globally check if stalemate
  // TODO: Globally check if a piece can be moved in general

  const handleOnDragStart = ({ e, square }) => {
    e.dataTransfer.setData("sourceRow", square.row);
    e.dataTransfer.setData("sourceCol", square.col);
    e.dataTransfer.setData("sourceKey", square.key);
  };

  const handleOnDrop = ({ e, square, setIsDraggingOver }) => {
    const sourceRow = parseInt(e.dataTransfer.getData("sourceRow"));
    const sourceCol = parseInt(e.dataTransfer.getData("sourceCol"));
    const sourceKey = e.dataTransfer.getData("sourceKey");
    const pieceToMove = pieces.find((p) => p.squareKey === sourceKey);
    if (pieceToMove && pieceToMove.piece.checkMove(board, sourceRow, sourceCol, square.row, square.col)) {
      console.log(`Piece moved from ${sourceKey} to ${square.key}`);
      const updatedPiece = {
        ...pieceToMove,
        squareKey: square.key,
      };
      const updatedPieces = pieces.map((p) => (p.squareKey === sourceKey ? updatedPiece : p));
      setPieces(updatedPieces);
      board[sourceRow][sourceCol].piece = null;
      board[square.row][square.col].piece = pieceToMove.piece;
      setBoard(board);
    }
    // Prevent bug that border stays red after invalid drop
    setIsDraggingOver(false);
  };

  return (
    <div className="flex flex-row relative z-0 bg-slate-500">
      <div className="grid grid-cols-9 gap-0 top-0 left-0 m-4 place-items-end">
        {board.map((squareRow) => (
          <>
            <div className="chessboard-row-header">
              {RowNames[squareRow[0].row]}
            </div>
            {squareRow.map((square) => (
              <Square
                key={square.key}
                board={board}
                square={square}
                handleOnDragStart={handleOnDragStart}
                handleOnDrop={handleOnDrop}
              />
            ))}
          </>
        ))}
        <div className="chessboard-row-header" />
        {Array.from({ length: 8 }, (_, i) => (
          <div key={ColumnNames[i]} className="chessboard-column-header">
            {ColumnNames[i]}
          </div>
        ))}
      </div>
    </div>
  );

};

export default ChessBoard;
