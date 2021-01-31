<template>
  <v-list-group no-action :value="false">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon right class="white--text"
        >mdi-account-box-multiple-outline</v-icon
        >
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text title"
        >Cadastros</v-list-item-title
        >
      </v-list-item-content>
    </template>
    <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        class="navDrop"
    >
      <v-list-item-icon>
        <v-icon class="white--text">{{ link.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title :class="link.class">{{
            link.text
          }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script>
import { links } from "./script";
export default {
  data: () => ({
    links,
  }),
};
</script>

<style></style>
