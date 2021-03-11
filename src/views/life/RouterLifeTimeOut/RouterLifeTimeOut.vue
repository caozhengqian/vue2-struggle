<template>
  <div class="RouterLifeTimeOut">
    <p>RouterLifeTimeOut</p>
    <p>
      跳转后，延迟更改的值：{{ test }},<span class="blue">不会刷新页面</span>
    </p>
    <button @click="_routerTest"><span class="blue">跳转路由</span></button>
    <Son6 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import { home } from "../../../api/request";
import Son6 from "./Son6";
export default {
  components: {
    Son6
  },
  name: "RouterLifeTimeOut",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      test: "111"
    };
  },
  watch: {
    test: function(newVal, oldVal) {
      console.info("old-test=", oldVal);
      console.info("new-test=", newVal);
    }
  },
  beforeCreate() {
    console.log(`%cFather-->1、beforeCreate`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->1、beforeCreate`, "color:#FF9797");
    });
  },
  created() {
    console.log(`%cFather-->2、created`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->2、created`, "color:#FF9797");
    });
  },
  beforeMount() {
    console.log(`%cFather-->3、beforeMount`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->3、beforeMount`, "color:#FF9797");
    });
  },
  mounted() {
    console.log(`%cFather-->4、mounted`, "color:#FF9797");
    home(2000).then(() => {
      this.test = "222";
      console.log(`%c延迟Father-->4、mounted`, "color:#FF9797");
    });
  },
  beforeUpdate() {
    console.log(`%cFather-->5、beforeUpdate`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->5、beforeUpdate`, "color:#FF9797");
    });
  },
  updated() {
    console.log(`%cFather-->6、updated`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->6、updated`, "color:#FF9797");
    });
  },
  beforeDestroy() {
    console.log(`%cFather-->7、beforeDestroy`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->7、beforeDestroy`, "color:#FF9797");
    });
  },
  destroyed() {
    console.log(`%cFather-->8、destroyed`, "color:#FF9797");
    home(2000).then(() => {
      console.log(`%c延迟Father-->8、destroyed`, "color:#FF9797");
    });
  },
  methods: {
    _routerTest() {
      this.$router.push({ name: "testRouterTimeOut" });
    }
  }
};
</script>

<style lang="less" scoped>
.RouterLifeTimeOut {
}
</style>
