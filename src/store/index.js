import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
    shopProducts: null,
    dialog: {
      header: "",
      text: "",
      content: [],
      show: false,
    },
  },
  mutations: {
    deleteProduct: (state, index) => {
      state.basket.splice(index, 1);
    },
    addProduct: (state, product) => {
      let items = state.basket.filter((item) => item.id == product.id);
      if (items.length !== 0) {
        items[0].quantity++;
      } else {
        state.basket.push({ ...product, quantity: 1 });
      }
    },
    showDialog: (state) => {
      state.dialog.show = !state.dialog.show;
    },
    changeDialog: (state, product) => {
      let dialog = state.dialog;
      dialog.show = !dialog.show;
      dialog.header = product.title;
      dialog.text = product.description;
    },
    setProducts: (state, products) => {
      state.shopProducts = products;
    },
  },
  actions: {
    setProducts({ commit }, products) {
      commit("setProducts", products);
    },
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    deleteProduct({ commit }, index) {
      commit("deleteProduct", index);
    },
    showDialog({ commit }) {
      commit("showDialog");
    },
    changeDialog({ commit }, product) {
      commit("changeDialog", product);
    },
  },
  getters: {
    getDialog: (state) => {
      return state.dialog;
    },
    getBasket: (state) => {
      return state.basket;
    },
    getProducts: (state) => {
      return state.shopProducts;
    },
  },
});
