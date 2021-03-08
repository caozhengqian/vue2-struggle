<template>
  <div class="SonChangeFather">
    <p>SonChansgeFather</p>
    <Son />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import Son from "./Son";

export default {
  components: {
    Son
  },
  name: "SonChangeFather",
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
.SonChangeFather {
}
</style>
