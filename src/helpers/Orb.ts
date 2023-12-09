import { debounce } from "debounce";
import { random } from "./utils";
import p5 from "p5";

export default class Orb {
  private xPosInWidthPct: number;
  private yPosInHeightPct: number;
  private maxDistPct: number;
  private bounds: {
    x: { min: number; max: number };
    y: { min: number; max: number };
  };
  private x: number;
  private y: number;
  private radius: number;
  private xOff: number;
  private yOff: number;
  private inc: number;
  private fillColor: string;

  constructor(
    xPosInWidthPct: number,
    yPosInHeightPct: number,
    maxDistPct: number,
    fillColor: string
  ) {
    this.xPosInWidthPct = xPosInWidthPct;
    this.yPosInHeightPct = yPosInHeightPct;
    this.maxDistPct = maxDistPct;

    this.bounds = this.setBounds();
    this.x = random(this.bounds.x.min, this.bounds.x.max);
    this.y = random(this.bounds.y.min, this.bounds.y.max);

    this.radius = random(window.innerHeight / 6, window.innerHeight / 2);

    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    this.inc = 0.002;

    this.fillColor = fillColor;
    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  private setBounds() {
    const maxDistX = window.innerWidth * this.maxDistPct;
    const maxDistY = window.innerHeight * this.maxDistPct;

    return {
      x: {
        min: this.xPosInWidthPct * window.innerWidth - maxDistX,
        max: this.xPosInWidthPct * window.innerWidth + maxDistX,
      },
      y: {
        min: this.yPosInHeightPct * window.innerHeight - maxDistY,
        max: this.yPosInHeightPct * window.innerHeight + maxDistY,
      },
    };
  }

  public move(sketchInstance: p5) {
    const xNoise = sketchInstance.noise(this.xOff, this.xOff);
    const yNoise = sketchInstance.noise(this.yOff, this.yOff);

    this.x = sketchInstance.map(
      xNoise,
      0,
      1,
      this.bounds.x.min,
      this.bounds.x.max
    );
    this.y = sketchInstance.map(
      yNoise,
      0,
      1,
      this.bounds.y.min,
      this.bounds.y.max
    );

    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  public render(sketchInstance: p5) {
    sketchInstance.fill(this.fillColor);
    sketchInstance.ellipse(this.x, this.y, this.radius, this.radius);
  }
}
