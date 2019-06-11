<template>
    <!-- 批改作业 -->
    <div id="mymine">
        <section class="mymine-topMsg">
            <div class="mymine-topMsg-header"> 
                <div class="topMsg-wrap">
                    <dl @click="navToInformation">
                        <dt><img src="@/assets/images/temp/header.png"></dt>
                        <dd>
                            <h5>微笑的冰欺凌</h5>
                            <p>唐朝资深设计师，曾主导过喵付宝，天狗等项目，商务合作请联系邮箱247870295@qq.com，或私信我的助理@绚丽的小云</p>
                        </dd>
                    </dl>
                    <ul>
                        <li>
                            <span>32</span>
                            <p>篇文章看过</p>
                        </li>
                        <li>
                            <span>32</span>
                            <p>篇文章看过</p>
                        </li>
                        <li>
                            <span>32</span>
                            <p>篇文章看过</p>
                        </li>
                        <li>
                            <span>32</span>
                            <p>篇文章看过</p>
                        </li>
                        <li>
                            <span>32</span>
                            <p>篇文章看过</p>
                        </li>
                    </ul>
                </div>
                <div class="topMsg-r">
                    <div class="lately-see-wrap">
                        <div class="lately-see-title">
                            <svg class="icon"
                                aria-hidden="true">
                                <use xlink:href="#icontuijian"></use>
                            </svg>
                            <span>最近看过</span>
                        </div>
                        <ul class="lately-see-item">
                            <li>
                                <p>如何画一个精致的图标？</p>
                                <span>10分钟前</span>
                            </li>
                            <li>
                                <p>网也设计中的10大坑－避险</p>
                                <span>昨天</span>
                            </li>
                        </ul>
                        <ul class="my-tag">
                            <li>商业插画之40天训练</li>
                            <li>ICON图标</li>
                            <li>职场经验</li>
                        </ul>
                        <!-- <div class="lately-see-footer">
                            <p>加油继续坚持，将会收获成果</p>
                        </div> -->
                    </div>
                </div>
            </div>
            
        </section>
        <div class="line-white"></div>
        <table-native :clounms="kindNative" class="main-nav"
                              @tableMoveIndex="kindMove"
                              :initIndex='kindIndex'></table-native>
        <section class="main-wrap loadUp">
            <div class="main-left " v-if="kindIndex!==0">
                <!-- 我加入的 -->
                <div class="article-push loadUp"
                     v-if="kindIndex==1">
                    <join-item v-for="(item,index) in 5"
                                     :key="index" :showImg="false"></join-item>
                </div>
                <!-- //收藏 -->
                <div class="article-push loadUp"
                     v-if="kindIndex==2">
                    <ul class="kind-box">
                        <card-artical v-for="(item,index) in 4"
                                      :key="index"></card-artical>
                    </ul>
                </div>
                

            </div>
            <!-- "练习", -->
            <div class="article-push loadUp"
                    v-if="kindIndex==0">
                <exercise></exercise>
            </div>
            <!-- <div class="main-right">
                
            </div> -->
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
import cardArtical from "@/components/molecule/card-artical.vue";
import exercise from "./component/exercise"; 
import joinItem from "./component/join-item"; //我加入的--主题圈
export default {
    name: "mymine",
    components: {
        cardArtical,
        tableNative: atomy.tableNative,
        authorWrap: molecule.authorWrap,
        exercise,
        joinItem
    },
    data() {
        return {
            kindNative: [
                "练习",
                "我加入的",
                "收藏",
                "评论",
                "文章",
                "视频"
            ], ///
            kindIndex: 2 //
        };
    },
    // 组件的生命周期
    created() {},
    // 我们要写的一些方法
    methods: {
        kindMove(index, event) {
            this.kindIndex = index;
        },
        navToInformation() {
            this.$router.push({ path: "/myInformation" });
        }
    }
};
</script>



