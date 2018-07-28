<template>
  <div id="main">
        <!--轮播图-->
        <mt-swipe :auto="4000" class="swipe">
          <mt-swipe-item><img src="../../static/images/主页轮播图/1.png"></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/主页轮播图/2.jpeg"></mt-swipe-item>
          <mt-swipe-item><img src="../../static/images/主页轮播图/3.jpg"></mt-swipe-item>
        </mt-swipe>
        <LinkChoices style="padding-top: 1rem"></LinkChoices>
        <MoiveIntro></MoiveIntro>
        <p style="border-bottom: 1px solid rgba(0,0,0,.3);height: 25px;margin-left: 3px;margin-right: 5px"></p>
        <TravelIntro></TravelIntro>
        <p style="border-bottom: 1px solid rgba(0,0,0,.3);height: 25px;margin-left: 3px;margin-right: 5px"></p>
        <LogIntro></LogIntro>

  </div>
</template>

<script>
import MoiveIntro from './public/MovieIntro'
import TravelIntro from './public/TravelIntro'
import LogIntro from './public/LogIntro'
import LinkChoices from './public/LinkChoices'
    export default {
      components:{
        MoiveIntro,
        TravelIntro,
        LogIntro,
        LinkChoices
      },
      data(){
        return{

        }
      }
    }
</script>

<style scoped>
  .swipe{
    height: 200px;
    width: 100%;
  }
  .swipe img{
    height: 100%;
    width: 100%;
  }

</style>
