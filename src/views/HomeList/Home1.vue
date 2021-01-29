<template>
  <div class="Home1">
    <p>Home1</p>
  </div>
</template>

<script>
import { home } from "../../api/request";
export default {
  components: {
    //       All,
  },
  name: "Home1",
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
    console.log(`%c Home1-->beforeCreate`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>beforeCreate2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->beforeCreate接口2秒`, "color:#600000");
    });
  },
  created() {
    console.log(`%c Home1-->created`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>created2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->created接口3秒`, "color:#600000");
    });
  },
  beforeMount() {
    console.log(`%c Home1-->beforeMount`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>beforeMount2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->beforeMount接口2秒`, "color:#600000");
    });
  },
  mounted() {
    console.log(`%c Home1-->mounted`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>mounted2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->mounted接口2秒`, "color:#600000");
    });
  },
  beforeUpdate() {
    console.log(`%c Home1-->beforeUpdate`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>beforeUpdate2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->beforeUpdate接口2秒`, "color:#600000");
    });
  },
  updated() {
    console.log(`%c Home1-->updated`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>updated2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->updated接口2秒`, "color:#600000");
    });
  },
  beforeDestroy() {
    console.log(`%c Home1-->beforeDestroy`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>beforeDestroy2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->beforeDestroy接口2秒`, "color:#600000");
    });
  },
  destroyed() {
    console.log(`%c Home1-->destroyed`, "color:#FF9797");
    setTimeout(() => {
      console.log(`%c Home1------>destroyed2秒`, "color:#CE0000");
    }, 2000);
    home().then(() => {
      console.log(`%c Home1---------->destroyed接口2秒`, "color:#600000");
    });
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.Home1 {
}
</style>
