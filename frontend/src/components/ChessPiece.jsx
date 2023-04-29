import { PieceType, PieceColor } from "../classes/Piece";
import { TbChess, TbChessFilled } from "react-icons/tb";
import { TbChessRook, TbChessRookFilled } from "react-icons/tb";
import { TbChessKnight, TbChessKnightFilled } from "react-icons/tb";
import { TbChessBishop, TbChessBishopFilled } from "react-icons/tb";
import { TbChessQueen, TbChessQueenFilled } from "react-icons/tb";
import { TbChessKing, TbChessKingFilled } from "react-icons/tb";

const ChessPiece = ({piece}) => {
  return (
      <div
        className="chess-piece-container"
      >
        {piece.color === PieceColor.White && piece.type === PieceType.Pawn && <TbChess className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.Pawn && <TbChessFilled className="chess-piece" />}
        {piece.color === PieceColor.White && piece.type === PieceType.Rook && <TbChessRook className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.Rook && <TbChessRookFilled className="chess-piece" />}
        {piece.color === PieceColor.White && piece.type === PieceType.Knight && <TbChessKnight className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.Knight && <TbChessKnightFilled className="chess-piece" />}
        {piece.color === PieceColor.White && piece.type === PieceType.Bishop && <TbChessBishop className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.Bishop && <TbChessBishopFilled className="chess-piece" />}
        {piece.color === PieceColor.White && piece.type === PieceType.Queen && <TbChessQueen className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.Queen && <TbChessQueenFilled className="chess-piece" />}
        {piece.color === PieceColor.White && piece.type === PieceType.King && <TbChessKing className="chess-piece" />}
        {piece.color === PieceColor.Black && piece.type === PieceType.King && <TbChessKingFilled className="chess-piece" />}
      </div>
    );
  }

export default ChessPiece;
