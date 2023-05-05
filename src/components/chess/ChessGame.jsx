import React, { useState } from "react";

import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import './index.scss'

function ChessGame() {
  const [chess] = useState(new Chess());

  const handleDrop = ({ sourceSquare, targetSquare }) => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q"
    });

    if (!move) return;
    setTimeout(() => {
      const computerMove = getComputerMove();
      chess.move(computerMove);
      setFen(chess.fen());
    }, 500);
    setFen(chess.fen());
  };

  const getComputerMove = () => {
    const possibleMoves = chess.moves();
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomIndex];
  };

  const [fen, setFen] = useState(chess.fen());

  return (
    <div className="gameBoard" >
      <Chessboard position={fen} onDrop={handleDrop} />
    </div>
  );
}

export default ChessGame;
