<template>
    <div id="category-item">
        <div class="category-wrap">
            <img class="category-banner"
                 src="@/assets/images/temp/challenge-banner.png" />
            <section>
                <div class="category-item-title">
                    <h5>精选设计入门主题圈</h5>
                    <span>查看更多</span>
                </div>
                <index-category></index-category>
            </section>
            <section class="category-wrap">
                <div class="category-item-title">
                    <h5>进阶提升设计认知专栏</h5>
                    <span>查看更多</span>
                </div>
                <index-category></index-category>
            </section>
        </div>
    </div>
</template>
<script>
import indexCategory from "@/components/molecule/category";
export default {
    name: "category-item",
    components: {
        indexCategory
    },
    data() {
        return {
            maskShow: false
        };
    },
    // 组件的生命周期
    created() {},
    // 我们要写的一些方法
    methods: {}
};
</script>
