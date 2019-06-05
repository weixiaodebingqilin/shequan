<template>
    <div class="popout loadRight"
         v-if="showpopt">
        <div class="popout-shade"
             @click="showpops"></div>
        {{popoutData}}
        <!-- 圈子权限 -->
        <div class="popout-scroll">
            <!-- 圈子数据（管理） -->
            <section class="popout-data loadRight"
                     v-if="popoutData">
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
                    <div class="popout-footer-button">取消</div>
                </div>
            </section>

            <!-- 圈子设置 -->
            <section class="popout-set loadRight"
                     v-if="popoutSet">
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
                            @click="setItems(index,$event)">
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
                    <div class="popout-footer-button">取消</div>
                </div>
            </section>
            <!-- 圈子设置-管理员设置 -->
            <section class="popout-set-admin loadRight"
                     v-if="popoutAdmin">
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
                    <div class="popout-footer-button">取消</div>
                </div>
            </section>
            <!-- 打卡奖励 -->
            <section class="popout-card loadRight"
                     v-if="popoutCard">
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
                                    <col>wdnmd
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
            <!-- 添加奖励 -->
            <section class="popout-add-card loadRight"
                     v-if="popoutAward">
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
        </div>
    </div>
</template>
<script>
export default {
    name: "popout",
    props: {
        showpop: {
            type: Boolean,
            default: false
        },
        //圈子数据（管理）

        popoutData: {
            type: Boolean,
            default: false
        },
        //圈子设置
        popoutSet: {
            type: Boolean,
            default: false
        },
        //圈子设置-管理员设置
        popoutAdmin: {
            type: Boolean,
            default: false
        },
        //打卡奖励
        popoutCard: {
            type: Boolean,
            default: false
        },
        //添加奖励
        popoutAward: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showpopt: this.showpop,
            radio: "1",
            adminList: [
                "删除评论",
                "禁言",
                "修改话题标签",
                "设置精选",
                "发布公告",
                "设置置顶",
                "设置打卡奖励"
            ],
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
            input3: "",
            setItemIndex: -1
        };
    },
    methods: {
        setItems(index, event) {
            this.setItemIndex = index;
        },
        showpops() {
            this.showpopt = !this.showpopt;
        }
    }
};
</script>



