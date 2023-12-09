<template>
  <sweet-home></sweet-home>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SweetHome from "@/components/SweetHome.vue";

@Options({
  components: {
    SweetHome,
  },
})
export default class HomeView extends Vue {}
</script>
