<template>
  <div class="father-box">
    <section>
      <header class="father-box-title">数据统计</header>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            style="background: #ff9800; color: #fff; font-weight: bold"
            class="b-radius"
          >
            当日数据：
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.newUserData?.length }}</span
            ><span style="color: #666">新增用户</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.newOrderData?.length }}</span
            ><span style="color: #666">新增商品</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.newAdminData?.length }}</span
            ><span style="color: #666">新增管理</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            style="background: #20a0ff; color: #fff; font-weight: bold"
            class="b-radius"
          >
            全部数据：
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.userData?.length }}</span
            ><span style="color: #666">全部用户</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.OrderData?.length }}</span
            ><span style="color: #666">全部商品</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="b-radius gray">
            <span style="font-weight: bold">{{ this.AdminData?.length }}</span
            ><span style="color: #666">全部管理</span>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import moment from 'moment'

@Component
export default class extends Vue {
  // 当天的时间
  public dateDay = ''
  // 获取到的所有用户和资料
  public userData = {}
  public OrderData = {}
  public AdminData = {}

  // 获取到今天的资料
  public newUserData = []
  public newOrderData = []
  public newAdminData = []
  mounted() {
    this.dateDay = moment().format('YYYYMMDD')

    // 全部用户
    axios.get(`http://localhost:3009/users`).then((res) => {
      this.userData = res.data
    })
    // 全部商品
    axios.get(`http://localhost:3009/order`).then((res) => {
      this.OrderData = res.data
    })
    // 全部管理
    axios.get(`http://localhost:3009/admins`).then((res) => {
      this.AdminData = res.data
    })

    // 当天的新用户
    axios
      .get(`http://localhost:3009/users?date=${this.dateDay}`)
      .then((res) => {
        this.newUserData = res.data
      })
    // 当天的新管理
    axios
      .get(`http://localhost:3009/admins?date=${this.dateDay}`)
      .then((res) => {
        this.newAdminData = res.data
      })
    // 当天的新商品
    axios
      .get(`http://localhost:3009/order?date=${this.dateDay}`)
      .then((res) => {
        this.newOrderData = res.data
      })
  }
}
</script>

<style lang="scss" scoped>
.father-box-title {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
}

.b-radius {
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  border: 1px solid #ccc;
  text-align: center;
  margin-bottom: 30px;
}

.gray {
  background-color: #e5e9f2;
}
</style>
