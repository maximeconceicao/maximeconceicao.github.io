import React, { useEffect } from "react";
import { GameButtons } from "./GameButton";
import { GameCells } from "./GameCells";
import { GameScoreBoard } from "./GameScoreBoard";
import { GameSequence } from "./GameSequence";
import { GameTimer } from "./GameTimer";
import { useGameLogic } from "@/hooks/useGameLogic";

const GameView: React.FC = () => {
  const {
    score,
    isGameOver,
    sequenceToFind,
    playerSequence,
    initialCountdown,
    timerRef,
    onDrawShape,
    onReverse,
    onRestart,
    onTimerFinished,
    onRedirect,
  } = useGameLogic();

  return (
    <div className="h-screen flex flex-col p-7 min-w-80 w-full text-foreground">
      <div className="sticky top-0 bg-black bg-opacity-60 z-10 hidden xs:block">
        <header className="p-2">
          <button
            onClick={onRedirect}
            aria-label="Back to home"
            className="material-icons hover:text-gray-300"
          >
            arrow_back
          </button>
        </header>
      </div>

      <div className="flex flex-col w-full h-full mx-auto max-w-3xl rounded-md border border-primary p-7">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col items-center w-20">
            <p className="mb-2">Score</p>
            <p className="text-2xl text-center">{score}</p>
          </div>
          <div className="flex flex-col items-center w-20">
            <p className="mb-2">Time</p>
            <GameTimer
              ref={timerRef}
              initialCountdown={initialCountdown}
              onTimerFinished={onTimerFinished}
            />
          </div>
        </div>

        {!isGameOver ? (
          <div className="flex flex-col flex-grow pt-5">
            <GameSequence sequenceToFind={sequenceToFind} />
            {playerSequence.length > 0 && (
              <GameCells playerSequence={playerSequence} />
            )}
            <GameButtons onDrawShape={onDrawShape} onReverse={onReverse} />
          </div>
        ) : (
          <GameScoreBoard onRestart={onRestart} onRedirect={onRedirect} />
        )}
      </div>
    </div>
  );
};

export default GameView;
