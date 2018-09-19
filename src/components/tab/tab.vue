<template>
    <div id="tab">
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/singer">歌手</router-link>
        <router-link to="/rank">排行</router-link>
        <router-link to="/search">搜索</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
    #tab
        router
            margin 0 20px
</style>