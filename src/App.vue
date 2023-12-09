<template>
  <sweet-background />
  <app-base />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SweetBackground from "./components/SweetBackground.vue";
import FlapText from "./helpers/FlapText";
import AppBase from "./layout/AppBase.vue";

export default defineComponent({
  name: "App",
  components: { AppBase, SweetBackground },
  mounted() {
    this.initializeFlapText();
  },
  methods: {
    initializeFlapText() {
      document.addEventListener(
        "readystatechange",
        this.handleReadyStateChange
      );
    },
    handleReadyStateChange() {
      if (document.readyState === "complete") {
        const characters =
          "\"'“”‘’¹²³!#$&%()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~½¼¡«»×▓▒░".split(
            ""
          );

        const shuffledCharacters = characters.sort(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_a: string, _b: string) => 0.5 - Math.random()
        );

        (function () {
          const flapTextElements: FlapText[] = [];

          document.querySelectorAll(".flap").forEach((flapElement) => {
            const lines = (flapElement as HTMLElement).innerText
              .trimEnd()
              .split("\n")
              .map((line: string) => line.trimEnd().replaceAll("\t", ""));
            flapElement.innerHTML = "";

            lines.forEach((line: string) => {
              const span = document.createElement("span");
              span.dataset.paused = "true";
              flapElement.appendChild(span);

              new IntersectionObserver(
                (entries) => {
                  if (entries[0].isIntersecting === true) {
                    span.dataset.paused = "false";
                  }
                },
                { threshold: [0] }
              ).observe(span);

              const flapText = new FlapText(span, shuffledCharacters);
              flapText.setInitialPositions(line);
              flapText.shufflePositions();

              flapText.render();

              span.addEventListener("mouseenter", () => {
                flapText.shufflePositions();
              });

              flapTextElements.push(flapText);
            });
          });

          let frameCount = 0;
          requestAnimationFrame(function animate() {
            requestAnimationFrame(animate);
            if (frameCount++ % 2 === 0) {
              for (const flapText of flapTextElements) {
                flapText.flap();
                flapText.render();
              }
            }
          });
        })();
      }
    },
  },
});
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
