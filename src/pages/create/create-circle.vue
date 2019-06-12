<template>
    <div class="create-circle">
        <h3>创建主题圈</h3>
        <form v-if="!createS">
            <!-- 主题圈名 -->
            <div class="crtcircle-name">
                <input type="text"
                       v-model="title"
                       placeholder="请输入主题圈名（每月仅能修改两次）" />
            </div>
            <!-- 上传封面 -->
            <div class="crtcircle-cover">
                <dk-upload :action="urlprev"
                           :on-success='upS'
                           :on-error='upE'>

                    <div class="cover-cont">
                        <div v-if="!coverUrl">
                            <img class="cover-prev"
                                 src="@/assets/images/temp/add-imgs.png">
                            <!-- <p>上传封面</p> -->
                        </div>
                        <img v-else
                             class="cover-img"
                             :src="coverUrl"
                             alt="封面" />

                    </div>

                </dk-upload>
                <!-- <div>
                    <img src="@/assets/images/temp/add-imgs.png">
                </div> -->
                <dl>
                    <dt>上传封面，它将会在圈子主页、圈子封面展示</dt>
                    <dd>建议尺寸 2560x616，支持3MB内的PNG、JPG</dd>
                </dl>
            </div>
            <!-- 主题圈介绍 -->
            <div class="crtcircle-introduce">
                <textarea placeholder="主题圈介绍..."
                          v-model="intro"
                          maxlength="200"></textarea>
                <p>{{200-intro.length}}</p>
            </div>
            <!-- 加入费用 -->
            <div class="crtcircle-cost">
                加入费用：￥<input type="text"
                       v-model="cost"
                       placeholder="50-2000" /> /年
            </div>
            <!-- 有效期 -->
            <div class="crtcircle-term">
                <dk-switch-group :value="termValues"
                                 class="term-check"
                                 multiple
                                 @onChange='onChange'>
                    <dk-switch v-for="(item,i) in termText"
                               :key="item.text"
                               :class="{active: termValues[i]}">
                        <template slot="text">
                            {{item.text}}
                        </template>
                    </dk-switch>
                </dk-switch-group>
                <section v-if="termValues[0]">
                    <p>成功创建后，不可更改为“固定时间开始计算”模式</p>
                </section>
                <section v-if="termValues[1]">
                    <dl>
                        <dt>有效期：</dt>
                        <dd>2019／05／28 至 2020／05/28</dd>
                    </dl>
                    <p>成功创建后，可更改为“加入之日往后计算一年”模式</p>
                </section>

            </div>
            <!-- 规则 -->
            <div class="crtcircle-rule">
                <dk-switch @click="crtRule">
                    <template slot="text">
                        我已阅读并同意<span>《设圈主题圈规则》</span>
                    </template>
                </dk-switch>
            </div>
            <!-- 提交 -->
            <ul class="crtcircle-submit">
                <li>取消</li>
                <li @click="createNow"
                    class="submit-t">立即创建</li>
            </ul>
        </form>
        <ul class="create-succeed"
            v-else>
            <li @click="gotoArticle">去上传文章 ></li>
            <li>去主题圈（UI设计成长之家） ></li>
        </ul>
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
            ],
            //
            createS: false, // 创建成功
            title: "", // 主题圈名字
            coverUrl: "", // 封面
            intro: "", //介绍
            cost: "", //费用
            joinType: "F", // F固定 / A
            urlprev:
                (process.env.NODE_ENV === "development"
                    ? "/sell"
                    : "http://39.96.35.240:9012") + "/base/upload/yun"
        };
    },
    mounted() {
        this.getMyTopic();
        this.getTopicList();
    },
    methods: {
        upS(response, file, fileList) {
            console.log(" response: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
            this.coverUrl = "//" + response.data.filePath;
        },
        upE(error, file, fileList) {
            console.log(" error: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
        },
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
            console.log("termValues: ", value);
            value.map((v, i) => {
                this.$set(this.termValues, i, v);
            });
            // this.termValues = value
        },
        crtRule(value) {
            console.log("value: ", value);
        },
        createNow() {
            console.log("ssss: ");
            // let now = new Date();
            // let end = +now + 24 * 60 * 60 * 1000;
            let _data = {
                title: this.title,
                coverUrl: this.coverUrl,
                intro: this.intro,
                cost: this.cost,
                joinType: this.joinType,
                userId: "1135212201683062784"
                // startTime: now,
                // endTime: new Date(end)
                // endTime: new Date(end)
            };
            createTopic(_data).then(res => {
                console.log("res: ", res);
                if (res.data.flag) {
                    //增加成功
                    this.createS = true;
                }
            });
        },
        gotoArticle() {
            this.$router.push({ path: "/create-article" });
        }
    }
};
</script>
<style lang="less">
.create-circle {
    width: @wapEditor;
    margin: 20px auto 0;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border: 1px solid rgba(84, 120, 235, 0.1);
    > h3 {
        font-size: 18px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 18px;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        padding: 20px 30px;
    }
    > form {
        padding: 30px;
    }
    .crtcircle-name {
        > input {
            font-size: 20px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            border: none;
            background: transparent;
            width: 100%;
            &::-webkit-input-placeholder {
                font-size: 20px;
                font-weight: 500;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
            }
        }
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
    }
    .crtcircle-cover {
        margin: 30px 0;
        display: flex;
        padding: 50px 70px;
        border-radius: 2px;
        border: 1px dashed rgba(84, 120, 235, 0.5);
        .dk-upload {
            width: 130px;
        }
        .cover-cont > div {
            border-right: 1px solid rgba(84, 120, 235, 0.1);
            padding: 3px 70px 13px 0;
            > img {
                border: 1px dashed rgba(0, 0, 0, 0.5);
                display: block;
                width: 60px;
                height: 60px;
                margin: 0;
            }
        }
        > dl {
            padding-left: 70px;
            > dt {
                font-size: 16px;
                font-weight: bold;
                color: rgba(102, 102, 102, 1);
                line-height: 16px;
                padding: 3px 0 20px;
            }
            > dd {
                font-size: 14px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
            }
        }
    }
    .crtcircle-introduce {
        position: relative;
        padding: 20px;
        background: rgba(247, 247, 247, 1);
        border-radius: 2px;
        border: 1px solid rgba(221, 221, 221, 1);
        margin-bottom: 40px;
        > textarea {
            min-height: 63px;
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 14px;
            border: none;
            background: transparent;
            outline: none;
            resize: none;
        }
        > p {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(207, 207, 207, 1);
            line-height: 14px;
        }
    }
    .crtcircle-cost {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        > input {
            margin: 0 20px 0 15px;
            width: 101px;
            height: 44px;
            background: rgba(247, 247, 247, 1);
            border-radius: 2px;
            border: 1px solid rgba(221, 221, 221, 1);
            text-indent: 20px;
        }
    }
    .crtcircle-term {
        .dk-switch-group {
            display: flex;
            padding: 30px 0;
            .dk-switch {
                margin-right: 30px;
            }
        }
        > section {
            padding: 20px 30px 15px;
            background: rgba(247, 247, 247, 1);
            > dl {
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                > dt {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 14px;
                }
                > dd {
                    font-size: 14px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(255, 147, 0, 1);
                    line-height: 14px;
                }
            }
            > p {
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
            }
        }
    }
    .crtcircle-rule {
        margin-top: 30px;
        .dk-switch {
            display: flex;
            align-items: center;
            > p {
                font-size: 14px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 14px;
            }
            > span {
                color: #5478eb;
            }
        }
    }
    .crtcircle-submit {
        margin-top: 50px;
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        > li {
            margin-left: 30px;
            &:first-child {
                margin-left: 0;
            }
            cursor: pointer;
            width: 170px;
            height: 36px;
            background: rgba(102, 102, 102, 1);
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
        }
        .submit-t {
            background: rgba(84, 120, 235, 1);
        }
    }
    .create-succeed {
        padding: 0 30px;
        > li {
            font-size: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            padding: 30px 0;
            border-bottom: 1px solid rgba(239, 239, 239, 1);
            cursor: pointer;
        }
    }
    .cover-prev {
        width: 24px;
        height: 24px;
        margin: 30px 0 20px;
    }
}
</style>

