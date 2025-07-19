import type { Shape } from "@/lib/constants";
import { formatShapeIcon } from "@/lib/utils";
import React from "react";

interface GameCellProps {
  shape?: Shape | null;
  lineBreak?: boolean;
}

export const GameCell: React.FC<GameCellProps> = ({ shape }) => {
  const Icon = formatShapeIcon(shape);
  return (
    <div
      className="
    flex items-center justify-center 
    h-10 w-10  
    sm:h-12 sm:w-12
    lg:h-14 lg:w-14 
    m-2 rounded 
    bg-primary/20 text-foreground
  "
    >
      {shape && <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />}
    </div>
  );
};
