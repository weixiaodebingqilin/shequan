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
                <!-- 左侧tab -->
                <ul class="my-navTab">
                    <li v-for="(item,index) in navTab"
                        :key="index"
                        @click="navTabs(index,$event)"
                        data-index="index"
                        :class="{'my-navTab-active':index===navTabIndex}">{{item.name}}</li>
                </ul>
            </div>
            <div class="main-right">
                <!-- 二级Tab -->
                <table-native v-if="this.navTab[this.navTabIndex]['native']"
                              :clounms="this.navTab[this.navTabIndex]['native']"
                              @tableMoveIndex="kindMove"
                              :initIndex='kindIndex'
                              ref="lineNavs"></table-native>

                <!-- 我的关注 -->
                <section v-if="navTabIndex===0"
                         class="loadUp">

                </section>

                <!-- 我的创作 -->
                <section v-if="navTabIndex===1"
                         class="loadUp">
                    <!-- 我的创作->文章 -->
                    <div v-if="kindIndex===0">
                        <category-wrap :showTitle="false"></category-wrap>
                    </div>

                </section>

                <!-- 我的加入 -->
                <section v-if="navTabIndex===2"
                         class="loadUp">
                    <!-- 我的加入->主题圈 -->
                    <div v-if="kindIndex===0">
                        <join-item v-for="(item,index) in 5"
                                   :key="index"
                                   :showImg="index>2?false:true"></join-item>
                    </div>
                    <!-- 我的加入->实战训练 -->
                    <div v-if="kindIndex===1">
                        <combat-item v-for="(item,index) in 3"
                                     :key="index"></combat-item>
                    </div>
                </section>

                <!-- 我的作业 -->
                <section v-if="navTabIndex===3"
                         class="loadUp">
                    <!-- 我的作业->训练 -->
                    <div v-if="kindIndex===0">
                        <homework-item v-for="(item,index) in 3"
                                       :key="index"></homework-item>
                    </div>
                    <!-- 我的作业->问答 -->
                    <div v-if="kindIndex===1">
                        <homework-ask v-for="(item,index) in 3"
                                      :key="index"></homework-ask>
                    </div>
                </section>

                <!-- 系统消息 -->
                <section v-if="navTabIndex===4"
                         class="loadUp">
                    <!-- 系统消息->全部通知 -->
                    <div v-if="kindIndex===0">
                        <messages-item v-for="(item,index) in 3"
                                       :key="index"></messages-item>
                    </div>
                </section>
                <!-- 阅读记录 -->
                <section v-if="navTabIndex===5"
                         class="loadUp">
                    <!-- 阅读记录-- -->
                    <div v-if="kindIndex===0">
                        <article-item v-for="(item,index) in 3"
                                      :key="index"></article-item>
                    </div>
                </section>
                <!-- 我的评论 -->
                <section v-if="navTabIndex===6"
                         class="loadUp">
                    <!-- 我的评论->文章 -->
                    <div v-if="kindIndex===0">
                        <article-item v-for="(item,index) in 3"
                                      :key="index"></article-item>
                    </div>
                    <!-- 我的评论->主题圈 -->
                    <div v-if="kindIndex===1">
                        <article-item v-for="(item,index) in 3"
                                      :key="index"></article-item>
                    </div>
                </section>
                <!-- 我的收藏 -->
                <section v-if="navTabIndex===7"
                         class="loadUp">
                    <!-- 我的收藏-- -->
                    <div v-if="kindIndex===0">
                        <article-item v-for="(item,index) in 3"
                                      :key="index"></article-item>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
import categoryWrap from "@/components/molecule/wrap";
import { setTimeout } from "timers";
import joinItem from "./component/join-item"; //我加入的--主题圈
import combatItem from "./component/combat-item"; //我加入的--实战训练
import homeworkItem from "./component/homework-item"; //我的作业--训练
import homeworkAsk from "./component/homework-ask"; //我的作业--问答
import messagesItem from "./component/messages-item"; //系统消息--全部通知
import articleItem from "./component/article-item"; //我的评论--文章
export default {
    name: "information",
    components: {
        tableNative: atomy.tableNative,
        authorWrap: molecule.authorWrap,
        categoryWrap: categoryWrap,
        joinItem,
        combatItem,
        homeworkItem,
        homeworkAsk,
        messagesItem,
        articleItem
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

            navTabIndex: 1
        };
    },
    // 组件的生命周期
    created() {},
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
            const line = this.$refs.lineNavs;
            setTimeout(() => line.setStyle(0, line.$refs.dd[0]), 20); // 赋值渲染是个异步过程， 所以要个setTimout
        }
    }
};
</script>



