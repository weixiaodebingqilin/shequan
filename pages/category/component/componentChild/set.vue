<template>
    <section class="popout-set">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>圈子设置</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <!-- 圈子促销 -->
                <div class="popout-main-title">
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#iconwancheng"></use>
                    </svg>
                    <span>圈子促销</span>
                </div>
                <div class="main-select">
                    <div>
                        <span>原价：</span>
                        <el-input v-model="input1"
                                  placeholder="请输入内容"
                                  class="main-input"></el-input>

                    </div>
                    <div>
                        <span>现价：</span>
                        <el-input v-model="input2"
                                  placeholder="请输入内容"
                                  class="main-input"></el-input>
                    </div>
                </div>
                <!-- 分享返现 -->
                <div class="popout-main-title">
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#iconwancheng"></use>
                    </svg>
                    <span>分享返现</span>
                </div>
                <div class="main-select">
                    <div>
                        <span>比例：</span>
                        <el-select class="main-input"
                                   v-model="value"
                                   placeholder="请选择">
                            <el-option v-for="item in options"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="proportion">
                        <p>用户分享后，成功有人付费加入圈子，分享者将获得一定比例的返现</p>
                    </div>
                </div>
            </div>
            <ul class="popout-set-item">
                <li v-for="(item,index) in setItem"
                    :key="index"
                    @click="setItems(index)">
                    <div :class="setItemIndex==index?'popout-main-title active-chek':'popout-main-title'">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconwancheng"></use>
                        </svg>
                        <span>{{item.name}}</span>
                        <div>
                            <svg class="icon"
                                 aria-hidden="true">
                                <use xlink:href="#iconwancheng"></use>
                            </svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="popout-footer">
            <div class="popout-footer-button"> 确认</div>
            <div class="popout-footer-button"
                 @click="cancel">取消</div>
        </div>
    </section>
</template>
<script>
export default {
    //<!-- 圈子设置 -->
    name: "popout-set",
    props: {},
    data() {
        return {
            setItem: [
                { name: "修改圈子信息", icon: "" },
                { name: "管理员设置", icon: "" },
                { name: "圈子成员", icon: "" },
                { name: "邀请嘉宾", icon: "" }
            ],
            options: [
                {
                    value: "选项1",
                    label: "10%"
                },
                {
                    value: "选项2",
                    label: "20%"
                },
                {
                    value: "选项3",
                    label: "30%"
                },
                {
                    value: "选项4",
                    label: "40%"
                },
                {
                    value: "选项5",
                    label: "50%"
                }
            ],
            value: "20%",
            input1: "100",
            input2: "200",
            setItemIndex: -1
        };
    },
    methods: {
        setItems(index) {
            console.dir(event.currentTarget.dataset.id);
            if (index === 0) {
                console.log('ssssssssss')
                // 跳转修改圈子
                let param = this.$route.query
                console.log("param: ", param)
                this.$router.push({
                    path: "/create-circle",
                    query: {
                        cid: param.id
                    }
                })
                return
            }
            this.setItemIndex = index;

            this.$emit("on-click", {
                index: index
            });
        },
        cancel() {
            this.$emit("close");
        }
    }
};
</script>



