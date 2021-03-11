<template>
  <div class="Son8">
    <p>Son8</p>
    <GrandSon8 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon8 from "./GrandSon8";
export default {
  components: {
    GrandSon8
  },
  name: "Son8",
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
    console.log(`%c       Son8-->1、beforeCreate`, "color:#CE0000");
  },
  created() {
    console.log(`%c       Son8-->2、created`, "color:#CE0000");
  },
  beforeMount() {
    console.log(`%c       Son8-->3、beforeMount`, "color:#CE0000");
  },
  mounted() {
    console.log(`%c       Son8-->4、mounted`, "color:#CE0000");
  },
  beforeUpdate() {
    console.log(`%c       Son8-->5、beforeUpdate`, "color:#CE0000");
  },
  updated() {
    console.log(`%c       Son8-->6、updated`, "color:#CE0000");
  },
  beforeDestroy() {
    console.log(`%c       Son8-->7、beforeDestroy`, "color:#CE0000");
  },
  destroyed() {
    console.log(`%c       Son8-->8、destroyed`, "color:#CE0000");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son8 {
  margin-left: 40px;
  border: 1px solid #ce0000;
}
</style>
