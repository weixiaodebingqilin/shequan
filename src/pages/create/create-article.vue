<template>
    <div class="create-article">
        <!-- 选择主题圈 -->
        <dl class="crt-top">
            <dt>主题圈</dt>
            <dd>
                <dk-select v-model='circleId'
                           placeholder="请选择主题圈">
                    <dk-option v-for="item in cricleList"
                               :key="item.id"
                               :label="item.id"
                               :value='item.title'></dk-option>
                </dk-select>
                <p>创建主题圈</p>
            </dd>
        </dl>
        <!-- 主要内容 -->
        <section class="crt-main">
            <h3>
                <input type="text"
                       v-model="title"
                       placeholder="请输入文章标题" />
                <p>编辑中</p>
            </h3>
            <tinymce @input='tinymceChange'
                     :value='inittny'></tinymce>
        </section>

        <!-- 一些设置 -->
        <dl class="crt-install">
            <dt>
                <!-- 简介 -->
                <div class="create-options-introduction">
                    <el-input type="textarea"
                              autosize
                              placeholder="简介（留空将自动摘取文章摘要）"
                              max="120"
                              v-model="summary">
                    </el-input>
                    <!-- <textarea placeholder="简介（留空将自动摘取文章摘要）"
                              maxlength="120"
                              v-model="introduction"></textarea> -->
                    <p>{{120 - summary.length}}</p>
                </div>
                <div class="crt-choice">
                    <dk-switch @click="isPublic = !isPublic">
                        <template slot="text">
                            文章设置为公开
                        </template>
                    </dk-switch>
                    <dk-switch multiple
                               @click="isTiming = !isTiming">
                        <template slot="text">
                            设置定时发送
                        </template>
                    </dk-switch>
                </div>

                <div v-if="isTiming"
                     class="create-options-choiceTime">
                    <el-select v-model="tmDay"
                               placeholder="今天"
                               @change='hourChange'>
                        <el-option v-for="item in tmDays"
                                   :key="item"
                                   :label="item"
                                   :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="tmHour"
                               placeholder="20">
                        <el-option v-for="item in tmHours"
                                   :key="item.value"
                                   :label="item.value"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                    时
                    <el-select v-model="tmMin"
                               placeholder="0">
                        <el-option v-for="item in tmMins"
                                   :key="item"
                                   :value="item">
                        </el-option>
                    </el-select>
                    分
                    <p>你可以选择一周内内任意时刻定时发布，在设定的时间之前可修改取消</p>
                </div>
            </dt>
            <dd>
                <dk-upload :action="urlprev"
                           :on-success='upS'
                           :on-error='upE'>

                    <div class="cover-cont">
                        <div v-if="!image">
                            <img class="cover-prev"
                                 src="@/assets/images/temp/add-imgs.png">
                            <p>上传封面</p>
                        </div>
                        <img v-else
                             class="cover-img"
                             :src="image"
                             alt="封面" />

                    </div>

                </dk-upload>
                <p class="cover-introduce">
                    建议尺寸 180 X 120，支持大小2MB内的GIF、PNG、JPG
                </p>
            </dd>
        </dl>
        <div class="crt-bottom">
            <div class="crt-saySome">
                <el-input type="textarea"
                          autosize
                          placeholder="写完啦～你有什么想说的吗？"
                          max="50"
                          v-model="saySome">
                </el-input>
                <p>{{50-saySome.length}}</p>
            </div>
            <ul class="crt-operation">
                <li @click="release">{{aid ? '修改' : '发布'}} </li>
                <li>设置阅读收获</li>
                <li>保存为草稿</li>
            </ul>
        </div>
    </div>
</template>
<script>
import tinymce from "@/components/Tinymce";
import { getMyTopic } from "@/api/topic.js";

import {
    articleAdd,
    articleDetailQuery,
    articleUpdate
} from "@/api/article.js";

