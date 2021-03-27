<template>
  <div class="NextTick">
    <button @click="_test">
      改变test的值
    </button>
    <p ref="test">{{ test }}</p>
    <p>方法里的nextTick会先于update执行</p>
    <br />
    <button @click="_test1">改变test的值</button>
    <p ref="test1">{{ test1 }}</p>
    <p>
      当方法里改变test1的时候，dom还没有更新，所有获取dom就是老值，nextTick可以在刚方法的值渲染完了，再执行
    </p>
    <p>cTest1 nextTick:{{ cTest1 }}</p>
    <p>cTest2:{{ cTest2 }}</p>
    <br />
    <button @click="_test2"><span class="red">延迟</span>改变test的值</button
    ><span>有延迟，nextTick就不能在dom渲染后执行了。</span>
    <p ref="test2">{{ test2 }}</p>
    <p>cTest3 nextTick:{{ cTest3 }}</p>
    <p>cTest4:{{ cTest4 }}</p>
    <br />
    <button @click="_testWatch"><span class="red">watch</span>后的值</button>
    <span>先执行watch，再执行nextTick</span>
    <p>{{ testWatch }}</p>
    watch改变的值：<span ref="testWatchChange">{{ testWatchChange }}</span>
    <p>ctestWatch1 nextTick:{{ ctestWatch1 }}</p>
    <p>ctestWatch2:{{ ctestWatch2 }}</p>
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
// import { home } from "../../../api/request";
export default {
  components: {
    //       All,
  },
  name: "NextTick",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  watch: {
    testWatch: function() {
      this.testWatchChange = this.testWatchChange + "a";
    }
  },
  data() {
    return {
      test: true,
      test1: true,
      test2: true,
      cTest1: "",
      cTest2: "",
      cTest3: "",
      cTest4: "",
      testWatch: true,
      ctestWatch1: "",
      ctestWatch2: "",
      testWatchChange: ""
    };
  },
  created() {
    console.log(`%cFather-->2、created`, "color:#FF9797");
    this.$nextTick(() => {
      console.log(`%c 我在created里的nextTick`, "color:red");
    });
  },
  beforeCreate() {
    console.log(`%cFather-->1、beforeCreate`, "color:#FF9797");
    this.$nextTick(() => {
      console.log(`%c 我在beforeCreate里的nextTick`, "color:red");
    });
  },
  beforeMount() {
    console.log(`%cFather-->3、beforeMount`, "color:#FF9797");
    this.$nextTick(() => {
      console.log(`%c 我在beforeMount里的nextTick`, "color:red");
    });
  },
  mounted() {
    console.log(`%cFather-->4、mounted`, "color:#FF9797");
  },
  beforeUpdate() {
    console.log(`%cFather-->5、beforeUpdate`, "color:#FF9797");
    this.$nextTick(() => {
      console.log(`%c 我在beforeUpdate的nextTick`, "color:red");
    });
  },
  updated() {
    console.log(`%cFather-->6、updated`, "color:#FF9797");
    this.$nextTick(() => {
      console.log(`%c 我在updated的nextTick`, "color:red");
    });
  },
  beforeDestroy() {
    console.log(`%cFather-->7、beforeDestroy`, "color:#FF9797");
  },
  destroyed() {
    console.log(`%cFather-->8、destroyed`, "color:#FF9797");
  },
  methods: {
    _test() {
      this.test === true ? (this.test = false) : (this.test = true);
      this.$nextTick(() => {
        console.log(`%c 我在_test的nextTick`, "color:red");
        console.log(`%c ${this.$refs.test.innerHTML}`, "color:red");
      });
    },
    _test1() {
      this.test1 === true ? (this.test1 = false) : (this.test1 = true);
      this.$nextTick(() => {
        console.log(
          `%c 我在_test1的nextTick:${this.$refs.test1.innerHTML}`,
          "color:red"
        );
        this.cTest1 = this.$refs.test1.innerHTML;
      });
      console.log(
        `%c 我不在_test1的nextTick:${this.$refs.test1.innerHTML}`,
        "color:red"
      );
      this.cTest2 = this.$refs.test1.innerHTML;
    },
    _test2() {
      setTimeout(() => {
        this.test2 === true ? (this.test2 = false) : (this.test2 = true);
      }, 2000);

      this.$nextTick(() => {
        console.log(
          `%c 我在_test1的nextTick:${this.$refs.test2.innerHTML}`,
          "color:red"
        );
        this.cTest3 = this.$refs.test2.innerHTML;
      });
      console.log(
        `%c 我不在_test1的nextTick:${this.$refs.test2.innerHTML}`,
        "color:red"
      );
      this.cTest4 = this.$refs.test2.innerHTML;
    },
    _testWatch() {
      this.testWatch === true
        ? (this.testWatch = false)
        : (this.testWatch = true);

      this.$nextTick(() => {
        console.log(
          `%c 我在_test1的nextTick:${this.$refs.testWatchChange.innerHTML}`,
          "color:red"
        );
        this.ctestWatch1 = this.$refs.testWatchChange.innerHTML;
      });
      console.log(
        `%c 我不在_test1的nextTick:${this.$refs.testWatchChange.innerHTML}`,
        "color:red"
      );
      this.ctestWatch2 = this.$refs.testWatchChange.innerHTML;
    }
  }
};
</script>

<style lang="less" scoped>
.NextTick {
}
</style>
