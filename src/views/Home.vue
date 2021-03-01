<template>
  <div class="home">
    <button @click="toLife">生命周期</button>
    <button @click="howToIntegral">样式</button>

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
      this.$router.push({ name: "About" });
    },
    toLife() {
      this.$router.push({ name: "lifeRouters" });
    },
    toFamily() {
      this.$router.push({ name: "familyRouters" });
    }
  }
};
</script>
