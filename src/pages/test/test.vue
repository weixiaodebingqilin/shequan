<template>
    <section>
        <iframe src="http://player.bilibili.com/player.html?aid=6117110&cid=9931722&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"> </iframe>
        <p>wwww</p>
        <iframe src="//player.bilibili.com/player.html?aid=35800108&amp;cid=62816818&amp;page=7"
                scrolling="no"
                width="100%"
                border="1"
                frameborder="no"
                framespacing="0"
                allowfullscreen="allowfullscreen"></iframe>
        <tinymce></tinymce>
    </section>
</template>
<script>
//组件
import tinymce from "@/components/Tinymce";

export default {
    name: "test",
    components: { tinymce },
    data() {
        return {};
    }
};
</script>
<style lang="less">
</style>

