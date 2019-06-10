<template>
    <!-- 富文本上传扩展 -->
    <div class="upload-container">
        <!-- 上传图片按钮 -->
        <!-- <el-button :style="{background:color,borderColor:color}"
                   icon="el-icon-upload"
                   size="mini"
                   type="primary"
                   @click=" 
            dialogVisible=true">
            上传图片
        </el-button> -->
        <dk-upload :action="urlprev"
                   :on-success='upS'
                   :style="{background:color,borderColor:color}"
                   :on-error='upE'>
            <button>上传图片</button>
        </dk-upload>

        <!-- dialog -->
        <el-dialog :modal-append-to-body='false'
                   :visible.sync="dialogVisible">
            <!-- 文件展示 -->
            <div class="ready-show">
                <div class="img-box"
                     v-for="(item,index) in fileList"
                     :key='index'
                     @mouseover="mouseover(item)"
                     @mouseout="mouseout(item)">
                    <div class="wrapper"
                         style='z-index:5'
                         v-if='item.showTool'>
                        <!-- 删除图标 -->
                        <i @click='delImg(item,index)'
                           class="el-icon-delete"></i>
                    </div>
                    <!-- 上传动画 -->
                    <div class="wrapper"
                         style='z-index:10'
                         v-if='item.showProgress && item.statu === "ready"'>
                        <!-- <el-progress :width="70" type="circle" :percentage="item.percentage"></el-progress> -->
                    </div>
                    <!-- 图片 -->
                    <div class="img-row">
                        <!-- 上传成功显示图标 -->
                        <label v-if='!item.showProgress && item.statu === "success"'>
                            <i class="el-icon-check"></i>
                        </label>
                        <img :src="item.url"
                             :title="item.name">
                        <!-- 上传失败 -->
                        <span class="error"
                              v-if='item.statu === "error"'>上传失败</span>
                    </div>
                </div>
            </div>
            <!-- 选取文件 -->
            <div class="el-upload--picture-card">
                <el-button type="primary"
                           @click='chooseFile'>
                    <span>点击上传</span>
                    <input type="file"
                           :accept='accept'
                           ref='fileInput'
                           style="display:none"
                           @change="getFileInfo($event)" />
                </el-button>
            </div>
            <!-- dialog按钮 -->
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary"
                       @click="handleSubmit">确 定</el-button>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
//全局信息
// import {
//     upToWhere
// } from '@/api/upUrl/index.js'

// //上传
// import {
//     upUrl,
// } from '@/api/upUrl'

