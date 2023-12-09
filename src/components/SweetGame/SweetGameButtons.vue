<template>
  <div class="game-buttons">
    <button class="game-button" role="button" @click="drawShape(Shape.SQUARE)">
      <i class="bi-square-fill" />
    </button>
    <button class="game-button" role="button" @click="drawShape(Shape.STAR)">
      <i class="bi-star-fill" />
    </button>
    <button class="game-button" role="button" @click="reverse()">
      <i class="bi-arrow-left-right" />
    </button>
    <!-- <button class="game-button" role="button" @click="clear()">
      <i class="bi-trash" />
    </button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Shape } from "@/helpers/constants";

export default defineComponent({
  name: "SweetGameButtons",
  emits: ["drawShape", "reverse", "clear"],
  setup(_, { emit }) {
    function drawShape(shape: string): void {
      emit("drawShape", shape);
    }
    function reverse(): void {
      emit("reverse");
    }
    function clear(): void {
      emit("clear");
    }

    return { Shape, drawShape, reverse, clear };
  },
});
</script>
