<template>
  <div class="BigObj">
    <p>BigObj</p>
    <button @click="_cStr">改变<span class="blue">string</span></button>
    {{ str }}
    <br />
    <br />
    <button @click="_cList1">改变<span class="blue">list</span></button>
    <span class="red">this.list = <span class="blue">["b", "c"]</span>每次都更新,虽然<span class="blue">值是一样的</span></span>
    <br />
    {{ JSON.stringify(list) }}
    <br />
    <br />
    <button @click="_cListPush">改变<span class="blue">list2</span></button>
    <span class="red"
      >this.list2.<span class="blue">push</span>('c');每次都更新</span
    >
    <br />
    {{ JSON.stringify(list2) }}
    <br />
    <br />
    <button @click="_cListReverse">
      改变<span class="blue">listReverse</span>
    </button>
    <span class="red"
      >this.list2.<span class="blue">reverse</span>;每次都更新</span
    >
    <br />
    {{ JSON.stringify(listReverse) }}
    <br />
    <br />
    <button @click="_cObj">
      改变<span class="blue">Obj</span>
    </button>
    <span class="red">
      this.obj<span class="blue">.aKey</span>='AAVal' 改变值的时候更新一次，<span class="blue">再次赋值不改变</span>
    </span>
    <br />
    {{ JSON.stringify(obj) }}
    <br />
    <br />
    <button @click="_cObj1">
      改变<span class="blue">Obj</span>
    </button>
    <span class="red">
      this.obj=<span class="blue">{ aKey: "aVal", bKey: "bVal" }</span> 每次都更新，虽然<span class="blue">值是一样的</span>
    </span>
    <br />
    {{ JSON.stringify(obj) }}
    <br />
    <br />
    <button @click="_cObjInList">
      改变<span class="blue">objInList</span>
    </button>
    <span class="red">
      this.objInList= <span class="blue">["a", { aKey: "aVal" }]</span> 每次都更新，虽然<span class="blue">值是一样的</span>
    </span>
    <br />
    {{ JSON.stringify(objInList) }}
    <br />
    <br />
    <button @click="_cListInObj">
      改变<span class="blue">listInObj</span>
    </button>
    <span class="red">
      this.listInObj= <span class="blue">{ a: ["b", "c"] }</span> 每次都更新，虽然<span class="blue">值是一样的</span>
    </span>
    <br />
    {{ JSON.stringify(listInObj) }}
    <Son13 />
  </div>
</template>

<script>
//import { mapState } from "vuex";
//import All from "./comLife/All";
import Son13 from "./Son13";
export default {
  components: {
    Son13
  },
  name: "BigObj",
  props: {
    //  msg: String
  },
  computed: {
    // ...mapState(["activityData"])
  },
  data() {
    return {
      str: "aaa",
      list: ["a", "b"],
      list2: ["a", "b"],
      listReverse: ["a", "b"],
      obj: { aKey: "aVal", bKey: "bVal" },
      objInList: ["a", { aKey: "aVal" }],
      listInObj: { a: ["b", "c"] }
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
    _cStr() {
      this.str === "aaa" ? (this.str = "bbb") : (this.str = "aaa");
    },
    _cList1() {
      this.list = ["b", "c"];
    },
    _cListPush() {
      this.list2.push("c");
    },
    _cListReverse() {
      this.listReverse.reverse();
    },
    _cObj() {
      this.obj.aKey='AAVal'
    },
    _cObj1() {
      this.obj={ aKey: "aVal", bKey: "bVal" }
    },
    _cObjInList() {
      // objInList: ["a", { aKey: "aVal" }],
      // listInObj: { a: ["b", "c"] }
      this.objInList= ["a", { aKey: "aVal" }]
    },
    _cListInObj() {
      // objInList: ["a", { aKey: "aVal" }],
      // listInObj: { a: ["b", "c"] }
      this.listInObj= { a: ["b", "c"] }
    }
  }
};
</script>

<style lang="less" scoped>
.BigObj {
}
</style>
