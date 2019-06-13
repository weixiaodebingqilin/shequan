<template>
    <section class="popout-set-admin loadRight">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>圈子成员</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <!-- 管理员 -->
                <div class="popout-main-title">
                    <span>成员列表</span>
                    <div><span>2190名成员</span></div>
                </div>

                <div class="search-result">
                    <p>管理员</p>
                    <ul class="set-admin-user">
                        <li v-for="(item,index) in 1 "
                            :key="index">
                            <img src="@/assets/images/temp/header.png">
                            <font>微笑的冰</font>
                        </li>
                    </ul>
                </div>
                <div class="search-result">
                    <p>管理员</p>
                    <ul class="set-admin-user">
                        <li v-for="(item,index) in 2 "
                            :key="index">
                            <img src="@/assets/images/temp/header.png">
                            <font>微笑的冰</font>
                        </li>
                    </ul>
                </div>
                <div class="search-result">
                    <p>管理员</p>
                    <ul class="set-admin-user">
                        <li v-for="(item,index) in 3 "
                            :key="index">
                            <img src="@/assets/images/temp/header.png">
                            <font>微笑的冰</font>
                        </li>
                    </ul>
                </div>
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
    name: "popout-member",
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
