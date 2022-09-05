<template>
    <el-container style="height: 100vh; ">
        <el-aside class="no-scroll" width="200px" style="background-color:rgb(50, 64, 87) ;">
            <el-menu  :default-active="$store.state.pathNow" :default-openeds="[$store.state.menuFather]">
                <NavLeft :tableList="tableList"></NavLeft>
            </el-menu>
        </el-aside>
        <MainR></MainR>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
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
    // 一旦main页的路由切换了就会dispatch这里就能坚挺到
    @Watch('$store.state.pathNow')
    onc(v:string,d:any){
        console.log(d,'1231');
        this.$store.commit('menuPath','/'+v.split('/')[1])
    }
    public now:string
    public tableList: any = []
    mounted() {
        axios.get(`http://localhost:3009/Menus`).then((res: any) => {
            this.tableList = res.data
        })
        // console.log(this.$store,'sssss');
    }
}
</script>
<style lang="scss" scoped>
.el-aside {
    color: #333;
}
</style>