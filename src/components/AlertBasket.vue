<template>
  <transition name="basketTransition">
    <v-card v-if="showBasket" class="basket pa-3" outlined>
      <v-container class="d-flex flex-column pa-0">
        <v-card-text class="d-flex justify-space-between pa-0 mt-2 ">
          <span>Товаров на сумму:</span>
          <span class="font-weight-black">{{ Math.ceil(getPrice) }}$</span>
        </v-card-text>
      </v-container>
      <v-divider></v-divider>
      <transition-group name="fade" mode="out-in">
        <template v-for="(product, i) in getBasket">
          <v-list-item class="pa-0" :key="`product#${i}`">
            <v-list-item-content class="pa-0">
              <v-container class="d-flex justify-space-between pa-0 mt-2">
                <div :style="basketStyle" class="overline font-weight-medium">
                  {{ product.price }}$
                </div>
                <v-icon class="closeButton" @click="deleteProduct(i)"
                  >mdi-close-circle</v-icon
                >
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

              <v-container class="d-flex flex-column pa-0 mb-5">
                <v-list-item-subtitle
                  >Количество :
                  <span class="font-weight-medium">{{
                    product.quantity
                  }}</span></v-list-item-subtitle
                >
                <v-list-item-subtitle :style="{ color: 'black' }">{{
                  getTitle(product.title)
                }}</v-list-item-subtitle>
              </v-container>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="i"></v-divider>
        </template>
      </transition-group>
    </v-card>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      basketStyle: { color: "red", fontStyle: "oblique", fontWeight: "bolder" },
    };
  },
  name: "AlertBasket",
  methods: {
    deleteProduct(index) {
      this.$store.dispatch("deleteProduct", index);
    },
    getTitle(title) {
      return title
        .split(" ")
        .slice(0, 3)
        .join(" ");
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
.basketTransition-enter-active,
.basketTransition-leave-active {
  transition: all 0.4s;
}
.basketTransition-enter {
  transform: translateY(-2rem);
  opacity: 0;
}

.basketTransition-leave-to {
  transform: translateX(10rem);
  opacity: 0;
}

.closeButton:hover {
  color: #f66161 !important;
}
.basket {
  position: absolute !important;
  z-index: 2;
  right: 2%;
  height: 20rem;
  min-width: 15rem;
  width: 10%;
  overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter {
  transform: translateY(-2rem);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-1rem);
  opacity: 0;
}
</style>
