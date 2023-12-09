export default class FlapText {
  private element: HTMLElement;
  private alphabet: string[];
  private currentPositions: number[];
  private targetPositions: number[];
  private randomPositions: number[];

  constructor(element: HTMLElement, alphabet: string[]) {
    this.element = element;
    this.alphabet = alphabet;
    this.currentPositions = [];
    this.targetPositions = [];
    this.randomPositions = [];
  }

  setInitialPositions(text: string): void {
    const textArray: string[] = text.split("");
    const textLength: number = textArray.length;

    textArray.forEach((char, index) => {
      const charIndex = this.alphabet.indexOf(char);
      if (charIndex === -1) {
        this.alphabet.push(char);
        this.targetPositions[index] = this.alphabet.length - 1;
      } else {
        this.targetPositions[index] = charIndex;
      }
    });
    this.currentPositions = [...this.targetPositions];
    this.randomPositions = Array(textLength).fill(0);
  }

  shufflePositions(): void {
    const randomOffset: number = Math.floor(10 * Math.random()) + 5;
    for (let i = 0; i < this.currentPositions.length; i++) {
      this.currentPositions[i] =
        (this.currentPositions[i] + this.alphabet.length - randomOffset) %
        this.alphabet.length;
      this.randomPositions[i] = Math.floor(10 * Math.random());
    }
  }

  flap(): void {
    if (this.element.dataset.paused !== "false") {
      return;
    }
    this.currentPositions.forEach((position, index) => {
      if (this.randomPositions[index] > 0) {
        this.randomPositions[index]--;
      } else if (this.currentPositions[index] !== this.targetPositions[index]) {
        this.currentPositions[index] =
          (this.currentPositions[index] + 1) % this.alphabet.length;
      }
    });
  }

  render(): void {
    const newText = this.currentPositions.reduce((text, position) => {
      let char = this.alphabet[position];
      if (char === ">") {
        char = "&gt;";
      } else if (char === "<") {
        char = "&lt;";
      }
      return text + char;
    }, "");
    if (this.element.innerHTML !== newText) {
      this.element.innerHTML = newText;
    }
  }
}
