<template>
  <v-container>
    <v-container class="banner">
      <p class="text-center ma-0">Скидки до -50% на одежду для отдыха</p>
    </v-container>
    <v-container>
      <section class="d-flex flex-wrap justify-space-between pa-0 mt-5">
        <Welcome
          v-for="(card, index) of cards"
          :key="`Card #${index}`"
          :card="card"
          class="mb-5"
        />
      </section>
    </v-container>

    <v-container> 12 </v-container>
  </v-container>
</template>

<script>
import img from "../assets/home/1.webp";
import img2 from "../assets/home/2.jpg";
import img3 from "../assets/home/3.webp";
import img4 from "../assets/home/4.webp";
import Welcome from "../components/Welcome";
export default {
  name: "HomePage",
  data() {
    return {
      cards: [
        {
          title: "Новинки для дома",
          img: img,
          text: "im 1st card",
        },
        {
          title: "Холодная погода",
          img: img2,
          text: "im 1st card",
        },
        {
          title: "Одежда денима",
          img: img3,
          text: "im 1st card",
        },
        {
          title: "Кроссовки",
          img: img4,
          text: "im 1st card",
        },
      ],
    };
  },
  components: { Welcome },
};
</script>

<style>
.banner {
  background: #c1dcfb;
  background: radial-gradient(
    circle,
    rgba(44, 95, 224, 1) 8%,
    rgba(55, 129, 221, 1) 35%,
    rgb(83, 156, 251) 62%,
    rgba(49, 128, 222, 0.8212868336881145) 92%,
    #c1dcfb 100%
  );
}
.banner > p {
  color: wheat;
}
.card:not(:last-child) {
  margin-right: 5px;
}
</style>
