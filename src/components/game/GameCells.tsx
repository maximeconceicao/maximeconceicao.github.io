import React from "react";
import { GameCell } from "./GameCell";
import type { Shape } from "@/lib/constants";

interface GameCellsProps {
  playerSequence: (Shape | null)[];
}

export const GameCells: React.FC<GameCellsProps> = ({ playerSequence }) => {
  return (
    <div className="flex flex-wrap flex-row w-full my-5 mx-auto justify-center h-28">
      {playerSequence.map((shape, index) => (
        <GameCell key={index} shape={shape} lineBreak={(index + 1) % 4 === 0} />
      ))}
    </div>
  );
};
