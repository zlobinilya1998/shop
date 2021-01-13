<template>
  <v-row justify="center">
    <v-dialog v-model="getDialog.show" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">
          {{ getDialog.header }}
        </v-card-title>
        <v-card-text>{{ getDialog.text }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="showDialog">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row></template
>

<script>
export default {
  name: `ItemAbout`,
  methods: {
    showDialog() {
      this.$store.dispatch("showDialog");
    },
    changeDialog() {
      this.$store.dispatch("changeDialog");
    },
  },
  computed: {
    getDialog() {
      return this.$store.getters.getDialog;
    },
  },
};
</script>

<style></style>
