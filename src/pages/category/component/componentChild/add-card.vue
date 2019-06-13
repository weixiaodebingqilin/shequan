<template>
    <section class="popout-add-card loadRight">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>添加奖励</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <div class="main-select">
                    <div>
                        <span>奖励名称：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>

                    </div>
                    <div>
                        <span>打卡天数：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>
                    </div>
                    <div>
                        <span>开始时间：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>
                        <!-- <el-date-picker class="main-input"
                                        type="date"
                                        placeholder="选择日期">
                        </el-date-picker> -->

                    </div>
                    <div>
                        <span>截止时间：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>
                        <!-- <el-date-picker class="main-input"
                                        type="date"
                                        placeholder="选择日期">
                        </el-date-picker> -->
                    </div>
                    <div>
                        <el-radio v-model="radio"
                                  class="add-card-radio"
                                  label="1">网络资源</el-radio>
                        <el-radio v-model="radio"
                                  class="add-card-radio"
                                  label="2">上传附件</el-radio>
                    </div>
                    <div>
                        <span>网络地址：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>
                    </div>
                    <div>
                        <span>本地上传：</span>
                        <el-input placeholder="请输入内容"
                                  class="main-input"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="popout-footer">
            <div class="popout-footer-button"> 确认</div>
        </div>
    </section>
</template>
<script>
export default {
    //添加奖励
    name: "popout-add-card",
    props: {},
    data() {
        return {
            radio: "1"
        };
    },
    methods: {
        cancel() {
            this.$emit("close");
        }
    }
};
</script>



