<template>
  <div class="Son11">
    <p>Son11</p>
    <GrandSon11 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon11 from "./GrandSon11";
import { home } from "../../../api/request";
export default {
  components: {
    GrandSon11
  },
  name: "Son11",
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
    console.log(`%c       Son11-->1、beforeCreate`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->1、beforeCreate`, "color:#4e72b8");
    });
  },
  created() {
    console.log(`%c       Son11-->2、created`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->2、created`, "color:#4e72b8");
    });
  },
  beforeMount() {
    console.log(`%c       Son11-->3、beforeMount`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->3、beforeMount`, "color:#4e72b8");
    });
  },
  mounted() {
    console.log(`%c       Son11-->4、mounted`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->4、mounted`, "color:#4e72b8");
    });
  },
  beforeUpdate() {
    console.log(`%c       Son11-->5、beforeUpdate`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->5、beforeUpdate`, "color:#4e72b8");
    });
  },
  updated() {
    console.log(`%c       Son11-->6、updated`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->6、updated`, "color:#4e72b8");
    });
  },
  beforeDestroy() {
    console.log(`%c       Son11-->7、beforeDestroy`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->7、beforeDestroy`, "color:#4e72b8");
    });
  },
  destroyed() {
    console.log(`%c       Son11-->8、destroyed`, "color:#4e72b8");
    home(2000).then(() => {
      console.log(`%c延迟       Son11-->8、destroyed`, "color:#4e72b8");
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son11 {
  margin-left: 40px;
  border: 1px solid #4e72b8;
}
</style>
