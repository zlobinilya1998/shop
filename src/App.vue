<template>
  <v-app>
    <MainLayout />
  </v-app>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  name: "App",
  components: {
    MainLayout,
  },

  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
#app {
  background: linear-gradient(
    159deg,
    rgb(220, 233, 248) 40%,
    rgb(193, 220, 251) 100%
  );
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;
}
</style>
