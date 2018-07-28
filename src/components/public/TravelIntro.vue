<template>
  <mu-container class="demo-container" style="margin: 0px;max-width: 100%">
    <mu-row gutter>
      <mu-col span="12" style="height: 2rem">
        <div class="intro-title" style="position: relative">
          <div class="title-icon" style="width: 8px;height: 1.2rem;display:inline-block;background-color: yellow;position: absolute;left: 0;top: 8px"></div>
          <h4 style="display: inline-block;position: absolute;left: .9rem;top: 4px">一起旅行吧</h4>
        </div>
      </mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col span="12">
        <mt-swipe :auto="0" class="swipe" :showIndicators="false">
          <mt-swipe-item>
            <div style="position: relative;width: 100%;height: 100%">
              <img src="../../../static/images/TravelIntro/1.jpg">
              <div class="desc">
                <h5 style="color: whitesmoke;text-align: center;font-weight: bold">巴厘岛浪漫双人行</h5>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div style="position: relative;width: 100%;height: 100%">
              <img src="../../../static/images/TravelIntro/2.png">
              <div class="desc">
                <h5 style="color: whitesmoke;text-align: center;font-weight: bold">舟山行，不一样的旅行</h5>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div style="position: relative;width: 100%;height: 100%">
              <img src="../../../static/images/TravelIntro/3.jpg">
              <div class="desc">
                <h5 style="color: whitesmoke;text-align: center;font-weight: bold">云南泸沽湖，无人之境</h5>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
    export default {
        name: "TravelIntro"
    }
</script>

<style scoped>
  .introduction{
    height: 200px;
  }
  .intro-title{
    height: 20%;
  }
  .swipe{
    height: 150px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .swipe img{
    height: 100%;
    width: 100%;
  }
  .desc{
    width: 100%;
    height: 20%;
    background-color: rgba(0,0,0,.4);
    position: absolute;
    bottom: 0px;
  }
</style>
