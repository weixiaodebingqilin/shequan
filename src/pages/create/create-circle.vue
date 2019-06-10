<template>
    <div class="create-circle">
        <h3>创建主题圈</h3>
        <form>
            <!-- 主题圈名 -->
            <!-- <div class="crtcircle-name">
                <input type="text"
                       placeholder="请输入主题圈名（每月仅能修改两次）" />
            </div> -->
            <!-- 上传封面 -->
            <!-- <div class="crtcircle-cover">
                <div></div>
                <dl>
                    <dt>上传封面，它将会在圈子主页、圈子封面展示</dt>
                    <dd>建议尺寸 2560x616，支持3MB内的PNG、JPG</dd>
                </dl>
            </div> -->
            <!-- 主题圈介绍 -->
            <!-- <div class="crtcircle-introduce">
                <input type="text"
                       placeholder="主题圈介绍..." />
                <p>200</p>
            </div> -->
            <!-- 加入费用 -->
            <!-- <div class="crtcircle-cost">
                加入费用：￥<input type="text"
                       placeholder="50-2000" /> /年
            </div> -->
            <!-- 有效期 -->
            <div class="crtcircle-term">
                <dk-switch-group :value="termValues"
                                 @onChange='onChange'>
                    <dk-switch v-for="(item,i) in termText"
                               :key="item.text"
                               :class="{active: termValues[i]}">
                        <template slot="text">
                            {{item.text}}
                        </template>
                    </dk-switch>
                </dk-switch-group>
                <section>
                    <dl>
                        <dt>有效期：</dt>
                        <dd>2019／05／28 至 2020／05/28</dd>
                    </dl>
                    <p>成功创建后，可更改为“加入之日往后计算一年”模式</p>
                </section>
            </div>
            <!-- 规则 -->
            <!-- <div class="crtcircle-rule">
                <dk-switch @click="crtRule">
                    <template slot="text">
                        我已阅读并同意<span>《设圈主题圈规则》</span>
                    </template>
                </dk-switch>
            </div> -->
            <!-- 提交 -->
            <ul>
                <li>取消</li>
                <li @click="createNow">立即创建</li>
            </ul>
        </form>
    </div>
</template>
<script>
import { createTopic, getMyTopic, getTopicList } from "@/api/topic.js";

export default {
    name: "create-circle",
    data() {
        return {
            termValues: [false, true],
            termText: [
                {
                    text: "加入之后计算一年",
                    value: "1"
                },
                {
                    text: "固定时间开始计算",
                    value: "2"
                }
            ]
        };
    },
    mounted() {
        this.getMyTopic();
        this.getTopicList();
    },
    methods: {
        getMyTopic() {
            let userId = "1135212201683062784";
            getMyTopic(userId).then(res => {
                console.log("getMyTopicres: ", res);
            });
        },
        getTopicList() {
            let _data = {
                page: 1,
                size: 10,
                searchMap: {}
            };
            getTopicList(_data).then(res => {
                console.log("getTopicListres: ", res);
            });
        },
        onChange(value) {
            console.log("value: ", value);
        },
        crtRule(value) {
            console.log("value: ", value);
        },
        createNow() {
            console.log("ssss: ");
            let now = new Date();
            let end = +now + 24 * 60 * 60 * 1000;
            let _data = {
                title: "第一个主题圈",
                coverUrl: "//img.cdn.shequanpro.com/cookie-1560012464021.png",
                intro: "这是我的第一个主题圈",
                cost: 200,
                userId: "1135212201683062784",
                startTime: +now,
                endTime: end
                // endTime: new Date(end)
            };
            createTopic(_data).then(res => {
                console.log("res: ", res);
            });
        }
    }
};
</script>
<style lang="less">
.create-circle {
}
</style>

