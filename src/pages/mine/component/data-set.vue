<template>
    <div class="data-set loadUp">
        <div class="set-head">
            <img src="@/assets/images/temp/header.png">
            <div>
                <p>支持 jpg、png 格式大小 2M 以内的图片</p>
                <div>修改头像</div>
            </div>
        </div>

        <div class="data-item">
            <div class="data-lable">账户名称：</div>
            <div class="data-input">
                <span>微笑的冰欺凌</span>
                <font>修改</font>
            </div>
        </div>
        <div class="data-item">
            <div class="data-lable">性别：</div>
            <div class="data-input">
                <el-radio v-model="radio"
                          class="add-card-radio"
                          label="1">男</el-radio>
                <el-radio v-model="radio"
                          class="add-card-radio"
                          label="2">女</el-radio>
            </div>
        </div>
        <div class="data-item">
            <div class="data-lable">个人简介：</div>
            <div class="data-input">
                <input type="text">
            </div>
        </div>
        <div class="data-item">
            <div class="data-lable">手机号：</div>
            <div class="data-input">
                <span>15308576618</span>
                <font>解绑</font>
            </div>
        </div>
        <div class="data-item">
            <div class="data-lable">微信绑定：</div>
            <div class="data-input">
                <span>去绑定</span>
            </div>
        </div>
        <div class="data-item">
            <div class="data-lable">修改密码：</div>
            <div class="data-input">
                <font>修改</font>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "data-set",
    props: {},
    data() {
        return {
            radio: "1"
        };
    }
};
</script>
<style lang="less">
/*data-set**/
.data-set {
    padding: 30px;
    background: #fff;
    .set-head {
        display: flex;
        > img {
            width: 106px;
            height: 106px;
            overflow: hidden;
            border-radius: 50;
        }
        > div {
            margin-left: 30px;
            > p {
                padding: 18px 0 20px;
                font-size: 13px;
                font-weight: 500;
                color: rgba(153, 153, 153, 1);
                line-height: 13px;
            }
            > div {
                cursor: pointer;
                width: 102px;
                height: 32px;
                background: rgba(84, 120, 235, 1);
                border-radius: 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                line-height: 13px;
            }
        }
    }
    .data-item {
        display: flex;
        align-items: center;
        padding: 15px 0;
        height: 44px;
        .data-lable {
            width: 102px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 14px;
        }
    }
}
</style>
