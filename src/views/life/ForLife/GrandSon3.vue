<template>
  <div class="GrandSon3">
    <p>GrandSon3</p>
    <p>{{ item }}</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  components: {},
  name: "GrandSon3",
  props: ["item"],
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log(`%c           GrandSon-->1、beforeCreate`, "color:#600000");
  },
  created() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->2、created`,
      "color:#600000"
    );
  },
  beforeMount() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->3、beforeMount`,
      "color:#600000"
    );
  },
  mounted() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->4、mounted`,
      "color:#600000"
    );
  },
  beforeUpdate() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->5、beforeUpdate`,
      "color:#600000"
    );
  },
  updated() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->6、updated`,
      "color:#600000"
    );
  },
  beforeDestroy() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->7、beforeDestroy`,
      "color:#600000"
    );
  },
  destroyed() {
    console.log(
      `%c${this.item}            GrandSon${this.item}-->8、destroyed`,
      "color:#600000"
    );
  },
  methods: {
    aa() {}
  }
};
</script>

<style lang="less" scoped>
.GrandSon3 {
  margin-left: 40px;
  border: 1px solid #600000;
}
</style>
