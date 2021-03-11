<template>
  <div class="Son">
    <p>Son</p>
    <button @click="_cFatherData">
      <span class="blue">改变</span>
      父组件的data
      <span class="blue">父组件未在template</span>
      上使用 父组件<span class="red">不更新</span>
    </button>
    <br />
    <button @click="_cFatherDataTem">
      <span class="blue">改变</span>
      父组件的data
      <span class="blue">父组件在template</span>
      上使用 父组件<span class="red">更新</span>
    </button>
    <GrandSon />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon from "./GrandSon";
export default {
  components: {
    GrandSon
  },
  name: "Son",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log(`%c       Son-->1、beforeCreate`, "color:#CE0000");
  },
  created() {
    console.log(`%c       Son-->2、created`, "color:#CE0000");
  },
  beforeMount() {
    console.log(`%c       Son-->3、beforeMount`, "color:#CE0000");
  },
  mounted() {
    console.log(`%c       Son-->4、mounted`, "color:#CE0000");
  },
  beforeUpdate() {
    console.log(`%c       Son-->5、beforeUpdate`, "color:#CE0000");
  },
  updated() {
    console.log(`%c       Son-->6、updated`, "color:#CE0000");
  },
  beforeDestroy() {
    console.log(`%c       Son-->7、beforeDestroy`, "color:#CE0000");
  },
  destroyed() {
    console.log(`%c       Son-->8、destroyed`, "color:#CE0000");
  },
  methods: {
    _cFatherData() {
      this.$emit("update:fatherDataF", "bbb");
    },
    _cFatherDataTem() {
      this.$emit("update:fatherDataTemplateF", "ddd");
    }
  }
};
</script>

<style lang="less" scoped>
.Son {
  margin-left: 40px;
  border: 1px solid #ce0000;
}
</style>
