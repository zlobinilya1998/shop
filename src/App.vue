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

<style scoped></style>
