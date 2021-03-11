<template>
  <div class="GrandSon9">
    <p>GrandSon9</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import { home } from "../../../api/request";
export default {
  components: {},
  name: "GrandSon9",
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
    console.log(`%c            GrandSon9-->1、beforeCreate`, "color:#600000");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon9-->1、beforeCreate`,
        "color:#600000"
      );
    });
  },
  created() {
    console.log(`%c            GrandSon9-->2、created`, "color:#600000");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon9-->2、created`, "color:#600000");
    });
  },
  beforeMount() {
    console.log(`%c            GrandSon9-->3、beforeMount`, "color:#600000");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon9-->3、beforeMount`,
        "color:#600000"
      );
    });
  },
  mounted() {
    console.log(`%c            GrandSon9-->4、mounted`, "color:#600000");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon9-->4、mounted`, "color:#600000");
    });
  },
  beforeUpdate() {
    console.log(`%c            GrandSon9-->5、beforeUpdate`, "color:#600000");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon9-->5、beforeUpdate`,
        "color:#600000"
      );
    });
  },
  updated() {
    console.log(`%c            GrandSon9-->6、updated`, "color:#600000");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon9-->6、updated`, "color:#600000");
    });
  },
  beforeDestroy() {
    console.log(`%c            GrandSon9-->7、beforeDestroy`, "color:#600000");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon9-->7、beforeDestroy`,
        "color:#600000"
      );
    });
  },
  destroyed() {
    console.log(`%c            GrandSon9-->8、destroyed`, "color:#600000");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon9-->8、destroyed`,
        "color:#600000"
      );
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.GrandSon9 {
  margin-left: 40px;
  border: 1px solid #600000;
}
</style>
