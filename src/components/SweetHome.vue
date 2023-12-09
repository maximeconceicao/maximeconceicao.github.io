<template>
  <div class="content">
    <sweet-header />
    <sweet-projects />
  </div>
</template>

<script>
import SweetHeader from "@/components/SweetHeader.vue";
import SweetProjects from "@/components/SweetProjects.vue";
export default {
  name: "SweetHome",

  components: { SweetHeader, SweetProjects },
};
</script>
