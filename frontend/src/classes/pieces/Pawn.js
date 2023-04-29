import { Piece, PieceColor, PieceType } from "../Piece";

class Pawn extends Piece {
  constructor(color) {
    super(PieceType.Pawn, color);
  }

  checkMove(board, sourceRow, sourceCol, targetRow, targetCol) {
    if (super.isSameField(sourceRow, sourceCol, targetRow, targetCol)) {
      return false;
    }

    const direction = this.color === PieceColor.White ? -1 : 1;
    const startRow = this.color === PieceColor.White ? 6 : 1;

    if (sourceCol === targetCol) {
      if (board[targetRow][targetCol].piece === null) {
        if (targetRow === sourceRow + direction) {
          return true;
        }
        if (sourceRow === startRow && targetRow === sourceRow + 2 * direction && board[sourceRow + direction][sourceCol].piec !== null) {
          return true;
        }
      }
    } else if (Math.abs(sourceCol - targetCol) === 1 && targetRow === sourceRow + direction) {
      if (board[targetRow][targetCol].piece !== null && super.isOppositeColor(board, targetRow, targetCol)) {
        return true;
      }
    }

    return false;
  }


  //   const rowDiff = targetRow - sourceRow;
  //   const colDiff = targetCol - sourceCol;

  //   // Difference between source and target col can not be greater than 1
  //   if (Math.abs(colDiff) > 1) {
  //     return false;
  //   }

  //   // The underlying row indices are inverted and start with zero from the top
  //   const forwardDirection = this.color === PieceColor.White ? -1 : 1;
  //   const startRow = this.color === PieceColor.White ? 6 : 1;

  //   const diff = rowDiff * forwardDirection;

  //   // Check if moving into wrong direction of diff larger than 2
  //   if (diff < 0 || Math.abs(diff) > 2) {
  //     return false;
  //   }

  //   // Special handling for moving dist of 2
  //   if (Math.abs(diff) === 2) {
  //     // Can not move 2 rows if not first move and can not move diagonal when diff == 2
  //     if (sourceRow !== startRow || colDiff !== 0) {
  //       return false;
  //     }

  //     // Can not move 2 rows if one of them is blocked
  //     if (board[targetRow][targetCol].piece !== null || board[targetRow - forwardDirection][targetCol].piece !== null) {
  //       return false;
  //     }
  //   }

  //   // Can not move if front is blocked by any color
  //   if (colDiff === 0 && board[targetRow][targetCol].piece !== null) {
  //     return false;
  //   }

  //   // Can not move diagonal if blocked by own color
  //   if (Math.abs(colDiff) === 1) {
  //     if (board[targetRow][targetCol].piece !== null) {
  //       if (board[targetRow][targetCol].piece.color === this.color) {
  //         return false;
  //       }
  //     } else {
  //       // Can not move diagonal on empty field
  //       return false;
  //     }

  //   }

  //   // If all checks passed, return true
  //   return true;
  // }
}

export { Pawn };
