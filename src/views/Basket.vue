<template>
  <v-container class="d-flex pa-0 basketWrapper">
    <v-container class="basketLeft pa-5 ">
      <v-container
        class="basketLeftTitle d-flex justify-space-between align-center pa-0 mb-5"
      >
        <h3 class="text-start">
          Моя корзина
        </h3>
      </v-container>
      <v-divider />
      <transition-group name="list">
        <v-container
          v-for="(product, index) in getBasket"
          :key="`Item #${index} in basket`"
          class="basketLeftProducts pa-0 mt-5 d-flex"
        >
          <v-img max-width="80" max-height="80" :src="product.image" />
          <v-container class="pa-0 mx-5">
            <v-container
              class="d-flex justify-space-between pa-0 align-center priceWrapper"
            >
              <h4 class="mb-0 text-decoration-underline">
                {{ product.price }}
              </h4>
              <v-icon @click="deleteItem(index)" class="closeButton"
                >mdi-close-circle</v-icon
              >
            </v-container>
            <p>
              {{ product.title }}
            </p>
          </v-container>
        </v-container>
      </transition-group>
    </v-container>
    <v-container class="basketRight pa-5">
      <h3 class="mb-5 basketRightSum">Итого</h3>
      <v-divider />
      <v-container class="pa-0 mt-5">
        <p>Всего {{ getPrice }} $</p>
        <p>Доставка 30 $</p>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Basket",
  methods: {
    deleteItem(index) {
      this.$store.dispatch("deleteProduct", index);
    },
  },
  computed: {
    showBasket() {
      return this.getBasket.length !== 0 ? true : false;
    },
    getPrice() {
      let initialValue = 0;
      let sum = this.$store.getters.getBasket.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        initialValue
      );
      return sum;
    },
    getBasket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style scoped>
.basketLeftProducts {
  position: relative;
}
.basketWrapper {
  min-height: 15rem;
}
.closeButton {
  cursor: pointer;
  position: absolute;
  right: 0;
}
.closeButton:hover {
  color: #f66161 !important;
}
.basketLeft {
  width: 60%;
}
.list-move {
  transition: transform 0.4s;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.7s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  transform: translateY(-2rem);
  opacity: 0;
}
.basketRight {
  width: 37%;
  max-height: 15rem;
  background: gainsboro;
}
.basketLeft,
.basketRight {
  background: rgb(248, 248, 248);
}
</style>
