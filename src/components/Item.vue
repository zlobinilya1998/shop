<template>
  <v-container class="banner">
    <p class="text-center ma-0">{{ getName }}</p>
  </v-container>
</template>

<script>
export default {
  name: "Item",
  computed: {
    getName() {
      return this.$route.params.items;
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  background: #c1dcfb;
  background: radial-gradient(
    circle,
    rgba(44, 95, 224, 1) 8%,
    rgba(55, 129, 221, 1) 35%,
    rgb(83, 156, 251) 62%
  );
}
.banner > p {
  color: rgb(96, 250, 7);
}
</style>
