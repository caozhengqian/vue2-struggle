<template>
  <div class="StopLife">
    <p>StopLife</p>
    <Son7 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import { home } from "../../../api/request";
import Son7 from "./Son7";
export default {
  components: {
    Son7
  },
  name: "StopLife",
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
  async created() {
    console.log(`%c Father-->2、created await前面`, "color:#FF9797");
    await home(5000).then(() => {
      console.log(`%c await Father-->2、created`, "color:#FF9797");
    });
    console.log(`%c Father-->2、created await后面`, "color:#FF9797");
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
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.StopLife {
}
</style>
