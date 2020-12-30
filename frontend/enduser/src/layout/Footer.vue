<template>
  <v-footer app class="footer">
    <span
      v-for="(item, i) in items"
      :key="i"
    >
      <v-btn icon dense v-if="item.href" :href="item.href" target="_blank">
        <v-icon v-if="item.icon">{{item.icon}}</v-icon>
      </v-btn>
    </span>



  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
  data: () =>{
    return {
      items:[
        { text: 'GitHub', icon: 'mdi-github', href:"https://github.com/namtenten" },
        { text: 'Donate', icon: 'mdi-coffee', href:"https://www.paypal.com/paypalme/rakujin" },
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
