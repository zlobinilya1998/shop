<template>
  <main class="d-flex flex-column">
    <Navigation />
    <AlertBasket />
    <v-container class="mt-10">
      <router-view />
    </v-container>
  </main>
</template>

<script>
import Navigation from "../components/Navigation";
import AlertBasket from "../components/AlertBasket";

export default {
  name: "MainLayout",
  data() {
    return {
      input: "",
    };
  },
  components: {
    Navigation,
    AlertBasket,
  },
  methods: {},
};
</script>

<style scoped>
main {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
