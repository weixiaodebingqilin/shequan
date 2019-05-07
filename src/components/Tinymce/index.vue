<template>
    <!-- 富文本编辑器  -->
    <div :class="{fullscreen:fullscreen}" class="tinymce-container editor-container">
        <!-- 富文本 -->
        <textarea :id="tinymceId" class="tinymce-textarea"/>
        <!-- 上传图片插件 -->
        <div class="editor-custom-btn-container" v-if='ifupimg'>
            <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"/>
        </div>
    </div>
</template>

<script>
// import tinymce from 'tinymce/tinymce'
// import 'tinymce/themes/modern/theme'

//------- 自拓展上传图片组件  
import editorImage from './components/editorImage'
//------- 插件配置
import plugins from './plugins'
//-----  工具栏配置
import toolbar from './toolbar'

//---- 上传

import axios from 'axios'

export default {
    name: 'Tinymce',
    components: { editorImage },
    props: {
        id: {
            type: String,
            default: 'vue-tinymce-' + +new Date()
        },
        //---- 是否启用自封装
        ifupimg: {
            type: Boolean,
            default: true
        },
        //---- 传入值
        value: {
            type: String,
            default: ''
        },
        // --- 工具栏
        toolbar: {
            type: Array,
            required: false,
            default() {
                return []
            }
        },
        // ----- 菜单栏
        menubar: {
            type: String,
            //文件 编辑 插入 视图 格式话 表格 
            default: 'file edit insert view format table'
        },
        //----- 插件
        plugins: {
            type: Array,
            default(){
                return []
            }
        },
        //------ 编辑器高度
        height: {
            type: Number,
            required: false,
            default: 360
        }
    },
    data() {
        return {
            hasChange: false, // 编辑器内容改变 
            hasInit: false, //编辑器初始化 
            tinymceId: this.id,//自维护id
            fullscreen: false,//是否全屏
        }
    },
    computed: {},
    watch: {
        //----- 当传入内容改变时，编辑器内容也改变
        //----- 双向数据绑定
        //----- 当前未生效
        value(val) {
            if (!this.hasChange && this.hasInit) {
            this.$nextTick(() =>
                window.tinymce.get(this.tinymceId).setContent(val || ''))
            }
        },
    },
    mounted() {
        this.initTinymce()
    },
    destroyed() {
        this.destroyTinymce()
    },
    methods: {
        //-------------------------- 初始化编辑器
        initTinymce() {
            const _this = this
            console.log('tinymce: ',window.tinymce)
            window.tinymce.init({
                language: 'zh_CN',//加载语言
                selector: `#${this.tinymceId}`,//容器
                height: this.height,//编辑区高度 
                toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,//工具栏，可自配置
                menubar: this.menubar,//菜单栏
                plugins: this.plugins.length > 0 ? this.plugins : plugins ,//插件
                fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
                default_link_target: '_blank',//添加的链接开网页
                link_title: false,//禁止链接输入标题
                nonbreaking_force_tab: true, // 监听tab键是否控制缩进（与表格选项卡切换冲突，取决于插件先后顺序）
                end_container_on_empty_block: true,//enter键允许分割空元素
                powerpaste_word_import: 'clean',//控制从word文档粘贴过来的内容 clean保留原有
                code_dialog_height: 450,//代码对话框可编辑高度
                code_dialog_width: 1000,//代码对话框可编辑宽度
                advlist_bullet_styles: 'square',//无序列表标记
                advlist_number_styles: 'default',//有序列表标记 
                imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
                // images_upload_url:goodsUpUrl + '/files/upload',
                //-------------------------------- 编辑器实例初始化时间执行配置函数
                init_instance_callback: editor => {
                    if (_this.value) {
                        editor.setContent(_this.value)
                    }
                    _this.hasInit = true
                    //----- 实现双向数据绑定
                    //----- 当编辑宽内容改变时触发的回调 
                    //----- 事件详情 https://www.tiny.cloud/docs/advanced/events/   
                    editor.on('NodeChange Change KeyUp SetContent', () => {
                        this.hasChange = true
                        this.$emit('input', editor.getContent())
                    })
                },
                /**
                 * his option allows you to specify a callback that will be executed before the TinyMCE editor instance is rendered.
                 */
                //-------------------------------- 允许在编辑器呈现之前执行回调
                setup(editor) {
                    editor.on('FullscreenStateChanged', (e) => {
                        _this.fullscreen = e.state
                    })
                },
                
            })
        },
        // ------------------------- 销毁编辑器 
        destroyTinymce() {
            if (window.tinymce.get(this.tinymceId)) {
                window.tinymce.get(this.tinymceId).destroy()
            }
        },
        //-------------------------- 图片上传成功后 
        imageSuccessCBK(arr) {
            const _this = this
            // console.log('传入富文本中的文件', arr)
            arr.forEach(v => {
                window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.trueUrl}" >`)
            })
        }
    }
}
/**
 * 图像上传器旨在补充TinyMCE 4.3的新图像编辑功能。
 * 可以使用此功能上载在TinyMCE中编辑的图像。
 * 通过其他方式添加的本地图像，例如使用paste_data_images配置属性时拖放或使用Tiny的PowerPaste插件。
 * 上传后，TinyMCE会自动<image>使用远程图像的新路径更新src属性。
 * 可以通过使用新editor.uploadImages()功能将本地图像上传到TinyMCE 。
 * 此功能是异步处理的，这意味着用户可以在所有图像完成上载之前保存其内容。
 * 如果发生这种情况，则没有远程映像的服务器路径可用，并且映像将保存为Base 64。
 * 建议editor.uploadImages()在将编辑器内容提交给服务器之前执行该功能，
 * 以避免将内容保存为Base 64.一旦上传了所有图像，就可以利用成功回调来执行代码
 * 。此成功回调可用于通过a将编辑器的内容保存到服务器POST。
 * 1. 使用带有jQuery的uploadImages
 * * tinymce.activeEditor.uploadImages(function(success) {
    $.post('ajax/post.php', tinymce.activeEditor.getContent()).done(function() {
            console.log("Uploaded images and posted content as an ajax request.");
        });
    });
    2. 使用uploadImages然后发布表单
    tinymce.activeEditor.uploadImages(function(success) {
        document.forms[0].submit();
    });    
 */

/**
 * 注意事项
 * 1.如果要求对提交图片能够进行处理，则采用表单提交方式,因为图片处理只能处理blob数据
 * 2. 指导 https://www.tiny.cloud/docs/general-configuration-guide/upload-images/
 */
</script>

<style scoped>
.tinymce-container {
    position: relative;
}
.tinymce-container>>>.mce-fullscreen {
    z-index: 10000;
}
.tinymce-textarea {
    visibility: hidden;
    z-index: -1;
}
.editor-custom-btn-container {
    position: absolute;
    right: 4px;
    top: 4px;
    /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
    z-index: 10000;
    position: fixed;
}
.editor-upload-btn {
    display: inline-block;
}
</style>
