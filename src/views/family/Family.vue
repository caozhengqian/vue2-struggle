<template>
  <div class='Family'>
    <img @click="toCaoWangShi" class="img" src="./0/0/CaoWangShi/img/IMG_0531.png"/>

  </div>

</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
export default {
  components: {
    //       All,
  },
  name: 'Family',
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
    toCaoWangShi() {
      this.$router.push({ name: "caowangshi" });
    },
  }

}
</script>

<style lang="less" scoped>
.Family {
  .img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor:pointer;
  }
}
</style>
