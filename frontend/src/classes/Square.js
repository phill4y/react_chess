import { ColumnNames, RowNames, InitialPositions } from "./Chessboard"

const SquareColor = {
	White: "white",
	Black: "black"
}

class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.key = `${ColumnNames[col]}${RowNames[row]}`;
    if (this.key in InitialPositions) {
      this.piece = InitialPositions[this.key];
    }
    else {
      this.piece = null;
    }
    if ((row + col) % 2 === 0) {
      this.color = SquareColor.White;
    }
    else {
      this.color = SquareColor.Black;
    }
  }
}

export {
  Square,
  SquareColor,
}
