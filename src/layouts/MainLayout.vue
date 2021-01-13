<template>
  <v-container>
    <v-container class="d-flex">
      <Navigation />
      <AlertBasket />
    </v-container>
    <router-view />
  </v-container>
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

<style></style>
