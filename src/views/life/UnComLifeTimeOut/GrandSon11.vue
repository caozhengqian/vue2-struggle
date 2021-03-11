<template>
  <div class="GrandSon11">
    <p>GrandSon11</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import { home } from "../../../api/request";
export default {
  components: {},
  name: "GrandSon11",
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
    console.log(`%c            GrandSon11-->1、beforeCreate`, "color:#181d4b");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon11-->1、beforeCreate`,
        "color:#181d4b"
      );
    });
  },
  created() {
    console.log(`%c            GrandSon11-->2、created`, "color:#181d4b");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon11-->2、created`, "color:#181d4b");
    });
  },
  beforeMount() {
    console.log(`%c            GrandSon11-->3、beforeMount`, "color:#181d4b");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon11-->3、beforeMount`,
        "color:#181d4b"
      );
    });
  },
  mounted() {
    console.log(`%c            GrandSon11-->4、mounted`, "color:#181d4b");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon11-->4、mounted`, "color:#181d4b");
    });
  },
  beforeUpdate() {
    console.log(`%c            GrandSon11-->5、beforeUpdate`, "color:#181d4b");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon11-->5、beforeUpdate`,
        "color:#181d4b"
      );
    });
  },
  updated() {
    console.log(`%c            GrandSon11-->6、updated`, "color:#181d4b");
    home(2000).then(() => {
      console.log(`%c延迟            GrandSon11-->6、updated`, "color:#181d4b");
    });
  },
  beforeDestroy() {
    console.log(`%c            GrandSon11-->7、beforeDestroy`, "color:#181d4b");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon11-->7、beforeDestroy`,
        "color:#181d4b"
      );
    });
  },
  destroyed() {
    console.log(`%c            GrandSon11-->8、destroyed`, "color:#181d4b");
    home(2000).then(() => {
      console.log(
        `%c延迟            GrandSon11-->8、destroyed`,
        "color:#181d4b"
      );
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.GrandSon11 {
  margin-left: 40px;
  border: 1px solid #181d4b;
}
</style>
