<template>
    <div>
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item >{{aa}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue} from 'vue-property-decorator';

    @Component
export default class extends Vue {
    public Cru=''
  
    get aa(){
        // 定义面包屑导航
        let obj1={
            '/data':'数据管理',
            '/chartuserschart':'图表',
            '/edit':'富文本',
            '/setting':'设置',
            '/info':'说明'
        }
        for(var i in obj1){
            // console.log(i,'iiii');
            if(this.$route.fullPath.indexOf(i)>-1){
            this.Cru=obj1[i]
        }
        }
        return this.Cru
    }

    }
    
</script>

<style scoped>
</style>