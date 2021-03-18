<template>
  <div class="VuexLife">
    <p>VuexLife</p>
    {{str}}
    <Son12 />
  </div>
</template>

<script>
import { mapState } from "vuex";
//import All from "./comLife/All";
import Son12 from "./Son12";
export default {
  components: {
    Son12
  },
  name: "VuexLife",
  props: {
    //  msg: String
  },
  computed: {
    ...mapState({
      str: store => store.lifeStore.str,
    })
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log(`%cFather-->1、beforeCreate`, "color:#FF9797");
  },
  created() {
    console.log(`%cFather-->2、created`, "color:#FF9797");
  },
  beforeMount() {
    console.log(`%cFather-->3、beforeMount`, "color:#FF9797");
  },
  mounted() {
    console.log(`%cFather-->4、mounted`, "color:#FF9797");
  },
  beforeUpdate() {
    console.log(`%cFather-->5、beforeUpdate`, "color:#FF9797");
  },
  updated() {
    console.log(`%cFather-->6、updated`, "color:#FF9797");
  },
  beforeDestroy() {
    console.log(`%cFather-->7、beforeDestroy`, "color:#FF9797");
  },
  destroyed() {
    console.log(`%cFather-->8、destroyed`, "color:#FF9797");
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.VuexLife {
}
</style>
