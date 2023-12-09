<template>
  <div class="projects">
    <div class="grid">
      <ul class="grid__list">
        <sweet-project-card
          class="grid__list__item"
          v-for="(project, index) in projects"
          :key="index"
          :index="index + 1"
          :project="project"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import SweetProjectCard from "./SweetProjectCard.vue";
import { Project } from "@/helpers/types";

export default {
  name: "SweetProjects",
  components: {
    SweetProjectCard,
  },
  setup() {
    const store = useStore();
    const projects = computed(() => store.state.project.projects as Project[]);

    return {
      projects,
    };
  },
};
</script>
