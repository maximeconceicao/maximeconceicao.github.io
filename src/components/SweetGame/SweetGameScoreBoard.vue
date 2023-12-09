<template>
  <div class="game__scoreboard">
    <h2>
      <i class="bi-star"></i>
      GAME OVER
      <i class="bi-star"></i>
    </h2>
    <h3>ALMOST A <br />HIGH SCORE <br />!!!</h3>
    <div class="game__scoreboard__scores">
      <div class="game__scoreboard__scores__score">
        1ST MAX . . . . . . 1012<br />
        2ND MAX . . . . . . 0999<br />
        3RD MAX . . . . . . 0994<br />
        4TH MAX . . . . . . 0982<br />
        5TH MAX . . . . . . 0976<br />
      </div>
    </div>
    <div class="game__scoreboard__restart">
      <p>PLAY AGAIN ?</p>
      <div class="game__scoreboard__restart__items">
        <div class="game__scoreboard__restart__item">
          <button @click="restart()">YES</button>
          <span class="display-on-hover">^</span>
        </div>
        <div class="game__scoreboard__restart__item">
          <button @click="redirect()">NO</button>
          <span class="display-on-hover">^</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatShapeIcon } from "@/helpers/utils";

export default defineComponent({
  name: "SweetGameScoreBoard",
  emits: ["restart", "redirect"],
  setup(_, { emit }) {
    function restart(): void {
      emit("restart");
    }
    function redirect(): void {
      emit("redirect");
    }

    return { formatShapeIcon, restart, redirect };
  },
});
</script>
