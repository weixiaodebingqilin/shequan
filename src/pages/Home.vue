<template>
    <div id="home">
        <my-header></my-header>
        <router-view />
        <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '@/pages/Home/footer.vue'
import myHeader from '@/pages/Home/header.vue'
export default {
    name: 'home',
    components: {
        myFooter,
        myHeader
    }
}
</script>
<style lang="less">
@import url('./Home/home.less');
@import url('./category/category.less');
@import url('./homework/homework.less');
@import url('./combat/combat.less');
@import url('./challenge/challenge.less');
@import url('./article/article.less');
</style>




