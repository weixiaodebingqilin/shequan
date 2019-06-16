<template>
    <section class="popout-set-admin loadRight">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>管理员设置</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <!-- 管理员 -->
                <div class="popout-main-title">
                    <span>管理员</span>
                    <div><span>3名管理员</span></div>
                </div>
                <ul class="set-admin-user">
                    <li v-for="(item,index) in 3 "
                        :key="index">
                        <img src="@/assets/images/temp/header.png">
                        <font>微笑的冰欺凌</font>
                        <div>
                            <span>圈主</span>
                        </div>
                    </li>
                </ul>
                <div class="admin-user-search">
                    <el-input class="user-search"
                              placeholder="请搜索想要添加的管理员昵称"
                              suffix-icon="el-icon-search"
                              v-model="input3">
                    </el-input>
                </div>
                <ul class="admin-list">
                    <li>管理员权限</li>
                    <li v-for="(item,index) in adminList"
                        :key="index">{{item}}</li>
                </ul>
                <!-- 搜索结果 -->
                <div class="search-result">
                    <p>搜索到2个结果</p>
                    <ul class="set-admin-user">
                        <li v-for="(item,index) in 3 "
                            :key="index">
                            <img src="@/assets/images/temp/header.png">
                            <font>微笑的冰<span>欺凌</span></font>
                            <div>
                                <span>设为管理员</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="popout-footer">
            <div class="popout-footer-button"
                 @click="cancel">取消</div>
        </div>
    </section>
</template>
<script>
export default {
    //<!-- 圈子设置-管理员设置 -->
    name: "popout-set-admin",
    props: {},
    data() {
        return {
            input3: "",
            adminList: [
                "删除评论",
                "禁言",
                "修改话题标签",
                "设置精选",
                "发布公告",
                "设置置顶",
                "设置打卡奖励"
            ]
        };
    },
    methods: {
        cancel() {
            this.$emit("close");
        }
    }
};
</script>



