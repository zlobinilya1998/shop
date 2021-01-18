<template>
  <v-container class="container d-flex justify-center flex-wrap pa-0">
    <Loader v-if="products == null" />
    <v-card
      elevation="2"
      :key="product.id"
      v-for="product of products"
      class="pt-5 mb-15 d-flex flex-column"
      max-width="340"
    >
      <v-img
        class="white--text align-end "
        height="120"
        contain
        :src="product.image"
        @click="changeDialog(product, products)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="start" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-card-subtitle align="center" class="price">
        {{ product.price }} $
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-title class="d-flex justify-center text-center">{{
        product.title
          .split(" ")
          .slice(0, 4)
          .join(" ")
      }}</v-card-title>

      <v-card-actions>
        <v-divider></v-divider>

        <v-btn @click="addProduct(product)" color="light-blue accent-3" text>
          Добавить в корзину
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Item",
  props: {
    products: Array,
    changeDialog: Function,
    addProduct: Function,
  },
};
</script>

<style></style>
