<template>
  <div class="Son">
    <p>Son</p>
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
  created() {},
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son {
}
</style>
