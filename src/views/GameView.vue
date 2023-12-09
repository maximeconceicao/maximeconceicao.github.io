<template>
  <div class="game">
    <div class="sticky-header game__back">
      <header>
        <router-link :to="{ name: 'home' }"
          ><span class="material-icons">arrow_back</span></router-link
        >
      </header>
    </div>
    <div id="main-game">
      <div class="game__header">
        <div class="game__header__item">
          <p>Score</p>
          <p class="game-score">{{ score }}</p>
        </div>
        <div class="game__header__item">
          <p>Time</p>
          <sweet-game-timer
            ref="timer"
            :initialCountdown="initialCountdown"
            @timerFinished="handleTimerFinished"
          />
        </div>
      </div>
      <div v-if="!isGameOver" class="game__board">
        <sweet-game-sequence :sequenceToFind="sequenceToFind" />
        <sweet-game-cells
          v-if="playerSequence?.length"
          :playerSequence="playerSequence"
        />
        <sweet-game-buttons
          @drawShape="onDrawShape"
          @reverse="onReverse"
          @clear="onClear"
        />
      </div>
      <div v-else>
        <sweet-game-score-board @restart="restart" @redirect="redirectToHome" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SweetGameSequence from "@/components/SweetGame/SweetGameSequence.vue";
import SweetGameCells from "@/components/SweetGame/SweetGameCells.vue";
import SweetGameButtons from "@/components/SweetGame/SweetGameButtons.vue";
import SweetGameTimer from "@/components/SweetGame/SweetGameTimer.vue";

import {
  Shape,
  START_SEQUENCE_LENGTH,
  DEFAULT_COUNTDOWN,
} from "@/helpers/constants";
import { random } from "@/helpers/utils";
import SweetGameScoreBoard from "@/components/SweetGame/SweetGameScoreBoard.vue";

export default defineComponent({
  name: "GameView",
  components: {
    SweetGameSequence,
    SweetGameCells,
    SweetGameButtons,
    SweetGameTimer,
    SweetGameScoreBoard,
  },
  data() {
    return {
      initialCountdown: DEFAULT_COUNTDOWN,
      isGameOver: false,
    };
  },
  setup() {
    let sequenceLength = START_SEQUENCE_LENGTH;
    let sequenceToFind = ref<string[]>([]);
    let playerSequence = ref<(string | null)[]>([]);
    let score = ref(0);

    function resetGame(): void {
      sequenceLength = START_SEQUENCE_LENGTH;
      resetSequences();
    }

    function resetSequences(): void {
      sequenceToFind.value = generateStartingSequence(sequenceLength);
      playerSequence.value = resetPlayerSequence(sequenceToFind.value.length);
    }

    function generateStartingSequence(length: number): string[] {
      const generatedSequence: string[] = [];
      for (let i = 0; i < length; i++) {
        let indexOfShape = Math.floor(random(0, Object.keys(Shape).length));
        generatedSequence.push(Object.values(Shape)[indexOfShape]);
      }
      return generatedSequence;
    }

    function resetPlayerSequence(length: number): (string | null)[] {
      return Array.apply(null, Array(length)).map(() => null);
    }

    function onDrawShape(shape: string): void {
      const index = playerSequence.value.findIndex((s) => s === null);

      if (index > -1) {
        playerSequence.value[index] = shape;
      } else {
        playerSequence.value = resetPlayerSequence(sequenceToFind.value.length);
      }

      if (playerSequence.value[playerSequence.value.length - 1]) {
        validateSequence();
      }
    }

    function onClear(): void {
      playerSequence.value = resetPlayerSequence(sequenceLength);
    }

    function validateSequence(): void {
      if (
        JSON.stringify(playerSequence.value) ===
        JSON.stringify(sequenceToFind.value)
      ) {
        score.value += 1;
        sequenceLength += 1;
        resetSequences();
      }
    }

    function onReverse(): void {
      let playerSequenceCopy = [...playerSequence.value];
      playerSequenceCopy.forEach((shape, index) => {
        switch (shape) {
          case Shape.STAR:
            playerSequence.value[index] = Shape.TRIANGLE;
            break;
          case Shape.SQUARE:
            playerSequence.value[index] = Shape.CIRCLE;
            break;
          case Shape.TRIANGLE:
            playerSequence.value[index] = Shape.STAR;
            break;
          case Shape.CIRCLE:
            playerSequence.value[index] = Shape.SQUARE;
            break;
        }
      });

      if (playerSequence.value[playerSequence.value.length - 1]) {
        validateSequence();
      }
    }

    onMounted(() => {
      resetGame();
    });

    return {
      sequenceToFind,
      playerSequence,
      score,
      onDrawShape,
      onReverse,
      onClear,
      resetGame,
    };
  },
  methods: {
    redirectToHome(): void {
      this.$router.push("/");
    },
    handleTimerFinished(): void {
      this.isGameOver = true;
    },
    restart(): void {
      this.onClear();
      this.score = 0;
      this.resetGame();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.$refs.timer as any).resetTimer();
      this.isGameOver = false;
    },
  },
});
</script>
