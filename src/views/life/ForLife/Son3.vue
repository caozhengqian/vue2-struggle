<template>
  <div class="Son3">
    <p>Son3</p>
    <GrandSon3 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon3 from "./GrandSon3";
export default {
  components: {
    GrandSon3
  },
  name: "Son3",
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
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son3 {
  margin-left: 40px;
  border: 1px solid #ce0000;
}
</style>
