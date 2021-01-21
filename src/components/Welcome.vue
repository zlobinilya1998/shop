<template>
  <v-card elevation="2" class="mb-15 d-flex flex-column">
    <v-img class="white--text align-end" :src="cards[0].img" contain> </v-img>
    <v-divider></v-divider>
    <v-card-title
      :class="{ active: active }"
      class="title d-flex justify-center text-center"
      >{{ cards[0].title }}</v-card-title
    >
  </v-card>
</template>

<script>
import img from "../assets/home/1.jpg";
export default {
  name: "Welcome",
  data() {
    return {
      cards: [
        {
          title: "Bonga cams",
          img: img,
          text: "im 1st card",
        },
      ],
    };
  },
};
</script>

<style></style>
