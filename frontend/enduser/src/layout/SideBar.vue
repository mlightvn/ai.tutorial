<template>
  <v-navigation-drawer app permanent class="side-bar">
    <v-list-item two-line>
      <v-list-item-avatar>
        <img :src="require('@/assets/profile.jpg')">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="title">
          AI Tutorials
        </v-list-item-title>
        <v-list-item-subtitle>
          Self-studied
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >

      <v-list-item
        link
        to="home"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        no-action
        prepend-icon="mdi-format-list-bulleted-square"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Machine Learning</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(item, i) in tutorials"
          :key="i"
          link
          :to="item.to"
        >

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>

        </v-list-item>
      </v-list-group>

      <v-list-group
        no-action
        sub-group
        v-if="false"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Actions</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(item, i) in cruds"
          :key="i"
          link
        >

          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>

        </v-list-item>
      </v-list-group>


      <v-list-item
        link
        to="about"
      >
        <v-list-item-icon>
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-icon>

        <v-list-item-title>About</v-list-item-title>
      </v-list-item>

<!--
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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
 -->

    </v-list>

    <template v-slot:append v-if="false">
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>

    <AdsSideBar />

  </v-navigation-drawer>
</template>

<script>
import AdsSideBar from '@/views/ads/SideBar';

export default {
  components: {
    AdsSideBar,
  },

  data() {
    return {
      items: [
        // { title: 'Dashboard', icon: 'mdi-view-dashboard', to: "home" },
        { title: 'Home', icon: 'mdi-home', to: "home" },
        { title: 'About', icon: 'mdi-account-box', to: "about" },
      ],
      tutorials:[
        { icon: 'mdi-check-circle', to: "/tutorials/chapter-01", title: 'Bài 1. Linear Regression (Hồi Quy Tuyến Tính)' },
        { icon: 'mdi-check-circle', to: "/tutorials/chapter-02", title: 'Bài 2. ...' },
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
