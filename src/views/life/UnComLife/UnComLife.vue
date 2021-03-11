<template>
  <div class="UnComLife">
    <p>UnComLife</p>
    <button @click="_cIsShow"><span class="blue">切换组件</span></button>
    <Son8 v-if="isShow" />
    <Son10 v-else />
    <br />
    <br />
    <br />
    <Son8 v-show="isShow" />
    <Son10 v-show="!isShow" />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son8 from "./Son8";
import Son10 from "./Son10";
export default {
  components: {
    Son8,
    Son10
  },
  name: "UnComLife",
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
.UnComLife {
}
</style>
