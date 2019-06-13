<template>
    <section class="popout-set-admin loadRight">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>邀请嘉宾</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <!-- 管理员 -->
                <div class="popout-main-title">
                    <span>嘉宾列表</span>
                    <div><span>3名位嘉宾</span></div>
                </div>
                <ul class="set-admin-user">
                    <li v-for="(item,index) in 3 "
                        :key="index">
                        <img src="@/assets/images/temp/header.png">
                        <font>微笑的冰欺凌</font>
                        <div>
                            <span>撤销</span>
                        </div>
                    </li>
                </ul>
                <div class="invite-button">＋ 邀请嘉宾</div>
                <p class="invite-msg">嘉宾可以免费加入圈子，生成的每个链接只能邀请一名嘉宾，最多只能邀请20名嘉宾。</p>
            </div>
        </div>
        <div class="popout-footer">
            <div class="popout-footer-button"
                 @click="cancel">确定</div>
        </div>
    </section>
</template>
<script>
export default {
    //<!-- 圈子设置-管理员设置 -->
    name: "popout-invite",
    props: {},
    data() {
        return {};
    },
    methods: {
        cancel() {
            this.$emit("close");
        }
    }
};
</script>



