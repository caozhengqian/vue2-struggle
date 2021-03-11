<template>
  <div class="DataLifeNotToSon">
    <p>DataLifeNotToSon</p>
    <p>父组件的data传给子组件使用father</p>
    <button @click="_changeData"><span class="blue">不传</span>给子组件</button>
    <span>值：{{ name }}</span>
    <br />
    <button @click="_changeToSon">
      <span class="blue">传</span>给子组件，子组件不使用
    </button>
    <span>值：{{ toSon }}</span>
    <br />
    <button @click="_changeToSonUse">
      <span class="blue">传</span>给子组件，子组件在
      <span class="blue">script</span>标签中使用，
      <span class="red">子组件</span><span class="blue">不</span
      ><span class="red">更新</span>
    </button>
    <span>值：{{ toSonUse }}</span>
    <br />
    <button @click="_changeToSonUseT">
      <span class="blue">传</span>给子组件，子组件在
      <span class="blue">template</span>标签中 <span class="blue">展示</span>，
      <span class="red">子组件更新</span>
    </button>
    <span>值：{{ toSonUseT }}</span>
    <br />
    <button @click="_changeToSonUseTIf">
      <span class="blue">传</span>给子组件，子组件在
      <span class="blue">template</span>标签中
      <span class="blue">if判断</span>，
      <span class="red">子组件更新</span>
    </button>
    <span>值：{{ toSonUseTIf }}</span>
    <Son1
      :toSon="toSon"
      :toSonUse="toSonUse"
      :toSonUseT="toSonUseT"
      :toSonUseTIf="toSonUseTIf"
    />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import Son1 from "./Son1";
export default {
  components: {
    Son1
  },
  name: "DataLifeNotToSon",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      name: "name",
      toSon: "toSon",
      toSonUse: "toSonUse",
      toSonUseT: "toSonUseT",
      toSonUseTIf: "toSonUseTIf"
    };
  },
  beforeCreate() {
    console.log(`%cFather-->1、beforeCreate`, "color:#FF9797");
  },
  created() {
    console.log(`%cFather-->2、created`, "color:#FF9797");
  },
  beforeMount() {
    console.log(`%cFather-->3、beforeMount`, "color:#FF9797");
  },
  mounted() {
    console.log(`%cFather-->4、mounted`, "color:#FF9797");
  },
  beforeUpdate() {
    console.log(`%cFather-->5、beforeUpdate`, "color:#FF9797");
  },
  updated() {
    console.log(`%cFather-->6、updated`, "color:#FF9797");
  },
  beforeDestroy() {
    console.log(`%cFather-->7、beforeDestroy`, "color:#FF9797");
  },
  destroyed() {
    console.log(`%cFather-->8、destroyed`, "color:#FF9797");
  },
  methods: {
    _changeData() {
      console.clear();
      if (this.name === "name") {
        this.name = "name111";
      } else {
        this.name = "name";
      }
    },
    _changeToSon() {
      console.clear();
      if (this.toSon === "toSon") {
        this.toSon = "toSon111";
      } else {
        this.toSon = "toSon";
      }
    },
    _changeToSonUse() {
      console.clear();
      if (this.toSonUse === "toSonUse") {
        this.toSonUse = "toSonUse111";
      } else {
        this.toSonUse = "toSonUse";
      }
    },
    _changeToSonUseT() {
      console.clear();
      if (this.toSonUseT === "toSonUseT") {
        this.toSonUseT = "toSonUseT111";
      } else {
        this.toSonUseT = "toSonUseT";
      }
    },
    _changeToSonUseTIf() {
      console.clear();
      if (this.toSonUseTIf === "toSonUseTIf") {
        this.toSonUseTIf = "toSonUseTIf111";
      } else {
        this.toSonUseTIf = "toSonUseTIf";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.DataLifeNotToSon {
  border: 1px solid #ff9797;
}
</style>
