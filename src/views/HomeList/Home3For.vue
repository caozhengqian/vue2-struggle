<template>
  <div class='Home3For'>
    <span>Home3For</span>
    <slot/>
  </div>

</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import {home} from "@/api/request";

export default {
  components: {
    //       All,
  },
  name: 'Home3For',
  props: {
    keyValue: Number
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {}
  },
  beforeCreate() {
    console.log(`%c            Home3-->beforeCreate`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>beforeCreate2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->beforeCreate接口2秒`, "color:#ffc20e");
    });
  },
  created() {
    console.log(`%c            Home3${this.keyValue}-->created`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>created2秒`, "color:#ffe600");
    }, 2000);
    home(5000).then(() => {
      console.log(`%c            Home3-------------------------->created5秒接口`, "color:#ffc20e");
    });
  },
  beforeMount() {
    console.log(`%c            Home3-->beforeMount`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>beforeMount2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->beforeMount接口2秒`, "color:#ffc20e");
    });
  },
  mounted() {
    console.log(`%c            Home3-->mounted`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>mounted2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->mounted接口2秒`, "color:#ffc20e");
    });
  },
  beforeUpdate() {
    console.log(`%c            Home3-->beforeUpdate`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>beforeUpdate2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->beforeUpdate接口2秒`, "color:#ffc20e");
    });
  },
  updated() {
    console.log(`%c            Home3-->updated`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>updated2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->updated接口2秒`, "color:#ffc20e");
    });
  },
  beforeDestroy() {
    console.log(`%c            Home3-->beforeDestroy`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>beforeDestroy2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->beforeDestroy接口2秒`, "color:#ffc20e");
    });
  },
  destroyed() {
    console.log(`%c            Home3-->destroyed`, "color:#decb00");
    setTimeout(() => {
      console.log(`%c            Home3------------>destroyed2秒`, "color:#ffe600");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c            Home3-------------------------->destroyed接口2秒`, "color:#ffc20e");
    });
  },
  methods: {
    aa() {
    },
  }

}
</script>

<style lang="less" scoped>
.Home3For {

}
</style>
