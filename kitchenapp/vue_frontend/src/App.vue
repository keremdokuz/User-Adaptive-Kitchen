<template>
  <v-app>
    <v-main :style="{ background: $vuetify.theme.themes['light'].background }">
      <AppBase/>
    </v-main>
  </v-app>
</template>

<script>
import AppBase from './components/AppBase';

export default {
  name: 'App',

  components: {
    AppBase,
  },

  data: () => ({
    //
  }),
};
</script>
