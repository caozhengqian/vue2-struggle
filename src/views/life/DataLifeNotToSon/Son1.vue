<template>
  <div class="Son1">
    <p>Son1</p>
    <p>
      {{ toSonUse }}
    </p>
    <GrandSon1 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
import GrandSon1 from "./GrandSon1";
export default {
  components: {
    GrandSon1
  },
  name: "Son1",
  props: ["toSonUse"],
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      propsToSonUse: this.toSonUse
    };
  },
  beforeCreate() {
    console.log(`%c       Son1-->1、beforeCreate`, "color:#CE0000");
  },
  created() {
    console.log(`%c       Son1-->2、created`, "color:#CE0000");
  },
  beforeMount() {
    console.log(`%c       Son1-->3、beforeMount`, "color:#CE0000");
  },
  mounted() {
    console.log(`%c       Son1-->4、mounted`, "color:#CE0000");
  },
  beforeUpdate() {
    console.log(`%c       Son1-->5、beforeUpdate`, "color:#CE0000");
  },
  updated() {
    console.log(`%c       Son1-->6、updated`, "color:#CE0000");
  },
  beforeDestroy() {
    console.log(`%c       Son1-->7、beforeDestroy`, "color:#CE0000");
  },
  destroyed() {
    console.log(`%c       Son1-->8、destroyed`, "color:#CE0000");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Son1 {
  margin-left: 40px;
  border: 1px solid #ce0000;
}
</style>
