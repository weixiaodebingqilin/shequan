<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import _local from '@/utils/local/localStorage.js'
export default {
    name: 'app',
    mixins: [_local],
    provide() {
        return {
            app: this
        }
    }
}
</script> 
<style>
</style>

<style lang="less">
@import url("./pages/index/index.less");
@import url("./components/publick/lazy-com/transition.less");
</style>

