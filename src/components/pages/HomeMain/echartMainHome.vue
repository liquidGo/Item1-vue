<template>
  <div>
    <div class="ec" id="myCharts" ref="myCharts"></div>
    <div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, } from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment';
import * as echarts from 'echarts'
@Component
export default class extends Vue {
  // 为了表图而定义的变量
  public day7={
    u:[],
    a:[],
    o:[]
  }
  
  // 当天的时间
  public dateDay = ''

  public userRegister=[]
  public userAdmin=[]
  public userOrder=[]
  public date=[]


  public getData(){

    
    
    // 遍历出这三个的图表数据
    // 用户
    this.$store.state.pro.u.forEach((value:any)=>{
      this.userRegister.push(value.length)
    })
    this.userRegister=this.userRegister.reverse()
    // 管理员
    this.$store.state.pro.a.forEach((value:any)=>{
      this.userAdmin.push(value.length)
    })
    this.userAdmin=this.userAdmin.reverse()
    // // 新商品
    this.$store.state.pro.o.forEach((value:any)=>{
      this.userOrder.push(value.length)
    })
    this.userOrder=this.userOrder.reverse()
      
    
      var chartDom = document.getElementById('myCharts');
      var myChart = echarts.init(chartDom);
      var option:any;

option = {
  title: {
    text: '走势图'
  },
  // tooltip: {
  //   trigger: 'axis'
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['新注册用户', '新增订单', '新增管理']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: this.date
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '新注册用户',
      type: 'line',
      stack: 'Total',
      data: this.userRegister,
      //  data: [0, 0, 0, 0, 0, 230, 0],
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },

    },
    {
      name: '新增订单',
      type: 'line',
      stack: 'Total',
      data:this.userOrder,
      // data:[0, 0, 0, 0, 0, 330, 0],
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    },

    {
      name: '新增管理',
      type: 'line',
      stack: 'Total',
      data: this.userAdmin,
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    }
  ]
};


option && myChart.setOption(option);
    

  }
  mounted() {
    this.dateDay = moment().format('YYYYMMDD')
    
    this.date=[Number(this.dateDay)-6,Number(this.dateDay)-5,Number(this.dateDay)-4,Number(this.dateDay)-3,Number(this.dateDay)-2,Number(this.dateDay)-1,Number(this.dateDay)-0]

      for(var i=0;i<7;i++){
        axios.get(`http://localhost:3009/users?date=${Number(this.dateDay)-i}`).then(res=>{
          this.day7.u.push(res.data)
        })
        axios.get(`http://localhost:3009/admins?date=${Number(this.dateDay)-i}`).then(res=>{
          this.day7.a.push(res.data)
        })
        axios.get(`http://localhost:3009/order?date=${Number(this.dateDay)-i}`).then(res=>{
          this.day7.o.push(res.data)
        })
    }
    // 每次调用子组件这里的数据都进行了刷新，在这里dispatch
    
        this.$store.dispatch('update',this.day7)

      
  }
  created() {
          setTimeout(() => {
          this.getData()
          }, 800);
  }

  }


</script>

<style lang="scss" scoped>
.ec {
  width: 100%;
  height: 450px;
}
</style>
