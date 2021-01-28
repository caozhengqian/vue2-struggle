<template>
  <div class="home">
    <button @click="howToIntegral">aaa</button>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {

  },
  methods: {
    howToIntegral() {
      this.$router.push({ name: 'About' });
    }
  }
};
</script>
