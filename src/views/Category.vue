<template>
  <v-container>
    <h1>Категория: {{ category }}</h1>
    <v-card
      v-for="(product, index) in getProducts"
      :key="`Category ${product} ${index}`"
    >
      <p>{{ product.title }}</p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      category: this.$route.params.category,
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters.categoryProducts(this.category);
    },
    categoryName(title) {
      if (title == "women clothing") {
        return "Одежда для неё";
      } else return title;
    },
  },
};
</script>

<style></style>
