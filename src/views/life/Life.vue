<template>
  <div class="Life">
    <p>简单的渲染、改变生命周期</p>
    <button @click="toSimpleLife">渲染的生命周期</button>
    <button @click="toFuzisunLife">父改变，子孙周期</button>
    <p>接口延迟</p>
    <button @click="toFuzisunLife">父接口延迟改变，</button>
    <button @click="toFuzisunLife">父接口延迟，</button>
    <p>子组件让父组件更新</p>
    <button @click="toFuzisunLife">父接口延迟改变，</button>
    <button @click="toFuzisunLife">父接口延迟，</button>
    <p>子组件让父组件延迟更新</p>
    <button @click="toFuzisunLife">父接口延迟改变，</button>
    <button @click="toFuzisunLife">父接口延迟，</button>
    <!--    <button @click="">样式</button>-->
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
export default {
  components: {
    //       All,
  },
  name: "Life",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toSimpleLife() {
      console.log(`%c ${window}`, "color:red");
      this.$router.push({ name: "simpleLife" });
    },
    toFuzisunLife() {
      this.$router.push({ name: "fuzisunLife" });
    }
  }
};
</script>

<style lang="less" scoped>
.Life {
}
</style>
