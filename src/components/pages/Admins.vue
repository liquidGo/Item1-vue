<template>
    <div>
        <CrumbVue/>
        管理员列表

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CrumbVue from './Crumb.vue';

@Component({
    components:{
        CrumbVue
    }
})
export default class extends Vue {

}
</script>

<style scoped>
</style>