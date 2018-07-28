<template>

  <mu-container class="demo-container" style="height:40%;position: relative;max-width: 100%">
    <mu-row gutter>
      <mu-col span="12" style="position: relative;height: 2.5rem">
        <div class="biaoqian" style="height: 1.2rem;width: 0.5rem;background-color: red;display: inline-block;position: absolute;bottom: .5rem"></div>
        <h4 class="title" style="font-size: 1.1rem;display: inline-block;position: absolute;left: 1.4rem;bottom: 0.25rem">推荐电影</h4>
      </mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col span="6">
        <img src="../../../static/images/indexintroduction/侏罗纪世纪2.png" style="height: 10.4rem;width: 100%">
        <div class="desc1">
          <h5 style="color: whitesmoke;text-align: center;font-weight: bold">侏罗纪世界2</h5>
        </div>
      </mu-col>
      <mu-col span="6">
        <img src="../../../static/images/indexintroduction/我不是药神.png" style="height: 5rem;width: 100%">
        <div class="desc2">
          <h5 style="color: whitesmoke;text-align: center;font-weight: bold">我不是药神</h5>
        </div>
        <img src="../../../static/images/indexintroduction/心花路放.png" style="height: 5.05rem;width: 100%">
        <div class="desc3">
          <h5 style="color: whitesmoke;text-align: center;font-weight: bold">心花路放</h5>
        </div>
      </mu-col>
    </mu-row>
  </mu-container>
  <!--<div class="introduction">-->
    <!--<div class="intro-title" style="position: relative">-->
      <!--<div class="title-icon" style="width: 8px;height: 50%;display:inline-block;background-color: #ef4f4f;position: absolute;left: 10px;top: 13px"></div>-->
      <!--<h4 style="display: inline-block;position: absolute;left: 25px;top: 10px">推荐电影</h4>-->
    <!--</div>-->
    <!--<div class="intro-left">-->
      <!--<img src="../../../static/images/indexintroduction/侏罗纪世纪2.png">-->
      <!--<div class="intro-left-desc">-->
        <!--<h5 style="color: whitesmoke;text-align: center;font-weight: bold">侏罗纪世界2</h5>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="intro-right">-->
      <!--<div class="intro-right-top">-->
        <!--<img src="../../../static/images/indexintroduction/我不是药神.png">-->
        <!--<div class="intro-right-top-desc">-->
          <!--<h5 style="color: whitesmoke;text-align: center;font-weight: bold">我不是药神</h5>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="intro-right-bottom">-->
        <!--<img src="../../../static/images/indexintroduction/心花路放.png">-->
        <!--<div class="intro-right-bottom-desc">-->
          <!--<h5 style="color: whitesmoke;text-align: center;font-weight: bold">心花路放</h5>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
    export default {
        name: "MovieIntro"
    }
</script>

<style scoped>
  /*.introduction{*/
    /*height: 200px;*/
  /*}*/
  /*.intro-title{*/
    /*height: 20%;*/
  /*}*/
  /*.intro-left{*/
    /*width: 49%;*/
    /*height: 80%;*/
    /*display: inline-block;*/
  /*}*/
  /*.intro-left{*/
    /*padding: 10px;*/
    /*position: relative;*/
  /*}*/
  /*.intro-right{*/
    /*width: 49%;*/
    /*height: 80%;*/
    /*display: inline-block;*/
  /*}*/
  /*.intro-left img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  /*.intro-left-desc{*/
    /*width: 80%;*/
    /*height: auto;*/
    /*background-color: rgba(0,0,0,.1);*/
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*left: 20px;*/
  /*}*/
  /*.intro-right-top{*/
    /*width: 100%;*/
    /*height: 48%;*/
    /*padding-right: 10px;*/
    /*padding-top: 0px;*/
    /*padding-bottom: 10px;*/
    /*position: relative;*/
  /*}*/
  /*.intro-right-top img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  /*.intro-right-top-desc{*/
    /*width: 80%;*/
    /*height: auto;*/
    /*background-color: rgba(0,0,0,.1);*/
    /*position: absolute;*/
    /*bottom: 8px;*/
    /*left: 10px;*/
  /*}*/
  /*.intro-right-bottom{*/
    /*width: 100%;*/
    /*height: 48%;*/
    /*padding-right: 10px;*/
    /*position: relative;*/
  /*}*/
  /*.intro-right-bottom img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  .desc1{
    width: 90%;
    height: auto;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    bottom: .5rem;
  }
  .desc2{
    width: 90%;
    height: auto;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    bottom: 5.7rem;
  }
  .desc3{
    width: 90%;
    height: auto;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    bottom: .3rem;
  }
</style>
