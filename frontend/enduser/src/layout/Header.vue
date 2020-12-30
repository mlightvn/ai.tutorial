<template>
  <v-app-bar app dense absolute class="header">
    <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>

    <v-toolbar-title v-if="false">Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon v-if="false">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon v-if="false">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-btn icon
      href="https://www.paypal.com/paypalme/rakujin"
      target="_blank"
      color="primary"
    >
      <v-icon>mdi-coffee</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
