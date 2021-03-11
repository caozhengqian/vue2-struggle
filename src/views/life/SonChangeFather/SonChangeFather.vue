<template>
  <div class="SonChangeFather">
    <p>SonChansgeFather</p>
    <p>fatrher</p>
    <Son
      :fatherDataF.sync="fatherData"
      :fatherDataTemplateF.sync="fatherDataTemplate"
    />
    <p>父组件的值：{{ fatherDataTemplate }}</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import Son from "./Son";

export default {
  components: {
    Son
  },
  name: "SonChangeFather",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  watch: {
    fatherData: function(newvalue, oldvalue) {
      console.info("old-fatherData=", oldvalue);
      console.info("new-fatherData=", newvalue);
    },
    fatherDataTemplate: function(newvalue, oldvalue) {
      console.info("old-fatherDataTemplate=", oldvalue);
      console.info("new-fatherDataTemplate=", newvalue);
    }
  },
  data() {
    return {
      fatherData: "aaa",
      fatherDataTemplate: "ccc"
    };
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
.SonChangeFather {
}
</style>
