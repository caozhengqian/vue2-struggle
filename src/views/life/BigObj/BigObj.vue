<template>
  <div class="BigObj">
    <p>BigObj</p>
    <button @click="_cStr"><span class="blue">不传</span>给子组件</button>
    <span>{{ str }}</span>
    <Son13 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son13 from "./Son13";
export default {
  components: {
    Son13
  },
  name: "BigObj",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      str: "aaa",
      list: ["a", "b"],
      obj: { aKey: "aVal", bKey: "bVal" },
      objInList: ["a", { aKey: "aVal" }],
      listInObj: { a: ["b", "c"] }
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
    _cStr() {
      // this.str === "aaa" ? (this.str = "bbb") : (this.str = "aaa");
      // this.str = this.str.substr(0, 1);
      this.str = this.str.concat("");
    }
  }
};
</script>

<style lang="less" scoped>
.BigObj {
}
</style>
