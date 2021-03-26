<template>
  <div class="Life">
    <!--    正常渲染-->
    <button @click="_simpleLife">
      <span class="red">正常渲染</span>的生命周期
    </button>
    <br />
    <br />
    <!--    data改变对组件的影响-->
    父<span class="red">data改变</span>
    <button @click="_dataLifeNotToSon">
      <span class="blue">传/不传</span>给子组件
    </button>
    <br />
    <br />
    <!--    子组件更新父组件-->
    <button @click="_sonChangeFather">
      <span class="blue">子组件</span><span class="red">更新</span
      ><span class="blue">父组件</span>
    </button>
    <br />
    <br />
    <!--    路由跳转和组件卸载的生命周期-->
    <span class="blue">路由跳转</span>后的
    <button @click="_routerLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="_routerLifetTimeOut">
      <span class="green">接口延迟</span>是否继续等待返回？
    </button>
    <br />
    <span class="red">组件卸载后</span>的
    <button @click="_unComLife">
      <span class="green">生命周期</span>
    </button>
    <span>、</span>
    <button @click="_unComLifeTimeOut">
      <span class="green">接口延迟</span>是否继续等待返回？
    </button>
    <br />
    <br />
    <!--    循环后的生命周期-->
    <button @click="_forLife"><span class="red">循环后</span>的生命周期</button>
    <br />
    <br />
    <button @click="_stopLife">
      <span class="red">await中断</span>生命周期</button
    >、
    <button @click="_noStopLife">
      <span class="red">不中断</span>生命周期
    </button>
    <br />
    <br />
    <button @click="_vuexRouter">
      <span class="red">vuex</span>影响生命周期
    </button>
    <br />
    <br />
    <button @click="_bigObjRouter">
      <span class="red">大对象</span>影响生命周期
    </button>
    <br />
    <br />
    <button @click="_nextTickRouter">
      <span class="red">nextTick</span>什么时候执行
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
    _simpleLife() {
      this.$router.push({ name: "simpleLife" });
    },
    _dataLifeNotToSon() {
      this.$router.push({ name: "dataLifeNotToSon" });
    },
    _dataLifeToSon() {
      this.$router.push({ name: "dataLifeToSon" });
    },
    _sonChangeFather() {
      this.$router.push({ name: "sonChangeFather" });
    },
    _routerLife() {
      this.$router.push({ name: "routerLife" });
    },
    _routerLifetTimeOut() {
      this.$router.push({ name: "routerLifeTimeOut" });
    },
    _unComLife() {
      this.$router.push({ name: "unComLife" });
    },
    _unComLifeTimeOut() {
      this.$router.push({ name: "unComLifeTimeOut" });
    },
    _forLife() {
      this.$router.push({ name: "forLife" });
    },
    _stopLife() {
      this.$router.push({ name: "stopLife" });
    },
    _noStopLife() {
      this.$router.push({ name: "noStopLife" });
    },
    _vuexRouter() {
      this.$router.push({ name: "vuexRouter" });
    },
    _bigObjRouter() {
      this.$router.push({ name: "bigObjRouter" });
    },
    _nextTickRouter() {
      this.$router.push({ name: "nextTickRouter" });
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
