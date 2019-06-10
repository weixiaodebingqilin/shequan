<template>
    <section class="popout-data">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>圈子管理</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <div class="popout-main-title">
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#iconwancheng"></use>
                    </svg>
                    <span>数据分析</span>
                    <div>
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconwancheng"></use>
                        </svg>
                        <span>导出</span>
                    </div>
                </div>
                <div class="main-table">
                    <table>
                        <colgroup>
                            <col style="width:174px;">
                            <col>
                            <col>
                            <col>
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>日期</th>
                                <th>新增成员</th>
                                <th>活跃成员</th>
                                <th>互动成员</th>
                                <th>新增动态</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in 7"
                                :key="index">
                                <td>
                                    <div>
                                        <span>2019/05/30</span>
                                        <font>今日</font>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>895</td>
                                <td>369</td>
                                <td>2035</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="popout-main-title">
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#iconwancheng"></use>
                    </svg>
                    <span>数据趋势</span>
                </div>
                <div class="main-cavans"></div>
            </div>
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
    //<!-- 圈子数据（管理） -->
    name: "popout-data",
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



