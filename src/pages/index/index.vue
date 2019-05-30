<template>
    <div id="index">
        <test></test>
        <!-- <div class="index-native">
            <ul >
                <li>加入圈子</li>
                <li>视频教程</li>
                <li>直播课</li>
                <li>求职推荐</li>
                <li>职业规划</li>
            </ul>
        </div> -->
        <section>
            <!-- 左边 -->
            <div class="warp-left">
                <!-- 轮播 -->
                <lazy-com>
                    <div class="index-swiper">
                        <img src="@/assets/images/temp/Group.png">
                    </div>
                </lazy-com>

                <!-- kind-native -->
                <table-native :clounms="kindNative"
                              @tableMoveIndex="tableMoveIndex"
                              :initIndex='kindIndex'></table-native>
                <div>
                    <index-knowledge v-if="kindIndex === 0"></index-knowledge>
                    <hot-find v-if="kindIndex === 1"></hot-find>
                    <newest-share v-if="kindIndex === 2"></newest-share>
                    <!-- <index-category v-if="kindIndex === 2"></index-category> -->
                </div>

            </div>
            <!-- 右边 -->
            <div class="warp-right">
                <!-- partner -->
                <ul class="index-partner">
                    <li>
                        <img src="@/assets/images/temp/Group20.png">
                    </li>
                </ul>
                <dl class="index-entrance">
                    <dd>
                        <img src="@/assets/images/temp/plus.png">
                        <span>分享经验</span>
                    </dd>
                    <dd>
                        <img src="@/assets/images/temp/answer.png">
                        <span>付费答疑</span>
                    </dd>
                    <dt>
                        <img src="@/assets/images/temp/Group25.png">
                    </dt>
                </dl>
                <!-- myjoin -->
                <dl class="myjoin">
                    <dt>
                        <span></span>
                        <p>我加入的</p>
                    </dt>
                    <dd>
                        <h3>专题圈</h3>
                        <ul class="right-special">
                            <li>
                                <div>
                                    <span>2</span>
                                    <h3>插画的世界-重塑你的画笔</h3>
                                    <p>刚刚</p>
                                </div>
                                <p>
                                    微笑的冰欺凌：今晚圈子答疑检查作业
                                </p>
                            </li>
                        </ul>
                    </dd>
                    <dd>
                        <h3>抗魔计划</h3>
                        <ul class="right-combat">
                            <li>
                                <h4>动效30天</h4>
                                <p><span>10</span> / 30</p>
                            </li>
                            <li>
                                <h4>动效30天</h4>
                                <p><span>10</span> / 30</p>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <!-- 推荐圈主 -->
                <dl class="right-manager">
                    <dt>
                        <img src="@/assets/images/icon/flag.png">
                        <h3>推荐圈主</h3>
                    </dt>
                    <dd>
                        <ul class="manager-list">
                            <li>
                                <img src="@/assets/images/temp/header.png">
                                <dl>
                                    <dt>彩云Sky</dt>
                                    <dd>
                                        <p>22篇文章</p>
                                        <p>40k人气</p>
                                        <span>+关注</span>
                                    </dd>
                                </dl>
                                <div class="sicon-arrow"></div>
                            </li>
                            <li>
                                <img src="@/assets/images/temp/header.png">
                                <dl>
                                    <dt>彩云Sky</dt>
                                    <dd>
                                        <p>22篇文章</p>
                                        <p>40k人气</p>
                                        <span>+关注</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                    <dt class="manager-more">更多圈主</dt>
                </dl>
                <!-- 合作伙伴2 -->
                <!-- partner -->
                <ul class="index-partner">
                    <li>
                        <img src="@/assets/images/temp/Group20.png">
                    </li>
                </ul>
                <!-- 热门标签 -->
                <dl class="hot-tags">
                    <dt>
                        <img src="@/assets/images/icon/hot-tags.png">
                        <h3>热门标签</h3>
                    </dt>
                    <dd>
                        <ul>
                            <li>交互设计</li>
                            <li>职场精英</li>
                            <li>Ps</li>
                            <li>UI</li>
                            <li>插画</li>
                            <li>动效</li>
                        </ul>
                    </dd>
                </dl>

            </div>
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import hotFind from "./component/hot-find";
import indexCategory from "@/components/molecule/category";
import newestShare from "./component/share";
import indexKnowledge from "./component/knowledge";
import { testGet } from '@/api/user.js'
export default {
    name: "index",
    components: {
        test: atomy.test,
        tableNative: atomy.tableNative,
        hotFind: hotFind,
        indexCategory: indexCategory,
        indexKnowledge: indexKnowledge,
        newestShare: newestShare
    },
    data() {
        return {
            kindNative: ["知识点", "热门发现", "最新分享", "关注的"], ///
            kindIndex: 1 //
        };
    },
    // 组件的生命周期
    created() {
        testGet().then(res => {
            console.log("resL : ", res)
        })
    },
    // 我们要写的一些方法
    methods: {
        // 导航栏切换后的回调
        tableMoveIndex(index) {
            this.kindIndex = index;
        },
        ///


    }
};
</script>


