<template>
  <v-app>
    <v-main>
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
