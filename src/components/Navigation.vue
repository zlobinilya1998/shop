<template>
  <nav class="nav">
    <v-btn
      icon
      :style="{ color: 'black' }"
      :to="item.to"
      v-for="(item, index) of items"
      :key="index"
      ><v-icon class="icon">{{ item.icon }}</v-icon></v-btn
    >
    <v-text-field
      class="mx-2 pa-0"
      v-model="input.text"
      label="Поиск по магазину"
      hide-details="auto"
    >
      /></v-text-field
    >
    <transition name="fade">
      <v-icon
        class="closeButton"
        @click="input.text = ''"
        v-if="input.text !== ''"
        >mdi-close-circle</v-icon
      >
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      input: {
        text: "",
      },
      items: [
        { name: "Домой", icon: "mdi-home", to: "/" },
        { name: "Товары", icon: "mdi-shopping", to: "/shop" },
        { name: "Корзина", icon: "mdi-basket", to: "/basket" },
      ],
    };
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.closeButton {
  position: absolute !important;
  right: 0.5rem;
  top: 0.4rem;
}
.closeButton:hover {
  color: #f66161 !important;
}
.v-btn--active .icon {
  color: #ffffff !important;
}
.nav {
  position: relative;
  display: flex;
  min-width: 15%;
  width: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
