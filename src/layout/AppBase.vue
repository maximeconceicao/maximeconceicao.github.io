<template>
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "AppBase",
  components: {},
  data: () => ({
    navIsOpen: false,
  }),
};
</script>

<style lang="scss">
.main {
  position: relative;
}
</style>