export default {
    name: "create-article",
    components: { tinymce },
    data() {
        return {
            aid: '',
            saySome: "", // 说些什么
            upImgurl: "",
            urlprev:
                (process.env.NODE_ENV === "development"
                    ? "/sell"
                    : "http://39.96.35.240:9012") + "/base/upload/yun",
            circleId: "",
            introduction: "",
            // zhutiquan
            cricleList: [], // 主题圈
            //定时发送?

            isTiming: "",
            tmDay: "",
            tmHour: "",
            tmMin: "",
            initHour: "",
            initHours: [],
            tmDays: [],
            tmHours: [],
            tmMins: [], //
            ///
            inittny: "", //
            title: "",
            image: "", // 封面
            isPublic: false, // 是否公开 
            topicCircleId: "", // 主题圈id
            content: "", //正文
            summary: "" //简介
        };
    },
    created() {
        let query = this.$route.query;
        if (query.aid) {
            this.aid = query.aid;
            // this.aid = "1139190144520294400";
            this.articleDetailQuery(this.aid);
        }

    },
    mounted() {
        this.setTime();
        this.getMyTopic();
    },
    methods: {
        // 获取文章详情
        articleDetailQuery(id) {
            articleDetailQuery(id).then(res => {
                console.log("articleDetailQueryres: ", res);
                this.article = res.data.data;
                let data = res.data.data;
                console.log("articleDetailQueryres: ", data);
                this.title = data.title;
                this.image = data.image;
                this.isPublic = data.isPublic;
                this.tyContent = data.content;
                this.summary = data.summary;
                this.topicCircleId = data.topicCircleId;
                this.userId = 1135212201683062784;
                this.saySome = data.saySome || "";
                this.type = 1;

                this.inittny = data.content;
                //
            });
        },
        // 发布
        release() {
            let _data = {
                title: this.title,
                image: this.image, // 封面
                isPublic: false,
                content: this.tyContent,
                summary: this.summary,
                topicCircleId: this.topicCircleId,
                userId: 1135212201683062784,
                saySome: this.saySome,
                type: 1
            };
            let fn = articleAdd;
            if (this.aid) {
                _data.aid = this.aid;
                fn = articleUpdate;
            }

            fn(_data).then(res => {
                console.log("res: res", res);
                if (res.data.flag) {
                    alert(res.data.message);
                    if (this.aid) {
                        this.$router.push({
                            path: "/article",
                            aid: this.aid
                        });
                    } else {
                        this.$router.push({
                            path: "/article",
                            aid: this.aid
                        });
                    }

                }
            });
        },
        // 查询我的创建的主题圈
        getMyTopic() {
            let userId = "1135212201683062784";
            getMyTopic(userId).then(res => {
                console.log("getMyTopicres: ", res);
                if (res.data.data) {
                    this.cricleList = res.data.data;
                }
            });
        },
        upS(response, file, fileList) {
            //
            console.log(" response: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
            this.image = "//" + response.data.filePath;
        },
        upE(error, file, fileList) {
            console.log(" error: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
        },
        tinymceChange(str) {
            console.log("str1111: ", str);
            this.tyContent = str;
        },
        hourChange(v) {
            console.log("v: ", v);
            this.setHour();
        },
        /**
         * 时间格式化
         *
         * 1. 输入 某天的值（‘2019-5-28’）
         * 2. 输出 一个长度为七的数组arr, 从当天天开始起的七天数据 比如 ['今天', '5-29', '5-30', '5-31', '6-1' ,...]
         */
        formData(day) {
            let times = 24 * 60 * 60 * 1000;
            let arr = [];
            // .padStart(2, "0")
            for (let i = 1; i < 7; i++) {
                let td = new Date(day + i * times);
                let m = td.getMonth() + 1;
                let d = td.getDate();
                let now =
                    m.toString().padStart(2, "0") +
                    "-" +
                    d.toString().padStart(2, "0");
                arr.push(now);
            }
            return arr;
        },
        setHour(day = this.tmDay, hour = this.initHour) {
            this.tmHours =
                day === this.tmDays[0]
                    ? this.tmHours.splice(hour, 24)
                    : JSON.parse(JSON.stringify(this.initHours));
        },
        setHours() {
            let hours = [];
            for (let i = 0; i < 24; i++) {
                hours.push({
                    value: i,
                    disabled: false
                });
            }
            this.initHours = [...hours];
            return hours;
        },
        setTime() {
            const now = new Date();

            let arr = ["今天", ...this.formData(+now)];
            this.tmDays = arr;
            this.tmDay = arr[0];
            this.tmHours = this.setHours();
            this.initHour = now.getHours();
            this.tmHour = now.getHours();
            this.tmMins = [...new Array(60).keys()];
            this.tmMin = now.getMinutes(this.setHours());

            this.setHour();
        }
    },
    watch: {
        circleId(now) {
            console.log('now: ', now)
            this.cricleList.some(v => {
                this.topicCircleId = v.id;
                console.log("circleId1: ", this.topicCircleId);
                return v.title === now;
            });
        }
    }
};
</script>
<style lang="less">
.create-article {
  width: 790px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
}
.crt-top {
  background: #fff;
  margin-bottom: 10px;
  > dt {
    height: 56px;
    line-height: 56px;
    padding: 0 30px;
    border-bottom: 1px solid rgba(239, 239, 239, 1);
    font-size: 16px;
    color: #333;
  }
  > dd {
    height: 76px;
    line-height: 76px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dk-select-input {
    input {
      border: none;
      font-size: 16px;
      color: #333;
    }
  }
  .dk-select-option {
    width: 790px;
    left: -30px;
    .dk-option {
      height: 40px;
      line-height: 40px;
    }
  }
}
.crt-main {
  background: #fff;
  padding: 0 30px;
  margin-bottom: 10px;
  > h3 {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #666666;
    border-bottom: 1px solid rgba(239, 239, 239, 1);
    > p {
      color: #999999;
      font-weight: normal;
    }
    > input {
      border: none;
    }
  }
}
.crt-install {
  padding: 30px;
  display: flex;
  background: #fff;
  margin-bottom: 10px;
  > dt {
    width: 490px;
  }
  > dd {
    position: relative;
    margin-left: 60px;
    width: 180px;
    &::before {
      content: "";
      width: 1px;
      height: 100%;
      background: rgba(239, 239, 239, 1);
      position: absolute;
      top: 0;
      left: -30px;
    }
    .cover-cont {
      width: 180px;
      height: 120px;
      text-align: center;
      border: 1px dashed rgba(84, 120, 235, 0.1);
    }
    .cover-prev {
      width: 24px;
      height: 24px;
      margin: 30px 0 20px;
    }
    .cover-img {
      width: 180px;
      height: 120px;
    }
    .cover-introduce {
      color: rgba(153, 153, 153, 1);
      font-size: 12px;
      margin-top: 20px;
      text-indent: 2px;
    }
  }
  .crt-choice {
    display: flex;
    .dk-switch {
      margin-right: 30px;
    }
  }
}
.create-options-introduction {
  position: relative;
  margin-bottom: 30px;
  > p {
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: rgba(207, 207, 207, 1);
  }
  .el-textarea__inner {
    padding-right: 30px;
  }
}
.create-options-choiceTime {
  margin-top: 30px;
  justify-content: flex-start;
  align-items: center;
  .el-select {
    width: 80px;
  }
  > p {
    margin-top: 30px;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
  }
}
.crt-bottom {
  padding: 30px;
  margin-bottom: 60px;
  background-color: #fff;
  .crt-saySome {
    position: relative;
    > p {
      position: absolute;
      right: 10px;
      bottom: 6px;
      font-size: 14px;
      color: rgba(207, 207, 207, 1);
    }
  }
  ul.crt-operation {
    display: flex;
    margin-top: 25px;
    li {
      width: 169px;
      height: 40px;
      line-height: 40px;
      border: 1px solid rgba(151, 151, 151, 1);
      border-radius: 2px;
      font-size: 14px;
      transition: all 0.3s;
      margin-right: 30px;
      text-align: center;
      cursor: pointer;
      &:hover,
      &.active {
        background: rgba(84, 120, 235, 1);
        border-color: rgba(84, 120, 235, 1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
