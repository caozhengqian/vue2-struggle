<template>
  <div class="Life">
    <!--    正常渲染-->
    <button @click="toSimpleLife">
      <span class="red">正常渲染</span>的生命周期
    </button>
    <br />
    <br />
    <!--    data改变对组件的影响-->
    父<span class="red">data改变</span>
    <button @click="toFuzisunLife">
      <span class="blue">不传</span>给子组件
    </button>
    <span>、</span>
    <button @click="toFuzisunLife"><span class="blue">传</span>给子组件</button>
    <br />
    <br />
    <!--    子组件更新父组件-->
    <button @click="toFuzisunLife">
      <span class="blue">子组件</span><span class="red">更新</span
      ><span class="blue">父组件</span>
    </button>
    <br />
    <br />
    <!--    路由跳转和组件卸载的生命周期-->
    <span class="blue">路由跳转</span>后的
    <button @click="toFuzisunLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="toFuzisunLife">
      <span class="green">接口延迟</span>是否继续等待返回？
    </button>
    <br />
    <span class="red">组件卸载后</span>的
    <button @click="toFuzisunLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="toFuzisunLife">
      <span class="green">接口延迟</span>是否继续等待返回？
    </button>
    <br />
    <br />
    <!--    循环后的生命周期-->
    <button @click="toFuzisunLife">
      <span class="red">循环后</span>的生命周期
    </button>
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
  padding: 20px;
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
