<template>
  <v-app>
    <SideBar/>
    <Header/>
    <MainFrame/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import MainFrame from './layout/MainFrame';
import Footer from './layout/Footer';

export default {
  name: 'App',

  components: {
    Header,
    SideBar,
    MainFrame,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
