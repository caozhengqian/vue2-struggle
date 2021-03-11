<template>
  <div class="Son9">
    <p>Son9</p>
    <GrandSon9 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon9 from "./GrandSon9";
import { home } from "../../../api/request";
export default {
  components: {
    GrandSon9
  },
  name: "Son9",
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
    console.log(`%c       Son9-->1、beforeCreate`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->1、beforeCreate`, "color:#CE0000");
    });
  },
  created() {
    console.log(`%c       Son9-->2、created`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->2、created`, "color:#CE0000");
    });
  },
  beforeMount() {
    console.log(`%c       Son9-->3、beforeMount`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->3、beforeMount`, "color:#CE0000");
    });
  },
  mounted() {
    console.log(`%c       Son9-->4、mounted`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->4、mounted`, "color:#CE0000");
    });
  },
  beforeUpdate() {
    console.log(`%c       Son9-->5、beforeUpdate`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->5、beforeUpdate`, "color:#CE0000");
    });
  },
  updated() {
    console.log(`%c       Son9-->6、updated`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->6、updated`, "color:#CE0000");
    });
  },
  beforeDestroy() {
    console.log(`%c       Son9-->7、beforeDestroy`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->7、beforeDestroy`, "color:#CE0000");
    });
  },
  destroyed() {
    console.log(`%c       Son9-->8、destroyed`, "color:#CE0000");
    home(2000).then(() => {
      console.log(`%c延迟       Son9-->8、destroyed`, "color:#CE0000");
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son9 {
  margin-left: 40px;
  border: 1px solid #ce0000;
}
</style>
