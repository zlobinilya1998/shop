<template>
  <main class="d-flex flex-column">
    <Navigation />
    <AlertBasket />
    <router-view />
  </main>
</template>

<script>
import Navigation from "../components/Navigation";
import AlertBasket from "../components/AlertBasket";

export default {
  name: "MainLayout",
  components: {
    Navigation,
    AlertBasket,
  },
};
</script>

<style scoped>
main {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
}
.parallax {
}
</style>
