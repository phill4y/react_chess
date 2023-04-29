import { Piece, PieceType } from "../Piece"

class Rook extends Piece {
  constructor(color) {
    super(PieceType.Rook, color);
  }

  checkMove(board, sourceRow, sourceCol, targetRow, targetCol) {
    if (super.isSameField(sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    if (!super.checkStraights(board, sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    if (!super.checkTargetIsOwnPiece(board, targetRow, targetCol)) {
      return false;
    }

    return true;
  }
}

export { Rook };
