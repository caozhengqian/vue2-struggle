<template>
  <div class="Life">
    <p>简单的渲染、改变</p>
    <button @click="toSimpleLife">渲染的生命周期</button>
    <button @click="toFuzisunLife">父data改变，不传给子组件</button>
    <button @click="toFuzisunLife">父data改变，传给子组件</button>
    <p>接口延迟</p>
    <button @click="toFuzisunLife">父接口延迟改变</button>
    <button @click="toFuzisunLife">父接口延迟，</button>
    <p>子组件让父组件更新</p>
    <button @click="toFuzisunLife">父接口延迟改变，</button>
    <button @click="toFuzisunLife">父接口延迟，</button>
    <p>路由跳转、组件卸载</p>
    <span class="blue">路由跳转</span>后的
    <button @click="toFuzisunLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="toFuzisunLife">
      <span class="green">接口延迟</span>是否继续？
    </button>
    <br />
    <span class="red">组件卸载后</span>的
    <button @click="toFuzisunLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="toFuzisunLife">
      <span class="green">接口延迟</span>是否继续？
    </button>
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
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .green {
    color: green;
  }
}
</style>
