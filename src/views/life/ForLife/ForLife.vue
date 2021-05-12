<template>
  <div class="ForLife">
    <p>ForLif2e</p>
    <button @click="_changeData">
      <span class="blue">改变列表的值</span>给子组件
    </button>
    <Son3 v-for="item in list1" :key="item" :item="item" />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son3 from "./Son3";
export default {
  components: {
    Son3
  },
  name: "ForLife",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      list1: ["a", "b"]
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
    _changeData() {
      console.log(`%c ${this.list1}`, "color:red");
      if (JSON.stringify(this.list1) === JSON.stringify(["a", "b"])) {
        this.list1 = ["b", "c"];
      } else {
        this.list1 = ["a", "b"];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.ForLife {
}
</style>
