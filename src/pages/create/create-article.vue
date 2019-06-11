<template>
    <div class="create-article">
        <!-- 选择主题圈 -->
        <dl class="crt-top">
            <dt>主题圈</dt>
            <dd>
                <dk-select v-model='circleId'
                           placeholder="请选择主题圈">
                    <dk-option value='Javascript'></dk-option>
                </dk-select>
                <p>创建主题圈</p>
            </dd>
        </dl>
        <!-- 主要内容 -->
        <section class="crt-main">
            <h3>
                <input type="text"
                       placeholder="请输入文章标题" />
                <p>编辑中</p>
            </h3>
            <tinymce @input='tinymceChange'></tinymce>
        </section>

        <!-- 一些设置 -->
    </div>
</template>
<script>
import tinymce from "@/components/Tinymce";
export default {
    name: "create-article",
    components: { tinymce },
    data() {
        return {
            circleId: ""
        };
    },
    methods: {
        tinymceChange(str) {
            console.log("str1111: ", str);
            this.tyContent = str;
        }
    }
};
</script>
<style lang="less">
.create-article {
    width: 790px;
    margin: 0 auto;
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
</style>
