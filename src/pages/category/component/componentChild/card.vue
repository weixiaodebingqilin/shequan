<template>
    <section class="popout-card">
        <div class="popout-title">
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#iconwancheng"></use>
            </svg>
            <span>打卡奖励</span>
        </div>
        <div class="popout-body">
            <div class="popout-main">
                <!-- 管理员 -->
                <div class="popout-main-title">
                    <span>奖励列表</span>
                    <div><span>+添加奖励</span></div>
                </div>
                <div class="main-table">
                    <table>
                        <colgroup>
                            <col style="width:237px;">
                            <col>
                            <col>
                            <col>
                            <col>
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>奖励名称</th>
                                <th>打卡天数</th>
                                <th>开始时间</th>
                                <th>截止时间</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in 7"
                                :key="index">
                                <td>
                                    <div>
                                        <span>AE动效fodl插件汉化版</span>
                                    </div>
                                </td>
                                <td>7</td>
                                <td>2019/06/12</td>
                                <td>2019/06/30</td>
                                <td>未开始</td>
                                <td>
                                    <svg class="icon"
                                         aria-hidden="true">
                                        <use xlink:href="#iconlianjie"></use>
                                    </svg>
                                    <svg class="icon"
                                         aria-hidden="true">
                                        <use xlink:href="#iconshanchu"></use>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="popout-footer">
            <div class="popout-footer-button"> 确认</div>
            <div class="popout-footer-button">取消</div>
        </div>
    </section>
</template>
<script>
export default {
    //打卡奖励
    name: "popout-card",
    props: {},
    data() {
        return {};
    },
    methods: {}
};
</script>



