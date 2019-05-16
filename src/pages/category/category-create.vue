
<template>
    <section class="category-create">
        <nav>
            <ul>
                <li v-for="(e,i) in navs"
                    :key="e"
                    :class="{active: i === nvaIndex}"
                    @click="navtab">{{e}}</li>
            </ul>
        </nav>
        <dl class="create-main">
            <!-- 选项 -->
            <dt class="create-options">
                <div class="create-options-cont">
                    <!-- 选择主题 -->
                    <div class="create-options-topic">
                        <el-select v-model="topic"
                                   placeholder="选择专题">
                            <el-option v-for="item in topics"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <div>
                            <span>
                                <img src="@/assets/images/icon/add.png" />
                            </span>
                            <p>您的专题圈未超过6篇文章，不能创建新的专题圈</p>
                        </div>
                    </div>
                    <!-- 附件 -->
                    <div class="create-options-enclosure">

                        <el-upload class="upload-demo"
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   :on-preview="handlePreview"
                                   :on-remove="handleRemove"
                                   :before-remove="beforeRemove"
                                   multiple
                                   :limit="1"
                                   :on-exceed="handleExceed"
                                   :file-list="fileList">
                            <el-button size="small"
                                       type="primary">
                                点击可上传附件(zip/rar7z)
                            </el-button>
                        </el-upload>
                    </div>
                    <!-- 简介 -->
                    <div class="create-options-introduction">
                        <el-input type="textarea"
                                  autosize
                                  placeholder="简介（留空将自动摘取文章摘要）"
                                  max="120"
                                  v-model="introduction">
                        </el-input>
                    </div>
                    <!-- 定是送 -->
                    <div>
                        <el-radio v-model="isTiming"
                                  label="1">
                            占位符，样式跟功能
                        </el-radio>
                        <p>你可以选择一周内内任意时刻定时发布，在设定的时间之前可修改取消</p>
                    </div>
                    <div class="create-options-choiceTime">
                        <el-select v-model="topic"
                                   placeholder="今天">
                            <el-option v-for="item in topics"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="topic"
                                   placeholder="20">
                            <el-option v-for="item in topics"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        时
                        <el-select v-model="topic"
                                   placeholder="选择专题">
                            <el-option v-for="item in topics"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                        分
                    </div>
                    <div>
                        <el-radio v-model="isTiming"
                                  label="1">
                            文章设置为公开（或者叫做试看，非圈主的文章强制是公开的）
                        </el-radio>
                        <p>（上面选择的样式组件会重写）</p>
                    </div>
                </div>
                <section class="create-options-cover">
                    <el-upload class="avatar-uploader"
                               action="https://jsonplaceholder.typicode.com/posts/"
                               :show-file-list="false"
                               :on-success="coverScs"
                               :before-upload="coverBf">
                        <img v-if="imageUrl"
                             :src="imageUrl"
                             class="avatar">
                        <i v-else
                           class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <p>建议尺寸 180 X 120，支持大小2MB内的GIF、PNG、JPG</p>
                </section>
            </dt>
            <!-- 富文本 -->
            <dd class="create-tinymce">
                <tinymce></tinymce>
            </dd>
        </dl>
    </section>
</template>
/* eslint-disable no-console */
<script>
import tinymce from "@/components/Tinymce";
export default {
  name: "category-create",

  components: { tinymce },
  data() {
    return {
      navs: ["分享心得", "专题圈", "挑战实练"],
      nvaIndex: 0,
      topic: "",
      topics: [
        {
          value: "选项1",
          label: "专题圈一"
        },
        {
          value: "选项2",
          label: "专题圈二"
        }
      ],
      fileList: [],
      introduction: "", //简介
      imageUrl: "",
      //定是送?
      isTiming: ""
    };
  },
  methods: {
    navtab() {},
    handleRemove(file, fileList) {
      // eslint-disable-next-line no-console
      console.log(file, fileList);
    },
    handlePreview(file) {
      // eslint-disable-next-line no-console
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    coverScs(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    coverBf(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      //   return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="less">
.category-create {
  width: @wap;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: space-between;
  > nav {
    width: 210px;
    li {
      height: 44px;
      line-height: 44px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(84, 120, 235, 0.1);
      margin-bottom: 10px;
      text-indent: 30px;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
      cursor: pointer;
      &:hover {
        background: rgba(84, 120, 235, 0.7);
        color: rgba(255, 255, 255, 1);
      }
      &.active {
        background: rgba(84, 120, 235, 1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .create-main {
    width: 900px;

    .create-options {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
    }
  }
}

.create-options-cont {
  width: 660px;
  padding-right: 25px;
  > div {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
}
.create-options-topic {
  > div {
    height: 32px;
    line-height: 32px;
    flex: 1;
    margin-right: 20px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: rgba(252, 64, 17, 0.7);
    > span {
      width: 24px;
      height: 24px;
      line-height: 24px;
      border: 1px solid rgba(252, 64, 17, 0.7);
      border-radius: 50%;
      text-align: center;
      margin-right: 20px;
      > img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
.create-options-enclosure {
  //   display: flex;
  //   justify-content: space-between;
}

.create-options-cover {
  width: 180px;
  margin-left: 30px;
  padding-top: 30px;
  > p {
    margin-top: 20px;
    font-size: 12px;

    color: rgba(153, 153, 153, 1);
    line-height: 24px;
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 180px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 180px;
  height: 120px;
  display: block;
}
</style>


