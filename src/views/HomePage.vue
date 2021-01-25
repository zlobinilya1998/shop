<template>
  <v-container class="pa-0">
    <v-container class="banner ">
      <p class="text-center ma-0">Скидки до -50% на одежду для отдыха</p>
    </v-container>
    <v-container class="pa-0">
      <section class="d-flex flex-wrap justify-space-between pa-0 mt-5">
        <router-link
          :to="card.route"
          v-for="(card, index) of cards"
          :key="`Card #${index}`"
          ><Welcome :card="card" class="mb-5 homeCard"
        /></router-link>
      </section>
    </v-container>
  </v-container>
</template>

<script>
import img from "../assets/home/1.webp";
import img2 from "../assets/home/2.jpg";
import img3 from "../assets/home/3.webp";
import img4 from "../assets/home/4.webp";
import Welcome from "../components/Welcome";

class Card {
  constructor(title, img, route) {
    this.title = title;
    this.img = img;
    this.route = route;
  }
}

export default {
  name: "HomePage",
  data() {
    return {
      cards: [
        new Card("Одежда для неё", img, "women clothing"),
        new Card("Одежда для него", img3, "men clothing"),
        new Card("Электроника", img2, "electronics"),
        new Card("Украшения", img4, "jewelery"),
      ],
    };
  },
  components: { Welcome },
};
</script>

<style>
.homeCard {
  transition: all 0.4s ease-in-out;
}
.homeCard:hover {
  transform: translateY(0.5rem);
}
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
