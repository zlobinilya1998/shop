<template>
  <div>
    <div class="d-flex justify-center flex-wrap pa-0">
      <Loader v-if="!getProductsFromStore" />
      <ItemCard
        class="itemCard"
        v-for="(product, index) of filteredProducts"
        :key="`Product #${index}`"
        :product="product"
        :changeDialog="changeDialog"
        :addProduct="addProduct"
      />

      <transition name="zeroMatches">
        <h3 v-if="showEmptyText">
          Совпадений по вашему запросу не найдено.
        </h3>
      </transition>

      <v-container
        v-if="itemsToShow !== null && filteredProducts.length !== 0"
        class="d-flex justify-center align-center mb-5"
      >
        <v-btn class="btn" :disabled="currentPage <= 0" @click="currentPage--">
          <v-icon>mdi-page-previous</v-icon>
          Назад
        </v-btn>
        <v-btn class="btn" :disabled="showBtn" @click="currentPage++"
          >Вперед
          <v-icon>mdi-page-next</v-icon>
        </v-btn>
      </v-container>
    </div>

    <ItemAbout />
  </div>
</template>

<script>
import Loader from "@/components/shop/Loader";
import ItemAbout from "@/components/shop/ItemAbout";
import ItemCard from "@/components/shop/ItemCard";
export default {
  name: "Shop",
  components: {
    Loader,
    ItemAbout,
    ItemCard,
  },
  data() {
    return {
      itemsPrice: 0,
      itemsOnPage: 6,
      currentPage: 0,
    };
  },
  props: {
    input: String,
  },
  methods: {
    async getProducts() {
      let res = await fetch("https://fakestoreapi.com/products?limit=25");
      let json = await res.json();
      this.$store.dispatch("setProducts", json);
    },
    changeDialog(product) {
      this.$store.dispatch("changeDialog", product);
    },
    addProduct(product) {
      this.$store.dispatch("addProduct", product);
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
    showEmptyText() {
      if (this.filteredProducts && this.filteredProducts.length == 0) {
        return true;
      } else return false;
    },
    getProductsFromStore() {
      return this.$store.getters.getProducts;
    },
    showBtn() {
      let f = () => {
        if (
          this.currentPage >= this.maxPageCount &&
          this.filteredProducts.length < this.itemsOnPage
        ) {
          return true;
        } else return false;
      };
      return f();
    },
    getBasket() {
      return this.$store.getters.getBasket;
    },
    getInput() {
      return this.$store.getters.getSearchItemField;
    },
    maxPageCount() {
      if (this.getProductsFromStore !== null) {
        return (
          Math.ceil(this.getProductsFromStore.length / this.itemsOnPage) - 1
        );
      } else return null;
    },
    filteredProducts() {
      if (this.getInput !== "" && this.getProductsFromStore !== null) {
        return this.getProductsFromStore.filter((elem) =>
          elem.title.toLowerCase().includes(this.getInput.toLowerCase())
        );
      } else return this.itemsToShow;
    },
    itemsToShow() {
      if (this.getProductsFromStore !== null) {
        return this.getProductsFromStore.slice(
          this.currentPage * this.itemsOnPage,
          this.itemsOnPage * (this.currentPage + 1)
        );
      } else return null;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.zeroMatches-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.zeroMatches-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(3rem);
}

.itemCard {
  cursor: pointer;
}

.activeBtn {
  color: rgba(129, 238, 147, 0.719) !important;
}
.btn {
  width: 8rem;
  display: flex;
  justify-content: space-between;
}
</style>
