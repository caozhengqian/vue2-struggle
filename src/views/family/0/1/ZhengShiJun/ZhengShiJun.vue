<template>
  <div class='ZhengShiJun'>

    <div class="left">
      <a-steps direction="vertical" size="small" :current="100">
        <a-step title="上学" description="1934年---1944年--学生" />
        <a-step title="种田" description="1944年---2021年--参加共产党革命，推翻国民党、种田" />
      </a-steps>
    </div>
    <div class="middle">
      <p class="one-life">年终总结</p>
      <video style="width:300px;height:450px" controls=""  name="media"><source src="./video/zhengshijun.mp4" type="video/mp4"></video>
      <p class="one-life">一生技术总结教程（待开发）</p>
    </div>
    <div class="right">
      <span class="nian">1997年</span>
      <div>
        <img class="imgs" src="./img/1997/1.jpg"/>
      </div>
      <span class="nian">2016年</span>
      <div>
          暂无
      </div>
      <span class="nian">2017年</span>
      <div>
        <img class="imgs" src="./img/2017/1.jpg"/>
      </div>
      <span class="nian">2018年</span>
      <div>
        <img class="imgs" src="./img/2018/1.jpg"/>
      </div>
      <span class="nian">2019年</span>
      <div>
        暂无
      </div>
      <span class="nian">2020年</span>
      <div>
        <img class="imgs" src="./img/2020/1.jpg"/>
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
  name: 'ZhengShiJun',
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
    aa() {
    },
  }

}
</script>

<style lang="less" scoped>
.ZhengShiJun {
  padding:20px;
  display: flex;
  .left{
    width:200px;
  }
  .middle{
    width:400px;
    display: flex;
    flex-direction: column; //column
    align-items: center; //flex-start、flex-end
    .one-life{
      text-align: center;
      font-size: 30px;
      color:#1890ff;
    }
  }
  .right{
    max-width:650px;
    max-height: 100vh;
    overflow:scroll;
    .imgs{
      display: inline;
      width:300px;
      height:300px;
      margin-right: 10px;

    }
    .nian{
      font-size: 40px;
      color:red;
    }
  }
}
</style>
