<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import _local from "@/mixins/local.js";
export default {
    name: "app",
    mixins: [_local],
    provide() {
        return {
            app: this
        };
    }
};
</script> 
<style>
</style>

<style lang="less">
@import url("./pages/index/index.less");
@import url("./components/publick/lazy-com/transition.less");
@import url("./components/duck/styles/index.less");
</style>

