<template>
  <div class='CaoZhengQian'>
    <div class="left">
      <a-steps direction="vertical" size="small" :current="100">
        <a-step title="上学" description="1989年---2010年--学生" />
        <a-step title="小天鹅" description="2010年到2012年--流水线操作工" />
        <a-step title="北京赞同科技发展有限公司" description="2012年4月---2015年4月--java开发" />
        <a-step title="开饭店" description="2015年5月---2016年10月--开饭店" />
        <a-step title="上海巽力互联网科技有限公司" description="2015年5月---2017年6月--php开发" />
        <a-step title="上海博泰悦臻网络技术服务有限公司" description="2017年7月---2019年7月--前端开发" />
        <a-step title="上海复深蓝软件股份有限公司" description="2019年7月---2020年6月--前端开发" />
        <a-step title="上海德邦物流" description="2020年8月---至今--前端开发" />
      </a-steps>
    </div>
    <div class="middle">
      <p class="one-life">年终总结</p>
      <video style="width:300px;height:450px" controls=""  name="media"><source src="./video/caozhengqian.mp4" type="video/mp4"></video>
      <p class="one-life">一生技术总结教程（待开发）</p>
    </div>
    <div class="right">
      <span class="nian">1990年</span>
      <div>
        <img class="imgs" src="./img/1990/1.jpg"/>
      </div>
      <span class="nian">1991年</span>
      <div>
        <img class="imgs" src="./img/1991/1.jpg"/>
        <img class="imgs" src="./img/1991/2.jpg"/>
      </div>
      <span class="nian">1992年</span>
      <div>
        <img class="imgs" src="./img/1992/1.jpg"/>
      </div>
      <span class="nian">1993年</span>
      <div>
        <img class="imgs" src="./img/1993/1.jpg"/>
      </div>
      <span class="nian">1995年</span>
      <div>
        <img class="imgs" src="./img/1995/1.jpg"/>
        <img class="imgs" src="./img/1995/2.jpg"/>
      </div>
      <span class="nian">1996年</span>
      <div>
        <img class="imgs" src="./img/1996/1.jpg"/>
        <img class="imgs" src="./img/1996/2.jpg"/>
        <img class="imgs" src="./img/1996/3.jpg"/>
        <img class="imgs" src="./img/1996/4.jpg"/>
      </div>
      <span class="nian">1998年</span>
      <div>
        <img class="imgs" src="./img/1998/1.jpg"/>
      </div>
      <span class="nian">2009年</span>
      <div>
        <img class="imgs" src="./img/2009/1.jpg"/>
        <img class="imgs" src="./img/2009/2.jpg"/>
      </div>
      <span class="nian">2016年</span>
      <div>
        <img class="imgs" src="./img/2016/1.jpg"/>
        <img class="imgs " src="./img/2016/2.jpg"/>
      </div>
      <span class="nian">2017年</span>
      <div>
        <img class="imgs" src="./img/2017/1.jpg"/>
        <img class="imgs " src="./img/2017/2.jpg"/>
      </div>
      <span class="nian">2018年</span>
      <div>
        <img class="imgs" src="./img/2018/1.jpg"/>
        <img class="imgs " src="./img/2018/2.jpg"/>
      </div>
      <span class="nian">2019年</span>
      <div>
        <img class="imgs" src="./img/2019/1.png"/>
        <img class="imgs " src="./img/2019/2.jpg"/>
      </div>
      <span class="nian">2020年</span>
      <div>
        <img class="imgs" src="./img/2020/1.jpg"/>
        <img class="imgs " src="./img/2020/2.jpg"/>
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
  name: 'CaoZhengQian',
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
.CaoZhengQian {
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
