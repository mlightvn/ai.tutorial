<template>
  <v-app>
    <SideBar/>
    <Header/>

    <!-- Sizes your content based upon application components -->
    <MainFrame/>

    <Footer/>
  </v-app>
</template>

<script>
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import MainFrame from './layout/MainFrame.vue';
import SideBar from './layout/SideBar.vue';
// import vuetify from '@/plugins/vuetify'

Vue.use(vuetify);

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainFrame,
    SideBar,
    // vuetify,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