export default {
    name: "EditorSlideUpload",
    props: {
        //-----
        color: {
            type: String,
            default: "#1890ff"
        },
        //--------------- 上传部分
        //---- 接收的文件类型
        accept: {
            type: String,
            default: "image/*"
        },
        //---- 上传地址
        action: {
            type: String,
            default: "/sysFileInfo/upload"
        }
        //---- 限制数量
        // maxNum:{
        //     type: Number,
        //     default: 1,
        // },
        //---- 默认已有上传图片
        // defaultFileList:{
        //     type:Array,
        //     default(){ return []}
        // },
    },
    data() {
        return {
            dialogVisible: false,
            //-------
            fileList: [],
            urlprev:
                (process.env.NODE_ENV === "development"
                    ? "/sell"
                    : "http://39.96.35.240:9012") + "/base/upload/yun"
        };
    },
    methods: {
        upS(response, file, fileList) {
            console.log(" response: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
            this.upImgname = response.data.fileName;
            this.upImgurl = "//" + response.data.filePath;
        },
        upE(error, file, fileList) {
            console.log(" error: ", response);
            console.log(" file: ", file);
            console.log(" fileList: ", fileList);
        },
        //------------------------------------- 接口上传
        upApi(fileInfo, file) {
            // console.log('上传接口', fileInfo, file)
            //------ 显示进度条动画
            fileInfo.showProgress = true;
            fileInfo.statu = "ready";
            //------ 未传入aciton
            if (!this.action.length || !file) {
                return;
            }
            //------ 数据上传
            let formData = new FormData();
            // formData.append('fileSource', upToWhere)//ALIYUN   LOCAL
            formData.append("file", file, fileInfo.name);
            var config = {
                onUploadProgress: progressEvent => {
                    // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                    //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded
                    if (progressEvent.lengthComputable) {
                        // let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                        fileInfo.percentage =
                            ((progressEvent.loaded / progressEvent.total) *
                                100) |
                            0;
                    }
                }
            };
            axios
                .post(this.action, formData, config)
                .then(res => {
                    if (res.data.code !== "SUCCESS") {
                        return this.$message({
                            type: "error",
                            message: "图片上传出现异常"
                        });
                    }
                    //-------- 上传成功
                    fileInfo.showProgress = false;
                    fileInfo.statu = "success";
                    fileInfo.trueUrl = res.data.data; //后台真正的返回地址
                })
                .catch(error => {
                    if (error) {
                        fileInfo.showProgress = false;
                        fileInfo.statu = "error";
                        // console.log(error,'上传失败')
                        // this.uploadedList.splice(index, 1)
                    }
                });
        },
        //------------------------------------- 提交操作
        //-- 点击确认
        handleSubmit() {
            let arr = this.fileList.filter(v => v.statu === "success");
            if (!arr.length) {
                this.$message({
                    type: "warning",
                    message:
                        "请等待所有图片上传成功 或 出现了网络问题 或 当前没选择图片，请刷新页面重新上传!"
                });
                return;
            }
            //------ 图片信息传至富文本
            this.$emit("successCBK", arr);
            //------ 清空信息
            this.fileList = [];
            //------- 关闭弹框
            this.dialogVisible = false;
        },
        //------------------------------------- 选取文件
        // 选择文件
        chooseFile() {
            this.$refs["fileInput"].click();
        },
        // 获取文件信息
        getFileInfo(e) {
            // console.log('获取文件信息', e)
            let file = e.target.files[0];
            //------------- 变量声明
            let fileInfo = {
                name: file.name,
                url: "",
                trueUrl: "", //后台真正的返回地值
                width: "",
                height: "",

                uid: +Date.now(),
                statu: "ready",
                showProgress: false, //是否显示进度条动画, 不显示表示上传成功
                percentage: 0, //进度条
                showTool: false //显示工具栏
            };
            //------------- 生成展示base64 url
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                this.$message({
                    type: "warning",
                    message: "图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"
                });
                return;
            }
            var reader = new FileReader();
            reader.onload = e => {
                if (typeof e.target.result === "object") {
                    // 把Array Buffer转化为blob 如果是base64不需要
                    fileInfo.url = window.URL.createObjectURL(
                        new Blob([e.target.result])
                    );
                    this.fileList.push(fileInfo);
                    this.getImgRec(fileInfo);
                    this.upApi(fileInfo, file);
                } else {
                    fileInfo.url = e.target.result;
                    this.fileList.push(fileInfo);
                    this.getImgRec(fileInfo);
                    this.upApi(fileInfo, file);
                }
            };
            // 转化为base64
            reader.readAsDataURL(file);
            //------------- 保证能选同张图片
            this.$refs["fileInput"].value = "";
        },
        //获取文件宽高
        //--- 主要目的在this构建当前图片列表信息
        getImgRec(fileInfo) {
            const _self = this;
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = fileInfo.url;
                //----- 图片加载事件(图片必须有url才能加载和触发加载事件)
                img.onload = function() {
                    fileInfo.width = this.width;
                    fileInfo.height = this.height;
                    // console.log(fileInfo)
                };
                resolve(true);
            });
        },
        //------------------------------------- 文件展示
        // 删除图片
        delImg(fileInfo, index) {
            this.fileList.splice(index, 1);
        },
        mouseover(item) {
            if (item.showProgress) {
                return;
            }
            if (item.showTool) {
                return;
            }
            item.showTool = true;
        },
        mouseout(item) {
            if (item.showProgress) {
                return;
            }
            if (!item.showTool) {
                return;
            }
            item.showTool = false;
        }
    },
    beforeMount() {
        this.fileList = [];
    }
};
</script>


<style lang="less">
@picSpace: 20px; //图片间隙
@imgWidth: 140px;
@imgHeight: 140px;
.upload-container {
    //----------- 选取
    .el-upload--picture-card {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    //-------------
    .ready-show {
        display: flex;
        flex-wrap: wrap;
        .img-box {
            margin-right: @picSpace;
            padding: 10px 0px;
            position: relative;
            //--- 遮罩层
            .wrapper {
                position: absolute;
                left: 0px;
                top: 0p;
                width: @imgWidth;
                height: @imgHeight;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                //---- 预览图标、删除图标
                i {
                    cursor: pointer;
                    font-size: 20px;
                    color: #fff;
                }
                //----- 上传进度条
                .el-progress__text {
                    color: #fff;
                }
            }
            //----- 图片列
            .img-row {
                width: @imgWidth;
                height: @imgHeight;
                border: 1px solid #ddd;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
                //成功
                label {
                    position: absolute;
                    right: -17px;
                    top: -9px;
                    width: 46px;
                    height: 24px;
                    background: #13ce66;
                    text-align: center;
                    transform: rotate(35deg);
                    box-shadow: 0 1px 1px #ccc;
                    i {
                        color: #fff;
                        font-size: 12px;
                        margin-top: 12px;
                        transform: rotate(-28deg);
                    }
                }
                //----- 上传失败文字
                .error {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%, -50%, 0);
                    background: #fff;
                    color: #f56c6c;
                }
                //--- 图片
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
