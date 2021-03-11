<template>
  <div class="TestRouterTimeOut">
    <p>TestRouterTimeOut</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import { home } from "../../../api/request";
export default {
  components: {
    //       All,
  },
  name: "TestRouterTimeOut",
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
    console.log(
      `%cTestRouterTimeOut的生命周期-->1、beforeCreate`,
      "color:#FF9797"
    );
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->1、beforeCreate`,
        "color:#FF9797"
      );
    });
  },
  created() {
    console.log(`%cTestRouterTimeOut的生命周期-->2、created`, "color:#FF9797");
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->2、created`,
        "color:#FF9797"
      );
    });
  },
  beforeMount() {
    console.log(
      `%cTestRouterTimeOut的生命周期-->3、beforeMount`,
      "color:#FF9797"
    );
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->3、beforeMount`,
        "color:#FF9797"
      );
    });
  },
  mounted() {
    console.log(`%cTestRouterTimeOut的生命周期-->4、mounted`, "color:#FF9797");
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->4、mounted`,
        "color:#FF9797"
      );
    });
  },
  beforeUpdate() {
    console.log(
      `%cTestRouterTimeOut的生命周期-->5、beforeUpdate`,
      "color:#FF9797"
    );
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->5、beforeUpdate`,
        "color:#FF9797"
      );
    });
  },
  updated() {
    console.log(`%cTestRouterTimeOut的生命周期-->6、updated`, "color:#FF9797");
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->6、updated`,
        "color:#FF9797"
      );
    });
  },
  beforeDestroy() {
    console.log(
      `%cTestRouterTimeOut的生命周期-->7、beforeDestroy`,
      "color:#FF9797"
    );
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->7、beforeDestroy`,
        "color:#FF9797"
      );
    });
  },
  destroyed() {
    console.log(
      `%cTestRouterTimeOut的生命周期-->8、destroyed`,
      "color:#FF9797"
    );
    home(2000).then(() => {
      console.log(
        `%c延迟TestRouterTimeOut的生命周期-->8、destroyed`,
        "color:#FF9797"
      );
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.TestRouterTimeOut {
}
</style>
