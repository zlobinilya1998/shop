<template>
  <v-card height="200" width="240" elevation="2">
    <img :src="card.img" alt="" srcset="" />
    <v-card-title class="title d-flex justify-center text-center">{{
      card.title
    }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    card: Object,
  },
};
</script>

<style>
img {
  width: 100%;
  height: auto;
  contain: content;
}
</style>
