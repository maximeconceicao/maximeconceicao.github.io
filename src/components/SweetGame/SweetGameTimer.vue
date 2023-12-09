<template>
  <div class="game-timer">
    <p>{{ timerCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SweetGameTimer",
  props: {
    initialCountdown: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  data() {
    return {
      timerEnabled: true,
      timerCount: this.initialCountdown,
    };
  },

  watch: {
    timerEnabled(value: boolean) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value: number) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else if (value <= 0) {
          this.handleTimerFinished();
        }
      },
      immediate: true,
    },
  },

  methods: {
    play(): void {
      this.timerEnabled = true;
    },

    pause(): void {
      this.timerEnabled = false;
    },

    handleTimerFinished(): void {
      this.$emit("timerFinished");
    },
    resetTimer(): void {
      this.timerCount = this.initialCountdown;
    },
  },
});
</script>
