<template>
  <div id="app">
    <Cheader></Cheader>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>
<script>
  import Cheader from './components/c-header/c-header'
 import Tab from './components/tab/tab';
  export default {
    components: {
        Cheader,
        Tab
    }
  }
</script>

<style scoped lang="stylus">
    #app
      color oldlace
</style>
