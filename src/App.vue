<template>
  <v-app class="container">
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
  min-height: 100vh;
}
</style>
