import { Piece, PieceType } from "../Piece";

class Queen extends Piece {
  constructor(color) {
    super(PieceType.Queen, color);
  }

  checkMove(board, sourceRow, sourceCol, targetRow, targetCol) {
    if (super.isSameField(sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    if (
      !super.checkStraights(board, sourceRow, sourceCol, targetRow, targetCol) &&
      !super.checkDiagonals(board, sourceRow, sourceCol, targetRow, targetCol)
    ) {
      return false;
    }

    if (!super.checkTargetIsOwnPiece(board, targetRow, targetCol)) {
      return false;
    }

    return true;
  }
}

export { Queen };
