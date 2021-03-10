<template>
  <div class="GrandSon7">
    <p>GrandSon7</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  components: {},
  name: "GrandSon7",
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
    console.log(`%c            GrandSon-->1、beforeCreate`, "color:#600000");
  },
  created() {
    console.log(`%c            GrandSon-->2、created`, "color:#600000");
  },
  beforeMount() {
    console.log(`%c            GrandSon-->3、beforeMount`, "color:#600000");
  },
  mounted() {
    console.log(`%c            GrandSon-->4、mounted`, "color:#600000");
  },
  beforeUpdate() {
    console.log(`%c            GrandSon-->5、beforeUpdate`, "color:#600000");
  },
  updated() {
    console.log(`%c            GrandSon-->6、updated`, "color:#600000");
  },
  beforeDestroy() {
    console.log(`%c            GrandSon-->7、beforeDestroy`, "color:#600000");
  },
  destroyed() {
    console.log(`%c            GrandSon-->8、destroyed`, "color:#600000");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.GrandSon7 {
  margin-left: 40px;
  border: 1px solid #600000;
}
</style>
