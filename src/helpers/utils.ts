import { Shape } from "@/helpers/constants";

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function formatShapeIcon(shape: Shape) {
  switch (shape) {
    case Shape.STAR:
      return "bi-star-fill";
    case Shape.SQUARE:
      return "bi-square-fill";
    case Shape.TRIANGLE:
      return "bi-triangle-fill";
    case Shape.CIRCLE:
      return "bi-circle-fill";
    default:
      return "bi-emoji-dizzy";
  }
}

export function generateParagraph(wordCount: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetLength = alphabet.length;
  let paragraph = "";

  for (let i = 0; i < wordCount; i++) {
    const wordLength = Math.floor(Math.random() * 8) + 2;
    let word = "";

    for (let j = 0; j < wordLength; j++) {
      const randomLetter = alphabet.charAt(
        Math.floor(Math.random() * alphabetLength)
      );
      word += randomLetter;
    }

    paragraph += word + " ";
  }

  return paragraph;
}

export function randomCaesarCipher(text: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const maxShift = 25;

  const shift = Math.floor(Math.random() * maxShift + 1);

  const result = text
    .split("")
    .map((char) => {
      if (alphabet.includes(char.toLocaleLowerCase())) {
        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toLowerCase());

        const newIndex = (index + shift) % 26;

        const shiftedChar = isUpperCase
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];

        return shiftedChar;
      } else {
        return char;
      }
    })
    .join("");

  return result;
}
