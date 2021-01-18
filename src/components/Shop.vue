<template>
  <v-container>
    <div class="mb-10">
      <v-text-field
        v-model="input.text"
        label="Поиск по магазину"
        :rules="input.rules"
        hide-details="auto"
      ></v-text-field>
    </div>
    <v-container
      v-if="input.text == 0"
      class="container d-flex justify-center flex-wrap pa-0"
    >
      <Loader v-if="products == null" />
      <v-card
        elevation="2"
        :key="product.id"
        v-for="product of itemsToShow"
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

    <h3 v-else-if="filterProducts.length == 0">
      Совпадений по вашему запросу не найдено.
    </h3>

    <Items
      v-else
      :products="filterProducts"
      :changeDialog="changeDialog"
      :addProduct="addProduct"
    />
    <ItemAbout />

    <v-container
      v-if="products && filterProducts.length !== 0"
      class="d-flex justify-center align-center"
    >
      <v-btn :disabled="currentPage <= 0" @click="currentPage--">Назад</v-btn>
      <v-btn :disabled="showBtn" @click="currentPage++">Вперед</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import Loader from "./Loader";
import ItemAbout from "./ItemAbout";
import Items from "./Items.vue";
export default {
  name: "Shop",
  components: {
    Loader,
    ItemAbout,
    Items,
  },
  data() {
    return {
      input: {
        text: "",
        rules: [(value) => !!value || "Введите текст"],
      },
      products: null,
      itemsPrice: 0,
      itemsOnPage: 6,
      currentPage: 0,
    };
  },
  methods: {
    changeDialog(product) {
      this.$store.dispatch("changeDialog", product);
    },
    addProduct(product) {
      this.$store.dispatch("addProduct", product);
    },
    getProducts() {
      let get = async () => {
        let res = await fetch("https://fakestoreapi.com/products?limit=25");
        let json = await res.json();
        this.products = await json;
      };
      get();
    },
    addAnswer(item) {
      this.answersPrice += item.price;
      this.answers.push(item);
    },
    deleteAnswer(index, item) {
      this.answersPrice -= item.price;
      this.answers.splice(index, 1);
    },
  },
  computed: {
    showBtn() {
      let f = () => {
        if (this.currentPage >= this.maxPageCount) {
          return true;
        } else return false;
      };
      return f() || this.input.text !== "";
    },
    filterProducts() {
      if (this.products) {
        return this.products.filter((elem) =>
          elem.title.toLowerCase().startsWith(this.input.text.toLowerCase())
        );
      } else return [];
    },
    getBasket() {
      return this.$store.getters.getBasket;
    },
    maxPageCount() {
      if (this.products) {
        return Math.ceil(this.products.length / this.itemsOnPage) - 1;
      } else return null;
    },
    itemsToShow() {
      if (this.products !== null) {
        return this.products.slice(
          this.currentPage * this.itemsOnPage,
          this.itemsOnPage * (this.currentPage + 1)
        );
      }
      return [];
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.price {
  color: rgb(39, 165, 35) !important;
}
</style>
