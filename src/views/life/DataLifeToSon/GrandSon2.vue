<template>
  <div class="GrandSon1">
    <p>GrandSon1</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  components: {},
  name: "GrandSon1",
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
    console.log(`%c            GrandSon1-->1、beforeCreate`, "color:#600000");
  },
  created() {
    console.log(`%c            GrandSon1-->2、created`, "color:#600000");
  },
  beforeMount() {
    console.log(`%c            GrandSon1-->3、beforeMount`, "color:#600000");
  },
  mounted() {
    console.log(`%c            GrandSon1-->4、mounted`, "color:#600000");
  },
  beforeUpdate() {
    console.log(`%c            GrandSon1-->5、beforeUpdate`, "color:#600000");
  },
  updated() {
    console.log(`%c            GrandSon1-->6、updated`, "color:#600000");
  },
  beforeDestroy() {
    console.log(`%c            GrandSon1-->7、beforeDestroy`, "color:#600000");
  },
  destroyed() {
    console.log(`%c            GrandSon1-->8、destroyed`, "color:#600000");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.GrandSon1 {
  margin-left: 40px;
  border: 1px solid #600000;
}
</style>
