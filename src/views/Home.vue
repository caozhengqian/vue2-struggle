<template>
  <div class="home">
    <button @click="howToIntegral">aaa</button>
    <Home1 />
  </div>
</template>

<script>
import Home1 from "./HomeList/Home1";

export default {
  name: "Home",
  components: {
    Home1
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
    }
  }
};
</script>
