<template>
  <div class="home">
    <button @click="toLife">生命周期</button>
    <button @click="howToIntegral">样式</button>
    <button @click="toFamily">族谱</button>

<!--    <Home1 />-->
  </div>
</template>

<script>
// import Home1 from "./HomeList/Home1";

export default {
  name: "Home",
  components: {
    // Home1
  },
  data() {
    return {
      test: "test111"
    };
  },
  methods: {
    howToIntegral() {
      console.log(`%c ${window}`, "color:red");
      this.$router.push({ name: "About" });
    },
    toLife() {
      console.log(`%c ${window}`, "color:red");
      this.$router.push({ name: "lifeRouters" });
    },
    toFamily() {
      console.log(`%c ${window}`, "color:red");
      this.$router.push({ name: "familyRouters" });
    }
  }
};
</script>
