import { Piece, PieceType } from "../Piece"

class King extends Piece {
  // TODO: Add check if first move so castling can be checked as well
  constructor(color) {
    super(PieceType.King, color);
  }

  checkMove(board, sourceRow, sourceCol, targetRow, targetCol) {
    if (super.isSameField(sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    const rowDiff = Math.abs(sourceRow - targetRow);
    const colDiff = Math.abs(sourceCol - targetCol);

    if (rowDiff > 1 || colDiff > 1) {
      return false;
    }

    if (board[targetRow][targetCol].piece !== null && !super.isOppositeColor(board, targetRow, targetCol)) {
      return false;
    }

    return true;
  }
}

export { King };
