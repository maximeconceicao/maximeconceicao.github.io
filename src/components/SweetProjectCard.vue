<template>
  <li v-if="project">
    <article class="project">
      <div class="project__card">
        <video v-if="project.mediaType === 'video'" loop autoplay muted>
          <source :src="project.mediaUrl" type="video/mp4" />
        </video>
        <img v-else :src="project.mediaUrl" alt="" />
      </div>
      <div class="project__content">
        <h2 class="flap">{{ projectNumber }} | {{ project.title }}</h2>
        <h3
          class="flap"
          style="
            font-style: italic;
            word-wrap: break-word;
            display: flex;
            flex-direction: column;
          "
          v-html="project.subtitle"
        ></h3>
        <p style="text-align: start">
          {{ project.description }}
        </p>
        <div class="project__links">
          <div v-for="(link, index) in project.links" :key="index">
            <i class="bi-signpost-fill"></i>
            <a target="_blank" :href="link.url">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </article>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { Project } from "@/helpers/types"; // Import the type definition for Project

export default defineComponent({
  name: "SweetProject",
  props: {
    index: {
      type: Number,
      required: true,
    },
    project: {
      type: Object as PropType<Project | null>,
      required: true,
    },
  },
  setup(props) {
    const projectNumber = computed(() => {
      return props.index < 10 ? "0" + props.index : String(props.index);
    });

    return { projectNumber };
  },
});
</script>
