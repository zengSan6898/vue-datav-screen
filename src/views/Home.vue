<template>
  <div class="home">
    <!-- loading通用组件 -->
    <loading v-if="loading">
      <div class="loading-text">数据大屏加载中...
      </div>
    </loading>
    <!-- 容器通用组件 -->
    <container
      :options="{width:3840,height:2160}"
      v-else>
      <!-- 头部标题以及logo -->
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <!-- 用户年龄分布 -->
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth">
            </total-user>
          </div>
          <div class="left2">
            <average-age
              :data="ageData"
              :avg-age="averageAge"/>
          </div>
          <div class="left3">
            <!-- 设备登陆 -->
            <total-device :data="deviceData">
            </total-device>
          </div>
          <div class="left4">
            <!-- 性别统计 -->
            <total-gender :data="genderData">
            </total-gender>
          </div>
          <!-- 骑手统计 -->
          <div class="left5">
            <total-rider :data="riderData">
            </total-rider>
          </div>
          <div class="left6">
            <!-- 热卖品 -->
            <hot-category :data="hotCategoryData"></hot-category>
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData"></center-header>
          </div>
          <div class="right-top2">
            <transform-category :data="['ALL','北京','上海','深圳','杭州','南京','武汉']"></transform-category>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map></order-map>
              </div>
              <div class="right-left2">
                <transform-category :data="['订单量','销售额','用户数','退单量']" :color="['rgb(178,209,126)','rgb(116,166,49)']"></transform-category>
              </div>
              <div class="right-left3">
                <fly-box starColor="rgb(251,253,142)">
                  <real-time-order :data="realTimeOrderData"></real-time-order>
                </fly-box>
              </div>
              <div class="right-left4">
                <!-- 飞线图正下方 -->
                <schedule-view :data="scheduleViewData"></schedule-view>
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData"></sales-list>
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData"></sales-rank>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import TopHeader from '@/components/TopHeader/index'
import TotalUser from '@/components/TotalUser/index'
import AverageAge from '@/components/AverageAge/index'
import TotalDevice from '@/components/TotalDevice/index'
import TotalGender from '@/components/TotalGender/index'
import TotalRider from '@/components/TotalRider/index'
import HotCategory from '@/components/HotCategory/index'
import CenterHeader from '@/components/CenterHeader/index'
import TransformCategory from '@/components/TransformCategory/index'
import SalesList from '@/components/SalesList/index'
import OrderMap from '@/components/OrderMap/index'
import RealTimeOrder from '@/components/RealTimeOrder/index'
import ScheduleView from '@/components/ScheduleView/index'
import SalesRank from '@/components/SalesRank/index'
import useScreenData from '@/hooks/useScreenData.js'
import 'echarts/lib/chart/bar'

export default {
  name: 'Home',

  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    SalesList,
    OrderMap,
    RealTimeOrder,
    ScheduleView,
    SalesRank,
    TransformCategory
  },

  setup(ctx) {
    const loading = ref(true)
    const screenData = useScreenData()

    onMounted(() => {
      // console.log('realTimeOrderData----', console.log('realTimeOrderData----', screenData.realTimeOrderData))
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    return {
      loading,
      ...screenData,
      options: {
        xAxis: {
          data: ['a', 'b', 'c', 'd']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 20, 25]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #imooc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header {
    height: 167px;
    // background: yellow;
    width: 100%;
  }
  .separator {
    height: 10px;
    background: rgb(92, 88, 89);
    width: 100%;
  }
  .center {
    flex: 1;
    // background: rebeccapurple;
    width: 100%;
    display: flex;
    .left {
      flex: 0 0 860px;
      // background: red;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;
      box-sizing: border-box;
      .left1 {
        height: 300px;
        // background: green;
      }
      .left2 {
        height: 320px;
        // background: yellowgreen;
      }
      .left3 {
        height: 280px;
        // background: blueviolet;
      }
      .left4 {
        height: 300px;
        // background: mediumpurple;
      }
      .left5 {
        height: 360px;
        // background: pink;
      }
      .left6 {
        height: 360px;
        // background: darkred;
      }
    }
    .right {
      flex: 1;
      // background: blue;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .right-top1 {
        height: 206px;
        // background: darkred;
      }
      .right-top2 {
        height: 48px;
        margin: 10px 0;
        // background: cadetblue;
      }
      .right-bottom {
        flex: 1;
        display: flex;
        padding-bottom: 20px;
        .right-left {
          display: flex;
          flex-direction: column;
          flex: 0 0 1917px;
          justify-content: space-between;
          .right-left1 {
            height: 999px;
            // background: red;
          }
          .right-left2 {
            height: 80px;
            // background: yellowgreen;
          }
          .right-left3 {
            height: 350px;
            // background: deepskyblue;
          }
          .right-left4 {
            height: 220px;
            background: orangered;
          }
        }
        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          justify-content: space-between;
          margin-right: 20px;
          .right-right1 {
            width: 100%;
            height: 999px;
            // background: burlywood;
          }
          .right-right2 {
            flex: 1;
            background: darkred;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

.loading-text {
  font-size: 20px;
  margin-top: 10px;
}
</style>
