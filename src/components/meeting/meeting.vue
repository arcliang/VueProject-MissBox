<template>
  <div>
    <mu-container style="padding-top: 20px">
      <mu-text-field v-model="start" label="出发" label-float color="redA700" style="width: 100%"></mu-text-field>
      <mu-text-field v-model="end" label="到达" label-float color="redA700" style="width: 100%"></mu-text-field>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value6" label="选择日期" container="bottomSheet" label-float full-width display-color="redA700" color="redA700"></mu-date-input>
        </mu-col>
      </mu-row>
    </mu-container>
    <mu-container style="padding: 0px;margin: 0px;max-width: 100%">
      <mu-tabs :value.sync="active2" color="brown50" indicator-color="redA700" full-width>
        <mu-tab style="color: black">飞机</mu-tab>
        <mu-tab style="color: black">火车</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active2 === 0">
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <img src="../../../static/images/meet/南方航空.png" style="float: left;padding-top: 15px;padding-right: 5px;padding-right: 5px">
              <div class="content">
                <h4 style="">南方航空</h4>
                <p style="margin-bottom: 0px">起飞时间：2018-7-18 15:45</p>
                <p style="padding-left: 36px;margin-top: 0px">着陆时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥562</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
      </div>
      <div class="demo-text" v-if="active2 === 1">
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <div class="content">
                <h4 style="">D18753</h4>
                <p style="margin-bottom: 0px">开车时间：2018-7-18 15:45 </p>
                <p style="margin-top: 0px">到达时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥132</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <div class="content">
                <h4 style="">D18753</h4>
                <p style="margin-bottom: 0px">开车时间：2018-7-18 15:45 </p>
                <p style="margin-top: 0px">到达时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥132</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <div class="content">
                <h4 style="">D18753</h4>
                <p style="margin-bottom: 0px">开车时间：2018-7-18 15:45 </p>
                <p style="margin-top: 0px">到达时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥132</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
        <mu-list textline="two-line" style="">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content style="padding: 0">
              <div class="content">
                <h4 style="">D18753</h4>
                <p style="margin-bottom: 0px">开车时间：2018-7-18 15:45 </p>
                <p style="margin-top: 0px">到达时间：2018-7-18 16:45</p>
              </div>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>￥132</mu-list-item-after-text>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
      </div>
    </mu-container>
  </div>
</template>

<script>
    export default {
      name: "meeting",

      data() {
        return {
          active2: 0,
          value6: undefined,
          start:'',
          end:'',
        }
      }
    }

</script>

<style scoped>
  .demo-text {
    padding: 5px;
    background: #fff;
  }
  p {
    margin: 8px 0;
  }

</style>
