import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Shape } from "./constants";
import { Circle, Frown, Square, Star, Triangle } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatShapeIcon(shape?: Shape | null) {
  switch (shape) {
    case Shape.STAR:
      return Star;
    case Shape.SQUARE:
      return Square;
    case Shape.TRIANGLE:
      return Triangle;
    case Shape.CIRCLE:
      return Circle;
    default:
      return Frown;
  }
}

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
