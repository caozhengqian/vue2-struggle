<template>
  <div class='Life'>
    <button @click="toSimpleLife">简单的生命周期</button>
<!--    <button @click="">样式</button>-->
  </div>

</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
export default {
  components: {
    //       All,
  },
  name: 'Life',
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {}
  },
  created() {

  },
  methods: {
    toSimpleLife() {
      console.log(`%c ${window}`, "color:red");
      this.$router.push({ name: "simpleLife" });
    }
  }

}
</script>

<style lang="less" scoped>
.Life {

}
</style>
