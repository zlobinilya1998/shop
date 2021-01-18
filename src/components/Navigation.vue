<template>
  <v-container class="nav d-flex justify-space-between pa-0 pb-5">
    <v-card width="256" hight="260">
      <v-navigation-drawer permanent>
        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      items: [
        { name: "Домой", icon: "mdi-home", to: "/" },
        { name: "Товары", icon: "mdi-shopping", to: "/shop" },
        { name: "Корзина", icon: "mdi-basket", to: "/basket" },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
.nav {
}
.v-list-item--active {
  color: rgb(35, 135, 175) !important;
}
</style>
