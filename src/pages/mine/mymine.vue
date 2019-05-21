<template>
    <!-- 批改作业 -->
    <div id="mymine">
        <section class="mymine-topMsg">
            <div class="topMsg-wrap">
                <dl>
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
        </section>
        <section class="main-wrap">
            <div class="main-left">
                <table-native :clounms="kindNative"
                              @tableMoveIndex="kindMove"
                              :initIndex='kindIndex'></table-native>

                <!-- //文章推送 -->
                <div class="article-push loadUp"
                     v-if="kindIndex==2">
                    <ul class="kind-box">
                        <card-artical v-for="(item,index) in 4"
                                      :key="index"></card-artical>
                    </ul>
                </div>

            </div>

            <div class="main-right">
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
                    <div class="lately-see-footer">
                        <p>加油继续坚持，将会收获成果</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
import cardArtical from "@/components/molecule/card-artical.vue";
export default {
    name: "mymine",
    components: {
        cardArtical,
        tableNative: atomy.tableNative,
        authorWrap: molecule.authorWrap
    },
    data() {
        return {
            kindNative: [
                "我的圈子",
                "实战训练",
                "收藏",
                "视频",
                "我的评论",
                "我的评论2"
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
        }
    }
};
</script>



