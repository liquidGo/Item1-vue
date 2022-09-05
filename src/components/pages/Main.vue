<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <span style="font-family:monospace ;" class="title-logo">左岸管理系统</span>
            <el-dropdown>
                <!-- <i class="el-icon-setting" style="margin-right: 15px"></i> -->
                <span>欢迎<span style="color:blue;font-weight: bold;"><a href="javascript:;">{{ name
                }}</a></span>进入管理系统！</span>
                <img src="../../assets/default.jpg" style="position: relative; border-radius:50%;width: 3vw;
    top: 1.4vh;" alt="">
                <el-dropdown-menu style="margin-top:-15px" slot="dropdown">
                    <router-link style="text-decoration: none;" to='/'>
                        <el-dropdown-item>首页</el-dropdown-item>
                    </router-link>
                    <div @click="exit">
                        <el-dropdown-item>退出</el-dropdown-item>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>

        </el-header>

        <el-main class="no-scroll">
            <router-view />
            <!-- <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table> -->
        </el-main>
    </el-container>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainR extends Vue {
    public name = ''
    exit() {
        // console.log('123123');
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token')
            history.go(0)
        }
    }
    mounted() {
        let n = localStorage.getItem('token')
        this.name = n
    }
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.title-logo {
    float: left;
    font-size: 30px;
}
</style>