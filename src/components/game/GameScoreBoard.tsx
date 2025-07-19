import { Star } from "lucide-react";
import React from "react";

interface GameScoreBoardProps {
  onRestart: () => void;
  onRedirect: () => void;
}

export const GameScoreBoard: React.FC<GameScoreBoardProps> = ({
  onRestart,
  onRedirect,
}) => {
  return (
    <div className="text-foreground text-center mt-6">
      <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
        <Star />
        GAME OVER
        <Star />
      </h2>

      <h3 className="text-xl mt-4 leading-snug">HIGH SCORES</h3>

      <div className="max-w-80 px-4 py-4 mt-6 mx-auto rounded border border-foreground">
        <div className="text-lg leading-relaxed">
          1ST MAX . . . . . . 1012
          <br />
          2ND MAX . . . . . . 0999
          <br />
          3RD MAX . . . . . . 0994
          <br />
          4TH MAX . . . . . . 0982
          <br />
          5TH MAX . . . . . . 0976
          <br />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-lg mb-2">PLAY AGAIN ?</p>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col items-center group">
            <button
              onClick={onRestart}
              className="bg-transparent border-none cursor-pointer"
            >
              YES
            </button>
            <span className="hidden group-hover:block">^</span>
          </div>
          <div className="flex flex-col items-center group">
            <button
              onClick={onRedirect}
              className="bg-transparent border-none cursor-pointer"
            >
              NO
            </button>
            <span className="hidden group-hover:block">^</span>
          </div>
        </div>
      </div>
    </div>
  );
};
