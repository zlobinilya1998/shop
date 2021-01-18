<template>
  <v-card v-if="showBasket" class="basket" max-width="300" outlined>
    <v-container class="d-flex flex-column">
      <v-card-text class="d-flex justify-space-between pa-0 pt-2 ">
        <span>Товаров на сумму:</span>
        <span class="font-weight-black">{{ Math.ceil(getPrice) }}$</span>
      </v-card-text>
    </v-container>
    <v-divider></v-divider>
    <template v-for="(product, i) in getBasket">
      <v-list-item :key="i">
        <v-list-item-content class="pa-0">
          <v-container class="d-flex justify-space-between pa-0 mt-2">
            <div :style="{ color: 'red' }" class="overline font-weight-medium">
              {{ product.price }}$
            </div>
            <v-icon @click="deleteProduct(i)">mdi-close-circle</v-icon>
          </v-container>
          <v-container class="pa-0 d-flex justify-center">
            <v-list-item-avatar
              class="mb-5"
              size="inherit"
              max-height="150"
              max-width="100"
              tile
              color="grey"
              ><v-img :src="product.image" :alt="product.image"
            /></v-list-item-avatar>
          </v-container>

          <v-container class="d-flex flex-column pa-0 pb-5">
            <v-list-item-subtitle
              >Количество :
              <span class="font-weight-medium">{{
                product.quantity
              }}</span></v-list-item-subtitle
            >
            <v-list-item-subtitle :style="{ color: 'black' }">{{
              product.title
                .split(" ")
                .slice(0, 3)
                .join(" ")
            }}</v-list-item-subtitle>
          </v-container>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="i"></v-divider>
    </template>
  </v-card>
  <v-container class="smallBasket" v-else>
    <v-icon class="">mdi-basket-plus </v-icon>
    <p class="smallBasket__p" v-if="getBasket.length !== 0">
      {{ getQuantity }}
    </p>
  </v-container>
</template>

<script>
export default {
  name: "AlertBasket",
  methods: {
    deleteProduct(index) {
      this.$store.dispatch("deleteProduct", index);
    },
  },
  computed: {
    getQuantity() {
      let initialValue = 0;
      let sum = this.$store.getters.getBasket.reduce(
        (acc, cur) => acc + cur.quantity,
        initialValue
      );
      return sum;
    },
    getPrice() {
      let initialValue = 0;
      let sum = this.$store.getters.getBasket.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        initialValue
      );
      return sum;
    },
    showBasket() {
      return this.getBasket.length !== 0 && this.$route.path !== "/basket";
    },
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style>
.basket {
  height: 200px;
  width: 280px;
  overflow: auto;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1000;
}
.smallBasket {
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.smallBasket__p {
  position: absolute;
  right: 50px;
}
</style>
