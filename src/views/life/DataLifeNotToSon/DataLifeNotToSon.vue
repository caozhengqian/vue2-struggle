<template>
  <div class="DataLifeNotToSon">
    <p>DataLifeNotToSon</p>
    <button @click="_changeData"><span class="blue">不传</span>给子组件</button>
    <span>值：{{ name }}</span>
    <br />
    <button @click="_changeToSon">
      <span class="blue">传</span>给子组件，子组件不使用
    </button>
    <span>值：{{ toSon }}</span>
    <br />
    <button @click="_changeToSonUse">
      <span class="blue">传</span>给子组件，子组件使用
    </button>
    <span>值：{{ toSonUse }}</span>
    <Son1 :toSon="toSon" :toSonUse="toSonUse" />
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
      name: "aaa",
      toSon: "ccc",
      toSonUse: "eee"
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
      this.name === "bbb" ? (this.name = "aaa") : (this.name = "bbb");
    },
    _changeToSon() {
      this.toSon === "ccc" ? (this.toSon = "ddd") : (this.toSon = "ccc");
    },
    _changeToSonUse() {
      if (this.toSonUse === "eee") {
        this.toSonUse = "fff";
      } else {
        this.toSonUse = "eee";
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
