import type { Shape } from "@/lib/constants";
import { formatShapeIcon } from "@/lib/utils";
import React from "react";

interface GameSequenceProps {
  sequenceToFind: Shape[];
}

export const GameSequence: React.FC<GameSequenceProps> = ({
  sequenceToFind,
}) => {
  return (
    <div className="flex flex-wrap flex-row w-full my-5 mx-auto justify-center">
      {sequenceToFind.map((shape, index) => {
        const Icon = formatShapeIcon(shape);
        return (
          <Icon
            className="flex items-center justify-center 
             h-10 w-10 
             sm:h-12 sm:w-12 
             lg:h-14 lg:w-14 
             m-2 rounded 
             bg-transparent text-foreground"
          />
        );
      })}
    </div>
  );
};
