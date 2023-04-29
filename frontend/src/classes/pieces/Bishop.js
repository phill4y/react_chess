import { Piece, PieceType } from "../Piece";

class Bishop extends Piece {
  constructor(color) {
    super(PieceType.Bishop, color);
  }

  checkMove(board, sourceRow, sourceCol, targetRow, targetCol) {
    if (super.isSameField(sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    if (!super.checkDiagonals(board, sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    if (!super.checkTargetIsOwnPiece(board, targetRow, targetCol)) {
      return false;
    }

    return true;
  }
}

export { Bishop };
