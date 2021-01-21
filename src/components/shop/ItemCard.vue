<template>
  <v-card
    @mouseenter="active = true"
    @mouseleave="active = false"
    elevation="2"
    class="mb-15 d-flex flex-column"
    max-width="340"
  >
    <v-img
      class="white--text align-end mt-5"
      height="120"
      contain
      :src="product.image"
      @click="changeDialog(product)"
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
    <v-card-title
      :class="{ active: active }"
      class="title d-flex justify-center text-center"
      >{{ productTitle(product.title) }}</v-card-title
    >

    <v-card-actions>
      <v-divider></v-divider>

      <v-btn @click="addProduct(product)" color="light-blue accent-3" text>
        Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  name: "ItemCard",
  props: {
    product: Object,
    products: Array,
    index: Number,
    changeDialog: Function,
    addProduct: Function,
  },
  methods: {
    productTitle(title) {
      return title
        .split(" ")
        .slice(0, 4)
        .join(" ");
    },
  },
};
</script>

<style scoped>
.title {
  transition: all 0.3s ease;
}
.active {
  text-shadow: 1px 1px 13px #32f7f8;
}
.price {
  color: rgb(39, 165, 35) !important;
}
</style>
