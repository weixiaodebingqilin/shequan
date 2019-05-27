<template>
    <!-- 批改作业 -->
    <div id="information">
        <section class="main-wrap loadUp">
            <div class="main-left">
                <div class="my-msg">
                    <div class="my-msg-w">
                        <img src="@/assets/images/temp/header.png">
                        <h5>微笑的冰欺凌</h5>
                        <p>已在加入设圈486天，每天都在成长哦，加油！</p>
                    </div>
                    <div class="my-msg-button">分享创作</div>
                    <div class="my-msg-button my-msg-button-home">我的主页</div>
                    <div class="my-msg-button my-msg-button-author">成为圈主</div>
                </div>
                <ul class="my-navTab">
                    <li v-for="(item,index) in navTab"
                        :key="index"
                        @click="navTabs(index,$event)"
                        data-index="index"
                        :class="{'my-navTab-active':index===navTabIndex}">{{item.name}}</li>
                </ul>
            </div>
            <div class="main-right">
                <!-- 我的关注 -->
                <table-native v-if="this.navTab[this.navTabIndex]['native']"
                              :clounms="this.navTab[this.navTabIndex]['native']"
                              @tableMoveIndex="kindMove"
                              :initIndex='kindIndex'
                              ref="lineNavs"></table-native>
                <section v-if="navTabIndex===0"
                         class="loadUp">
                    <div class="main-right-wrap">
                        <card-artical v-for="(item,index) in 4"
                                      :key="index"></card-artical>
                    </div>
                </section>

                <section v-if="navTabIndex===1"
                         class="loadUp">
                    <div class="main-right-wrap">
                        <card-artical v-for="(item,index) in 4"
                                      :key="index"></card-artical>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
import cardArtical from "@/components/molecule/card-artical.vue";
import categoryWrap from "@/pages/category/component/wrap";
import { setTimeout } from 'timers';
export default {
    name: "information",
    components: {
        cardArtical,
        tableNative: atomy.tableNative,
        authorWrap: molecule.authorWrap,
        categoryWrap: categoryWrap
    },
    data() {
        return {
            kindIndex: 0, //
            navTab: [
                {
                    name: "我的关注",
                    native: ["我的关注"]
                },
                {
                    name: "我的创作",
                    native: ["文章", "视频", "草稿"]
                },
                {
                    name: "我的加入",
                    native: ["主题圈", "实战训练", "活动"]
                },
                {
                    name: "我的作业",
                    native: ["训练", "问答"]
                },
                {
                    name: "系统消息",
                    native: ["全部通知"]
                },
                {
                    name: "阅览记录",
                    native: ["阅览记录"]
                },
                {
                    name: "我的评价",
                    native: ["文章", "主题圈", "实战训练", "观点"]
                },
                {
                    name: "我的收藏",
                    native: ["全部收藏"]
                },
                {
                    name: "资料设置",
                    native: ["资料设置"]
                },
                {
                    name: "我的钱包",
                    native: ["我的钱包"]
                }
            ],

            navTabIndex: 1,
        };
    },
    // 组件的生命周期
    created() {

    },
    // 我们要写的一些方法
    methods: {
        // 横排  子级
        kindMove(index) {
            this.kindIndex = index;

        },
        // 竖排
        navTabs(index) {
            this.kindIndex = 0;
            this.navTabIndex = index;
            const line = this.$refs.lineNavs
            setTimeout(() => line.setStyle(0, line.$refs.dd[0]), 20); // 赋值渲染是个异步过程， 所以要个setTimout

        }
    }
};
</script>



