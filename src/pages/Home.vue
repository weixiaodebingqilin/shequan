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



