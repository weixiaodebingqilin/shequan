<template>
    <div id="category-item">
        <div class="category-wrap">
            <img class="category-banner"
                 src="@/assets/images/temp/banner.png" />
            <section>
                <div class="category-item-title">
                    <h5>精选设计入门主题圈</h5>
                    <span>查看更多</span>
                </div>
                <index-category v-if="list[0]"
                                :list='list'></index-category>
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
import { getTopicList } from "@/api/topic.js";
export default {
    name: "category-item",
    components: {
        indexCategory
    },
    data() {
        return {
            maskShow: false,
            list: []
        };
    },
    // 组件的生命周期
    created() {
        this.getTopicList()
    },
    // 我们要写的一些方法
    methods: {
        getTopicList() {
            let _data = {
                page: 1,
                size: 6,
                searchMap: {}
            };
            getTopicList(_data).then(res => {


                if (res.data.data) {

                    this.list = res.data.data.rows
                    console.log("list: ", this.list);
                }
            });
        },
    }
};
</script>
