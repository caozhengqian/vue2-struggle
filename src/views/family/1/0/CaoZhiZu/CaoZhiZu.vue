<template>
  <div class='CaoZhiZu'>
    <div class="left">
      <a-steps direction="vertical" size="small" :current="100">
        <a-step title="上学" description="1968年---1984年--初中毕业" />
        <a-step title="学徒" description="1984年---1985年--木匠学徒" />
        <a-step title="大庆" description="1987年---1991年--支援大庆" />
        <a-step title="支援上海" description="1991年---1993年--支援上海" />
        <a-step title="做生意" description="1994年---1997年--上海水产生意" />
        <a-step title="装潢" description="1997年---2008年--装潢" />
        <a-step title="立模" description="2008年---2021年--立模" />

      </a-steps>
    </div>
    <div class="middle">
      <p class="one-life">年终总结</p>
      <video style="width:300px;height:450px" controls=""  name="media"><source src="./video/caozhizu.mp4" type="video/mp4"></video>
      <p class="one-life">一生技术总结教程（待开发）</p>
    </div>
    <div class="right">
      <span class="nian">1991年</span>
      <div>
        <img class="imgs" src="./img/1991/1.jpg"/>
        <img class="imgs" src="./img/1991/2.jpg"/>
        <img class="imgs" src="./img/1991/3.jpg"/>
        <img class="imgs" src="./img/1991/4.jpg"/>
      </div>
      <span class="nian">1993年</span>
      <div>
        <img class="imgs" src="./img/1993/1.jpg"/>
        <img class="imgs" src="./img/1993/2.jpg"/>
      </div>
      <span class="nian">1998年</span>
      <div>
        <img class="imgs" src="./img/1998/1.jpg"/>
        <img class="imgs" src="./img/1998/2.jpg"/>
        <img class="imgs" src="./img/1998/3.jpg"/>
        <img class="imgs" src="./img/1998/4.jpg"/>
        <img class="imgs" src="./img/1998/5.jpg"/>
        <img class="imgs" src="./img/1998/6.jpg"/>
      </div>
      <span class="nian">1999年</span>
      <div>
        <img class="imgs" src="./img/1999/1.jpg"/>
        <img class="imgs" src="./img/1999/2.jpg"/>
        <img class="imgs" src="./img/1999/3.jpg"/>
      </div>
      <span class="nian">2003年</span>
      <div>
        <img class="imgs" src="./img/2003/2.jpg"/>
        <img class="imgs" src="./img/2003/3.jpg"/>
        <img class="imgs" src="./img/2003/4.jpg"/>
        <img class="imgs" src="./img/2003/5.jpg"/>
        <img class="imgs" src="./img/2003/6.jpg"/>
        <img class="imgs" src="./img/2003/7.jpg"/>
        <img class="imgs" src="./img/2003/8.jpg"/>
        <img class="imgs" src="./img/2003/9.jpg"/>
        <img class="imgs" src="./img/2003/10.jpg"/>
        <img class="imgs" src="./img/2003/11.jpg"/>
        <img class="imgs" src="./img/2003/12.jpg"/>
        <img class="imgs" src="./img/2003/13.jpg"/>
      </div>
      <span class="nian">2016年</span>
      <div>
        <img class="imgs" src="./img/2016/1.jpg"/>
      </div>
      <span class="nian">2017年</span>
      <div>
      暂无
      </div>
      <span class="nian">2018年</span>
      <div>
        暂无
      </div>
      <span class="nian">2019年</span>
      <div>
        暂无
      </div>
      <span class="nian">2020年</span>
      <div>
        暂无
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
  name: 'CaoZhiZu',
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
.CaoZhiZu {
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
