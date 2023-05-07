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
    <div className="gameBoard">
      <div className="gameBoard__info">
        <h2>Satranç Taşları İşlevleri:</h2>
        <ul>
          <li>Vezir - Her yönde hareket edebilir</li>
          <li>Kale - Dikey veya yatay yönde hareket edebilir</li>
          <li>Fil - Çapraz yönde hareket edebilir</li>
          <li>At - L şeklinde hareket eder</li>
          <li>Piyon - İlk hareketinde iki kare ilerleyebilir ve diğer piyonları geçerek rakip taşlarını yiyebilir</li>
          <li>Şah - Sadece bir kare hareket edebilir ve mat durumuna gelirse oyun biter</li>
        </ul>
        <div className="game__rules" >
          <h2>Satranç Oyunu Kuralları:</h2>
          <ul>
            <li>Her oyuncu, kendisine verilen 16 taşı, sırasıyla ilk iki sıraya yerleştirir.</li>
            <li>Oyuncular, sırayla birer hamle yaparlar ve amaçları rakip Şah'ını mat etmek veya oyunu kazanacak bir pozisyon yakalamaktır.</li>
            <li>Bir hamlede sadece bir taş oynatılabilir.</li>
            <li>Bir taşın hedefi üzerinde karşı tarafın bir taşı varsa, bu taş yenilir ve oyundan çıkarılır.</li>
            <li>Bir oyuncunun Şah'ı tehdit altındaysa, bu durumda mat olmamak için Şah'ın kaçması veya rakibin taşını engellemesi gerekir.</li>
            <li>Bir oyuncu mat olursa, oyunu kaybeder.</li>
            <li>Bir oyuncu, rakibinin tüm taşlarını yendiğinde veya rakibi terk ettiğinde, oyunu kazanır.</li>
          </ul>
        </div>
      </div>
      <Chessboard position={fen} onDrop={handleDrop} />
    </div>
  );
}

export default ChessGame;
