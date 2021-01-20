<template>
  <v-container>
    <h3 class="text-center pb-5">
      {{ showBasket ? "Ваша корзина" : "Корзина пока пустая..." }}
    </h3>
    <v-divider />
    <v-simple-table :class="{ position: 'relative' }" v-if="showBasket">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Товар</th>
            <th class="text-left">Наименование</th>
            <th class="text-left">Раздел</th>
            <th class="text-left">Цена</th>
            <th class="text-left">Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getBasket" :key="product.name">
            <td>
              <v-list-item-avatar size="inherit" max-width="50" tile
                ><v-img :src="product.image" :alt="product.image"
              /></v-list-item-avatar>
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }} $</td>
            <td>{{ product.quantity }}</td>
          </tr>
        </tbody>
        <v-container>
          <span>Товаров на сумму:&nbsp;</span>
          <span class="blue lighten-4">{{ Math.ceil(getPrice) }} $</span>
        </v-container>
        <v-divider />
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Basket",
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

<style scoped></style>
