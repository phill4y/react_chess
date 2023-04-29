import { PieceColor } from "./Piece"
import { Square } from "./Square"
import { Pawn } from "./pieces/Pawn"
import { Rook } from "./pieces/Rook"
import { Knight } from "./pieces/Knight"
import { Bishop } from "./pieces/Bishop"
import { Queen } from "./pieces/Queen"
import { King } from "./pieces/King"

// left to right
const ColumnNames = {
	0: "a",
	1: "b",
	2: "c",
	3: "d",
	4: "e",
	5: "f",
	6: "g",
	7: "h",
}

// top to bottom
const RowNames = {
  0: "8",
  1: "7",
  2: "6",
  3: "5",
  4: "4",
  5: "3",
  6: "2",
  7: "1",
}

const InitialPositions = {
  "a1": new Rook(PieceColor.White),
  "b1": new Knight(PieceColor.White),
  "c1": new Bishop(PieceColor.White),
  "d1": new Queen(PieceColor.White),
  "e1": new King(PieceColor.White),
  "f1": new Bishop(PieceColor.White),
  "g1": new Knight(PieceColor.White),
  "h1": new Rook(PieceColor.White),
  "a2": new Pawn(PieceColor.White),
  "b2": new Pawn(PieceColor.White),
  "c2": new Pawn(PieceColor.White),
  "d2": new Pawn(PieceColor.White),
  "e2": new Pawn(PieceColor.White),
  "f2": new Pawn(PieceColor.White),
  "g2": new Pawn(PieceColor.White),
  "h2": new Pawn(PieceColor.White),
  "a8": new Rook(PieceColor.Black),
  "b8": new Knight(PieceColor.Black),
  "c8": new Bishop(PieceColor.Black),
  "d8": new Queen(PieceColor.Black),
  "e8": new King(PieceColor.Black),
  "f8": new Bishop(PieceColor.Black),
  "g8": new Knight(PieceColor.Black),
  "h8": new Rook(PieceColor.Black),
  "a7": new Pawn(PieceColor.Black),
  "b7": new Pawn(PieceColor.Black),
  "c7": new Pawn(PieceColor.Black),
  "d7": new Pawn(PieceColor.Black),
  "e7": new Pawn(PieceColor.Black),
  "f7": new Pawn(PieceColor.Black),
  "g7": new Pawn(PieceColor.Black),
  "h7": new Pawn(PieceColor.Black),
}

const InitialPiecesList = [
  { "squareKey": "a1", "piece": new Rook(PieceColor.White)},
  { "squareKey": "b1", "piece": new Knight(PieceColor.White)},
  { "squareKey": "c1", "piece": new Bishop(PieceColor.White)},
  { "squareKey": "d1", "piece": new Queen(PieceColor.White)},
  { "squareKey": "e1", "piece": new King(PieceColor.White)},
  { "squareKey": "f1", "piece": new Bishop(PieceColor.White)},
  { "squareKey": "g1", "piece": new Knight(PieceColor.White)},
  { "squareKey": "h1", "piece": new Rook(PieceColor.White)},
  { "squareKey": "a2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "b2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "c2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "d2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "e2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "f2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "g2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "h2", "piece": new Pawn(PieceColor.White)},
  { "squareKey": "a8", "piece": new Rook(PieceColor.Black)},
  { "squareKey": "b8", "piece": new Knight(PieceColor.Black)},
  { "squareKey": "c8", "piece": new Bishop(PieceColor.Black)},
  { "squareKey": "d8", "piece": new Queen(PieceColor.Black)},
  { "squareKey": "e8", "piece": new King(PieceColor.Black)},
  { "squareKey": "f8", "piece": new Bishop(PieceColor.Black)},
  { "squareKey": "g8", "piece": new Knight(PieceColor.Black)},
  { "squareKey": "h8", "piece": new Rook(PieceColor.Black)},
  { "squareKey": "a7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "b7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "c7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "d7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "e7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "f7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "g7", "piece": new Pawn(PieceColor.Black)},
  { "squareKey": "h7", "piece": new Pawn(PieceColor.Black)},
]

const generateChessBoard = () => {
  const numRows = 8;
  const numCols = 8;
  var board = [];

  // creates all squares of chessboard, initialized with row/col idxs, color and initial piece
  for (var row = 0; row < numRows; row++) {
    board.push([]);
    board[row].push(new Array(numCols));
    for (var col = 0; col < numCols; col++) {
      board[row][col] = new Square(row, col);
    }
  }

  return board;
};

export {
  ColumnNames,
  RowNames,
  InitialPositions,
  InitialPiecesList,
  generateChessBoard,
}
