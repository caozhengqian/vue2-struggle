<template>
  <div class="UnComLifeTimeOut">
    <p>UnComLifeTimeOut</p>
    <button @click="_cIsShow"><span class="blue">切换组件</span></button>
    <Son9 v-if="isShow" />
    <Son11 v-else />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son9 from "./Son9";
import Son11 from "./Son11";
import { home } from "../../../api/request";
export default {
  components: {
    Son9,
    Son11
  },
  name: "UnComLifeTimeOut",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      isShow: true
    };
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
    _cIsShow() {
      if (this.isShow === true) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.UnComLifeTimeOut {
}
</style>
