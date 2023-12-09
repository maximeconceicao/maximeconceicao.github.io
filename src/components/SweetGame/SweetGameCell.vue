<template>
  <div class="game-cell game-cell-play">
    <i v-if="shape" :class="formatShapeIcon(shape)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { formatShapeIcon } from "@/helpers/utils";
import { Shape } from "@/helpers/constants";

export default defineComponent({
  name: "SweetGameCell",
  props: {
    shape: String as PropType<Shape>,
    lineBreak: Boolean,
  },
  setup() {
    return { formatShapeIcon };
  },
});
</script>
