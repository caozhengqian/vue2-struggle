<template>
  <div class="Son10">
    <p>Son10</p>
    <GrandSon10 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon10 from "./GrandSon10";
export default {
  components: {
    GrandSon10
  },
  name: "Son10",
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
    console.log(`%c       Son10-->1、beforeCreate`, "color:#4e72b8");
  },
  created() {
    console.log(`%c       Son10-->2、created`, "color:#4e72b8");
  },
  beforeMount() {
    console.log(`%c       Son10-->3、beforeMount`, "color:#4e72b8");
  },
  mounted() {
    console.log(`%c       Son10-->4、mounted`, "color:#4e72b8");
  },
  beforeUpdate() {
    console.log(`%c       Son10-->5、beforeUpdate`, "color:#4e72b8");
  },
  updated() {
    console.log(`%c       Son10-->6、updated`, "color:#4e72b8");
  },
  beforeDestroy() {
    console.log(`%c       Son10-->7、beforeDestroy`, "color:#4e72b8");
  },
  destroyed() {
    console.log(`%c       Son10-->8、destroyed`, "color:#4e72b8");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son10 {
  margin-left: 40px;
  border: 1px solid #4e72b8;
}
</style>
