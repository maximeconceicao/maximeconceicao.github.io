<template>
  <div class="game-cells">
    <i
      v-for="(shape, index) in sequenceToFind"
      :key="shape + index"
      :class="formatShapeIcon(shape) + ' game-cell'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { formatShapeIcon } from "@/helpers/utils";
import { Shape } from "@/helpers/constants";

export default defineComponent({
  name: "SweetGameSolution",
  props: {
    sequenceToFind: {
      type: Array as PropType<Shape[]>,
      required: true,
    },
  },
  setup() {
    return { formatShapeIcon };
  },
});
</script>
