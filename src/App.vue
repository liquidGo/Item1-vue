<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Home from './components/Home/Home.vue';

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {
}
</script>

<style lang="stylus" scoped>
</style>