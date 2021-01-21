<template>
  <div>
    <div class="d-flex justify-center flex-wrap pa-0">
      <Loader v-if="products == null" />
      <ItemCard
        class="itemCard"
        v-for="(product, index) of itemsToShow"
        :key="`Product #${index}`"
        :product="product"
        :changeDialog="changeDialog"
        :addProduct="addProduct"
      />
      <v-container
        v-if="products !== null"
        class="d-flex justify-center align-center"
      >
        <v-btn
          @mouseenter="activeBtn.prev = true"
          @mouseleave="activeBtn.prev = false"
          class="btn"
          :disabled="currentPage <= 0"
          @click="currentPage--"
        >
          <v-icon :class="{ activeBtn: activeBtn.prev }"
            >mdi-page-previous</v-icon
          >
          Назад
        </v-btn>
        <v-btn
          @mouseenter="activeBtn.next = true"
          @mouseleave="activeBtn.next = false"
          class="btn"
          :disabled="showBtn"
          @click="currentPage++"
          >Вперед
          <v-icon :class="{ activeBtn: activeBtn.next }">mdi-page-next</v-icon>
        </v-btn>
      </v-container>
    </div>

    <!-- <h3 v-else-if="filterProducts.length == 0">
      Совпадений по вашему запросу не найдено.
    </h3> -->

    <!-- <Items
      v-else
      :products="filterProducts"
      :changeDialog="changeDialog"
      :addProduct="addProduct"
    /> -->
    <ItemAbout />
  </div>
</template>

<script>
import Loader from "../shop/Loader";
import ItemAbout from "../shop/ItemAbout";
import ItemCard from "../shop/ItemCard";
// import Items from "./Items.vue";
export default {
  name: "Shop",
  components: {
    Loader,
    ItemAbout,
    ItemCard,
    // Items,
  },
  data() {
    return {
      activeBtn: {
        prev: false,
        next: false,
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
      (async () => {
        let res = await fetch("https://fakestoreapi.com/products?limit=25");
        let json = await res.json();
        this.products = await json;
      })();
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
      return f();
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
