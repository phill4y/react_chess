const PieceType = {
	Pawn: "pawn",
	Rook: "rook",
	Bishop: "bishop",
	Knight: "knight",
	Queen: "queen",
	King: "king",
	None: "none",
}

const NumberPerPieceType = {
  "pawn": 8,
  "rook": 2,
  "bishop": 2,
  "knight": 2,
  "queen": 1,
  "king": 1,
}

const PieceColor = {
	White: "white",
	Black: "black",
}

class Piece {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  isSameField(sourceRow, sourceCol, targetRow, targetCol) {
    if (sourceRow === targetRow && sourceCol === targetCol) {
      return true;
    }
    return false;
  }

  isOppositeColor(board, row, col) {
    if (board[row][col].piece === null) {
      return false;
    }
    return this.color !== board[row][col].piece.color;
  }

  checkTargetIsOwnPiece(board, row, col) {
    if (board[row][col].piece !== null && !this.isOppositeColor(board, row, col)) {
      return false;
    }
    return true;
  }

  checkDiagonals(board, sourceRow, sourceCol, targetRow, targetCol) {
    // Check if movement is diagonal
    if (Math.abs(sourceRow - targetRow) !== Math.abs(sourceCol - targetCol)) {
      return false;
    }

    // Check if path to target is blocked
    const rowStep = targetRow > sourceRow ? 1 : -1;
    const colStep = targetCol > sourceCol ? 1 : -1;
    console.log(`sourceRow ${sourceRow} sourceCol ${sourceCol} targetRow ${targetRow} targetCol ${targetCol}`)
    console.log(`rowStep ${rowStep} colStep ${colStep}`)
    let row = sourceRow + rowStep;
    let col = sourceCol + colStep;
    while (row !== targetRow || col !== targetCol) {
      if (board[row][col].piece !== null) {
        return false;
      }
      row += rowStep;
      col += colStep;
    }
    return true;
  }

  checkStraights(board, sourceRow, sourceCol, targetRow, targetCol) {
    // Check if movement is along a single row/column
    if (sourceRow !== targetRow && sourceCol !== targetCol) {
      return false;
    }

    // Check if path if blocked
    const rowStep = sourceRow === targetRow ? 0 : (targetRow > sourceRow ? 1 : -1);
    const colStep = sourceCol === targetCol ? 0 : (targetCol > sourceCol ? 1 : -1);
    let row = sourceRow + rowStep;
    let col = sourceCol + colStep;
    while (row !== targetRow || col !== targetCol) {
      if (board[row][col].piece !== null) {
        return false;
      }
      row += rowStep;
      col += colStep;
    }
    return true;
  }
}

export {
  PieceType,
  NumberPerPieceType,
  PieceColor,
  Piece,
}
