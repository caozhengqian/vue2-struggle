<template>
  <div class="SimpleLife">
    <p>正常的渲染周期</p>
    <Son />
    <p>返回上一级，会执行destroy</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import Son from "./Son";
export default {
  components: {
    Son
  },
  name: "SimpleLife",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {};
  },

  // console.log(`%c 淡红FF9797-->beforeCreate`, "color:#FF9797");
  // console.log(`%c 红色CE0000-->beforeCreate`, "color:#CE0000");
  // console.log(`%c 深红600000-->beforeCreate`, "color:#600000");
  //
  // console.log(`%c 淡蓝afb4db-->beforeCreate`, "color:#afb4db");
  // console.log(`%c 蓝色4e72b8-->beforeCreate`, "color:#4e72b8");
  // console.log(`%c 深蓝181d4b-->beforeCreate`, "color:#181d4b");
  //
  // console.log(`%c 淡黄decb00-->beforeCreate`, "color:#decb00");
  // console.log(`%c 黄色ffe600-->beforeCreate`, "color:#FFD700");
  // console.log(`%c 深黄ffc20e-->beforeCreate`, "color:#ffc20e");
  beforeCreate() {
    console.log(`%c Father-->1、beforeCreate`, "color:#FF9797");
  },
  created() {
    console.log(`%c Father-->2、created`, "color:#FF9797");
  },
  beforeMount() {
    console.log(`%c Father-->3、beforeMount`, "color:#FF9797");
  },
  mounted() {
    console.log(`%c Father-->4、mounted`, "color:#FF9797");
  },
  beforeUpdate() {
    console.log(`%c Father-->5、beforeUpdate`, "color:#FF9797");
  },
  updated() {
    console.log(`%c Father-->6、updated`, "color:#FF9797");
  },
  beforeDestroy() {
    console.log(`%c Father-->7、beforeDestroy`, "color:#FF9797");
  },
  destroyed() {
    console.log(`%c Father-->8、destroyed`, "color:#FF9797");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.SimpleLife {
  border: 1px solid #ff9797;
}
</style>
