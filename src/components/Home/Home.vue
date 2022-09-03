<template>
    <el-container style="height: 100vh; ">
        <el-aside class="no-scroll" width="200px" style="background-color:rgb(50, 64, 87) ;">
            <el-menu :default-openeds="['1', '3']">
                <NavLeft :tableList="tableList"></NavLeft>
            </el-menu>
        </el-aside>
        <MainR></MainR>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import NavLeft from '../pages/NavLeft.vue'
import MainR from '../pages/Main.vue'
@Component({
    components: {
        NavLeft,
        MainR
    }
})
export default class Home extends Vue {
    public tableList: any = []
    mounted() {
        axios.get(`http://localhost:3000/Menus`).then((res: any) => {
            this.tableList = res.data
            console.log(this.tableList, 'ttt');
        })
    }
}
</script>

<style lang="scss" scoped>
.el-aside {
    color: #333;
}
</style>