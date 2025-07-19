import { Shape } from "@/lib/constants";
import {
  ArrowLeftRight,
  Square,
  Star,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import React from "react";

interface GameButtonsProps {
  onDrawShape: (shape: Shape) => void;
  onReverse: () => void;
  onClear?: () => void;
}

interface ButtonConfig {
  Icon: LucideIcon;
  onClick: () => void;
  key: string;
}

export const GameButtons: React.FC<GameButtonsProps> = ({
  onDrawShape,
  onReverse,
  onClear,
}) => {
  const commonClassName =
    "w-12 h-12 flex items-center justify-center text-background bg-foreground rounded-full transition duration-300 active:scale-90 text-lg border-none";

  const buttons: ButtonConfig[] = [
    {
      key: "square",
      Icon: Square,
      onClick: () => onDrawShape(Shape.SQUARE),
    },
    {
      key: "star",
      Icon: Star,
      onClick: () => onDrawShape(Shape.STAR),
    },
    {
      key: "reverse",
      Icon: ArrowLeftRight,
      onClick: onReverse,
    },
  ];

  if (onClear) {
    buttons.push({
      key: "clear",
      Icon: Trash2,
      onClick: onClear,
    });
  }

  return (
    <div className="flex justify-evenly items-center grow w-full max-w-xs mx-auto">
      {buttons.map(({ key, Icon, onClick }) => (
        <button
          key={key}
          role="button"
          onClick={onClick}
          className={commonClassName}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};
