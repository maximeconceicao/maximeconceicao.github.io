<template>
  <div class="game-cells">
    <sweet-game-cell
      v-for="(shape, index) in playerSequence"
      :key="index"
      :shape="shape"
      :lineBreak="!((index + 1) % 4)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SweetGameCell from "@/components/SweetGame/SweetGameCell.vue";
import { Shape } from "@/helpers/constants";

export default defineComponent({
  name: "SweetGameCells",
  components: { SweetGameCell },
  props: {
    playerSequence: {
      type: Array as () => Shape[],
      required: true,
    },
  },
});
</script>
