import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_COUNTDOWN,
  START_SEQUENCE_LENGTH,
  Shape,
} from "@/lib/constants";
import { random } from "@/lib/utils";

type TimerHandle = { resetTimer: () => void };

const generateSequence = (length: number): Shape[] => {
  const shapeValues = Object.values(Shape);
  return Array.from({ length }, () => {
    const index = Math.floor(random(0, shapeValues.length));
    return shapeValues[index];
  });
};

const resetPlayerSequence = (length: number): (Shape | null)[] =>
  new Array(length).fill(null);

const areSequencesEqual = (a: (Shape | null)[], b: Shape[]) =>
  a.length === b.length && a.every((val, i) => val === b[i]);

const reverseShape = (shape: Shape | null): Shape | null => {
  if (shape === null) return null;
  const reverseMap: Record<Shape, Shape> = {
    [Shape.STAR]: Shape.TRIANGLE,
    [Shape.TRIANGLE]: Shape.STAR,
    [Shape.SQUARE]: Shape.CIRCLE,
    [Shape.CIRCLE]: Shape.SQUARE,
  };
  return reverseMap[shape];
};

export const useGameLogic = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [sequenceLength, setSequenceLength] = useState(START_SEQUENCE_LENGTH);

  const [sequenceToFind, setSequenceToFind] = useState<Shape[]>([]);
  const [playerSequence, setPlayerSequence] = useState<(Shape | null)[]>([]);

  const timerRef = useRef<TimerHandle>(null);

  const resetSequences = (length = sequenceLength) => {
    const newSequence = generateSequence(length);
    setSequenceToFind(newSequence);
    setPlayerSequence(resetPlayerSequence(length));
  };

  const resetGame = () => {
    setScore(0);
    setSequenceLength(START_SEQUENCE_LENGTH);
    resetSequences(START_SEQUENCE_LENGTH);
    setIsGameOver(false);
    timerRef.current?.resetTimer();
  };

  useEffect(() => {
    resetSequences();
  }, [sequenceLength]);

  useEffect(() => {
    setScore(0);
    setSequenceLength(START_SEQUENCE_LENGTH);
    setIsGameOver(false);
  }, []);

  const onDrawShape = (shape: Shape) => {
    const index = playerSequence.findIndex((s) => s === null);
    if (index === -1) {
      setPlayerSequence(resetPlayerSequence(sequenceToFind.length));
      return;
    }

    const updated = [...playerSequence];
    updated[index] = shape;
    setPlayerSequence(updated);

    // If the player has drawn all the shapes, validate the sequence
    if (updated.every((s) => s !== null)) {
      validateSequence(updated);
    }
  };

  const onClear = () => {
    setPlayerSequence(resetPlayerSequence(sequenceLength));
  };

  const validateSequence = (sequence: (Shape | null)[]) => {
    if (areSequencesEqual(sequence, sequenceToFind)) {
      setScore((prev) => prev + 1);
      setSequenceLength((prev) => prev + 1);
    }
  };

  const onReverse = () => {
    const reversed = playerSequence.map(reverseShape);
    setPlayerSequence(reversed);
    if (reversed.every((s) => s !== null)) {
      validateSequence(reversed);
    }
  };

  const handleTimerFinished = () => {
    setIsGameOver(true);
  };

  const redirectToHome = () => {
    window.location.href = "/";
  };

  return {
    score,
    isGameOver,
    sequenceToFind,
    playerSequence,
    initialCountdown: DEFAULT_COUNTDOWN,
    timerRef,
    onDrawShape,
    onReverse,
    onClear,
    onRestart: resetGame,
    onTimerFinished: handleTimerFinished,
    onRedirect: redirectToHome,
  };
};
