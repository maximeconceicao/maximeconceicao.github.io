import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";

export interface GameTimerProps {
  initialCountdown: number;
  onTimerFinished?: () => void;
}

export interface TimerHandle {
  resetTimer: () => void;
}

export const GameTimer = forwardRef<TimerHandle, GameTimerProps>(
  ({ initialCountdown, onTimerFinished }, ref) => {
    const [timerCount, setTimerCount] = useState(initialCountdown);
    const [timerEnabled, setTimerEnabled] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (timerEnabled && timerCount > 0) {
        timerRef.current = setTimeout(() => {
          setTimerCount((prev) => prev - 1);
        }, 1000);
      } else if (timerCount <= 0 && timerEnabled) {
        onTimerFinished?.();
      }

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [timerCount, timerEnabled]);

    // Expose resetTimer to parent via ref
    useImperativeHandle(ref, () => ({
      resetTimer: () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setTimerCount(initialCountdown);
        setTimerEnabled(true);
      },
    }));

    return (
      <div className="text-foreground text-2xl text-center">
        <p>{timerCount}</p>
      </div>
    );
  }
);

GameTimer.displayName = "GameTimer";
