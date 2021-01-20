<template>
  <nav class="nav">
    <v-btn
      icon
      :style="{ color: 'black' }"
      :to="item.to"
      v-for="(item, index) of items"
      :key="index"
      ><v-icon>{{ item.icon }}</v-icon></v-btn
    >

    <v-text-field
      class="mx-2 pa-0"
      v-model="input.text"
      label="Поиск по магазину"
      :rules="input.rules"
      hide-details="auto"
    ></v-text-field>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      input: {
        text: "",
        rules: [(value) => !!value || "Введите текст"],
      },
      items: [
        { name: "Домой", icon: "mdi-home", to: "/" },
        { name: "Товары", icon: "mdi-shopping", to: "/shop" },
        { name: "Корзина", icon: "mdi-basket", to: "/basket" },
      ],
    };
  },
  methods: {
    mounted() {
      this.getHumans();
    },
  },
  components: {},
};
</script>

<style scoped>
.nav {
  display: flex;
  min-width: 15%;
  width: 50%;
}
</style>
