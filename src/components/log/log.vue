<template>
  <div id="log">
    <div class="mui-input-row mui-search" id="search">
      <input type="search" class="mui-input-clear" placeholder="输入要搜索的日志">
    </div>
    <div class="mui-card" v-for="item in list">
      <div class="mui-card-header mui-card-media">
        <img src="../../../static/images/头像.jpeg">
        <div class="mui-media-body">
          小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <div class="mui-card-content">
        <img width="100%" alt="" :src="'../../../static/images/log/'+item.pic">
        <div class="mui-card-content-inner" style="padding: 7px">
          <h4 style="padding-bottom: 2px">{{item.title}}</h4>
          <p style="line-height: 1.2rem">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "log",
        data(){
          return{
            list:[
              {
                title:'最佳损友',
                content:'朋友 我当你一秒朋友，朋友 我当你一世朋友，奇怪 过去再不堪回首，怀缅 时时......',
                pic:'朋友.jpg'
              },
              {
                title:'感动',
                content:'灾区的真情最感动人......',
                pic:'感动.png'
              },
              {
                title:'Love Love Love',
                content:'该怎么去形容你最贴切，拿什么跟你作比较才算特别，对你的感觉强烈....',
                pic:'爱情.jpg'
              },
              {
                title:'我的父亲',
                content:'总是向你索取 却不曾说谢谢你直到长大以后 才懂得你不容易.....',
                pic:'亲情.jpg'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  #search{
    padding-top: 5px;
    height: 40px;
  }
  .mui-card{
    padding-top: 0px;
  }
</style>
