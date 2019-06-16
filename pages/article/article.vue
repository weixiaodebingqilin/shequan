<template>
    <div id="articles">
        <section class="article-main">
            <!-- 文章左侧内容 -->
            <article-left></article-left>
            <!-- 文章右侧内容 -->
            <article-right></article-right>
        </section>

    </div>
</template>
<script>



import articleRight from './component/article-right'
import articleLeft from './component/article-left'

export default {
    name: 'articles',
    components: {
        articleRight,
        articleLeft,

    },



}
</script>
