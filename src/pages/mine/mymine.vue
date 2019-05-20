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
            </div>

            <div class="main-right">

            </div>
        </section>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
export default {
    name: "mymine",
    components: {
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
            kindIndex: 0 //
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



