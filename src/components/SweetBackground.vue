<template>
  <!-- Canvas -->
  <div id="orb-sketch"></div>
  <div class="blur"></div>
  <div class="noise"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import p5 from "p5";
import Orb from "../helpers/Orb";

export default defineComponent({
  name: "SweetBackground",
  setup() {
    onMounted(() => {
      const sketch = (s: p5) => {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let orbs: Orb[] = [];

        s.setup = () => {
          s.createCanvas(w, h);
          s.noStroke();

          orbs = initOrbs();
        };

        s.draw = () => {
          s.background(0);
          for (const orb of orbs) {
            orb.move(s);
            orb.render(s);
          }
        };

        function initOrbs() {
          const orbsArray: Orb[] = [];
          let xPosInWidthPct = 0.7;
          let yPosInHeightPct = 0.7;
          let maxDistPct = 0.3;

          for (let i = 0; i < 10; i++) {
            const orb = new Orb(
              xPosInWidthPct,
              yPosInHeightPct,
              maxDistPct,
              "#ff000040"
            );
            orbsArray.push(orb);
          }

          xPosInWidthPct = 0.3;
          yPosInHeightPct = 0.3;

          for (let i = 0; i < 10; i++) {
            const orb = new Orb(
              xPosInWidthPct,
              yPosInHeightPct,
              maxDistPct,
              "#0000ff40"
            );
            orbsArray.push(orb);
          }
          return orbsArray;
        }

        window.onresize = function () {
          w = window.innerWidth;
          h = window.innerHeight;
          s.resizeCanvas(w, h);
          initOrbs();
        };
      };

      const orbSketch = document.getElementById("orb-sketch");

      new p5(sketch, orbSketch as HTMLElement);
    });
  },
});
</script>

<style lang="scss">
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  #orb-sketch {
    position: fixed;
  }
  .blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgba(170, 196, 200, 0.1);
    backdrop-filter: saturate(180%) blur(3rem);
  }
  .noise {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url("../assets/noise.png");
    background-size: auto;
    background-repeat: repeat;
    mix-blend-mode: overlay;
    opacity: 0.2;
  }
}
</style>
