<template>
  <div class="RouterLife">
    <p>RouterLife</p>
    <p>father</p>
    <button @click="_routerTest"><span class="blue">跳转路由</span></button>
    <Son5 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son5 from "./Son5";
export default {
  components: {
    Son5
  },
  name: "RouterLife",
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
    _routerTest() {
      this.$router.push({ name: "testRouter" });
    }
  }
};
</script>

<style lang="less" scoped>
.RouterLife {
}
</style>
