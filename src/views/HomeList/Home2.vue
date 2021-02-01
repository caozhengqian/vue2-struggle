<template>
  <div class="Home2">
    <p>Home2</p>
    <Home3For
        v-for="(item, index) in forlist"
        :key="item"
        :keyValue="index"
      >
      {{item}}
    </Home3For>
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Home3For from "@/views/HomeList/Home3For";


import {home} from "@/api/request";

export default {
  components: {
    Home3For
  },
  name: "Home2",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      forlist:[0,1,2]
    };
  },

  beforeCreate() {
    console.log(`%c      Home2-->beforeCreate`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>beforeCreate2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->beforeCreate接口2秒`, "color:#181d4b");
    });
  },
  created() {
    console.log(`%c      Home2-->created`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>created2秒`, "color:#4e72b8");
    }, 2000);
    home(5000).then(() => {
      console.log(`%c      Home2-------------------------->created5秒接口`, "color:#181d4b");
    });
  },
  beforeMount() {
    console.log(`%c      Home2-->beforeMount`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>beforeMount2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->beforeMount接口2秒`, "color:#181d4b");
    });
  },
  mounted() {
    this.forlist = [3,4,5,6,7,8,9]
    console.log(`%c      Home2-->mounted`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>mounted2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->mounted接口2秒`, "color:#181d4b");
    });
  },
  beforeUpdate() {
    console.log(`%c      Home2-->beforeUpdate`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>beforeUpdate2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->beforeUpdate接口2秒`, "color:#181d4b");
    });
  },
  updated() {
    console.log(`%c      Home2-->updated`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>updated2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->updated接口2秒`, "color:#181d4b");
    });
  },
  beforeDestroy() {
    console.log(`%c      Home2-->beforeDestroy`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>beforeDestroy2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->beforeDestroy接口2秒`, "color:#181d4b");
    });
  },
  destroyed() {
    console.log(`%c      Home2-->destroyed`, "color:#afb4db");
    setTimeout(() => {
      console.log(`%c      Home2------------>destroyed2秒`, "color:#4e72b8");
    }, 2000);
    home(2000).then(() => {
      console.log(`%c      Home2-------------------------->destroyed接口2秒`, "color:#181d4b");
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Home2 {
}
</style>
