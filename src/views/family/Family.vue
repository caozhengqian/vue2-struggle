<template>
  <div class='Family'>
    <div class="four">
      <div class="left-two">

      </div>
      <div class="right-two">
        <div><img @click="toCaoWangShi" class="img line-one-left" src="./0/0/CaoWangShi/img/caowangshi.png"/></div>
        <div><img @click="toZhengShiJun" class="img line-one-right" src="./0/1/ZhengShiJun/img/zhengshijun.png"/></div>
      </div>
    </div>
    <div class="four">
      <div class="left-two">

      </div>
      <div class="right-two">
        <div class="line-div"><div class="line-y"></div></div>
        <div class="line-div"><div class="line-y"></div></div>
      </div>
    </div>
    <div class="four">
      <div class="left-two bottom-style">
        <div><img @click="toWangPinXiang" class="img line-one-left" src="./1/1/WangPinXiang/img/wangpinxiang.jpg"/></div>
        <div><img @click="toXiaoLinMei" class="img line-one-left" src="./1/1/XiaoLinMei/img/xiaolinmei.jpg"/></div>
     </div>
      <div class="right-two bottom-style">
        <div><img @click="toCaoZhiZu" class="img line-one-left" src="./1/0/CaoZhiZu/img/caozhizu.jpg"/></div>
        <div><img @click="toZhengXingCheng" class="img line-one-right" src="./1/0/ZhengXingCheng/img/zhengxingcheng.png"/></div>
      </div>
    </div>
    <div class="two">
      <div class="two-div ">
        <div class="line-div"><div class="line-y"></div></div>
        <div class="line-div"><div class="line-y"></div></div> </div>
    </div>
    <div class="two">
      <div class="two-div bottom-style">
        <div><img @click="toWangHuaLan" class="img line-one-left" src="./2/WangHuaLan/img/wanghualan.jpg"/></div>
        <div><img @click="toCaoZhengQian" class="img line-one-left" src="./2/CaoZhengQian/img/caozhengqian.jpg"/></div>
      </div>
    </div>
    <div class="one">
      <div class="one-div ">
        <div class="line-div"><div class="line-y"></div></div>
      </div>
    </div>
    <div class="two ">
      <div class="two-div top-style">
        <div><img @click="toCaoYiKai" class="img line-one-left" src="./3/0/CaoYiKai/img/caoyikai.jpg"/></div>
        <div><img @click="toCaoYiJia" class="img line-one-left" src="./3/1/CaoYiJia/img/caoyijia.jpg"/></div>
      </div>
    </div>
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
    toZhengShiJun() {
      this.$router.push({ name: "zhengshijun" });
    },
    toCaoZhiZu() {
      this.$router.push({ name: "caozhizu" });
    },
    toZhengXingCheng() {
      this.$router.push({ name: "zhengxingcheng" });
    },
    toWangPinXiang() {
      this.$router.push({ name: "wangpinxiang" });
    },
    toXiaoLinMei() {
      this.$router.push({ name: "xiaolinmei" });
    },
    toCaoZhengQian() {
      this.$router.push({ name: "caozhengqian" });
    },
    toWangHuaLan() {
      this.$router.push({ name: "wanghualan" });
    },
    toCaoYiKai() {
      this.$router.push({ name: "caoyikai" });
    },
    toCaoYiJia() {
      this.$router.push({ name: "caoyijia" });
    },
  }

}
</script>

<style lang="less" scoped>
.Family {
  padding:20px;
  .four{
    display: flex;
    flex-direction: row; //column
    justify-content: space-between; //flex-start、 flex-end、space-between、space-around
    align-items: center; //flex-start、flex-end
  }
  .left-two{
    width:45%;
    display: flex;
    flex-direction: row; //column
    justify-content: space-between; //flex-start、 flex-end、space-between、space-around
    align-items: center; //flex-start、flex-end
  }
  .bottom-style{
    border-bottom: 1px solid red;
  }
  .top-style{
    border-top: 1px solid red;
  }
  .right-two{
    width:45%;
    display: flex;
    flex-direction: row; //column
    justify-content: space-between; //flex-start、 flex-end、space-between、space-around
    align-items: center; //flex-start、flex-end
  }
  .img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor:pointer;
  }
  .line-div{
    width:200px;
    display: flex;
    flex-direction: row; //column
    justify-content: center; //flex-start、 flex-end、space-between、space-around
    align-items: center; //flex-start、flex-end
    .line-y{
      width:10px;
      height: 50px;
      background: goldenrod;
    }
  }
  .two{
    display: flex;
    flex-direction: row; //column
    justify-content: center; //flex-start、
    .two-div{
      width:60%;
      display: flex;
      flex-direction: row; //column
      justify-content: space-between; //flex-start、 flex-end、space-between、space-around
      align-items: center; //flex-start、flex-end
      .two-one{
        width:45%;
        display: flex;
        flex-direction: row; //column
        justify-content: center; //flex-start、 flex-end、space-between、space-around
        align-items: center; //flex-start、flex-end
      }
      .right-two{
        width:45%;
      }
    }

  }
  .one{
    display: flex;
    flex-direction: row; //column
    justify-content: center; //flex-start、 flex-end、space-between、space-around
    align-items: center; //flex-start、flex-end
  }

}
</style>
