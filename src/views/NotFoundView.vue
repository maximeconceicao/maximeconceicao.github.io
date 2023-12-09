<template>
  <div class="container">
    <div class="not-found">
      <h1>404</h1>
      <div class="not-found__image">
        <img src="../assets/images/backrooms.jpg" alt="" />
      </div>
      <div class="not-found__text">
        <p>You just noclip into the Backrooms.</p>
        <p>
          There's nothing here, except the smell of wet carpet and the incessant
          buzzing of neon lights.
        </p>
        <p>Suddenly you hear a noise, something is lurking nearby.</p>
      </div>
      <button @click="redirectToHome()" class="not-found__button">
        Get me out of here
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
});
</script>
