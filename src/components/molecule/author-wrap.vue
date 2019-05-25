<template>
    <div class="author-wrap">
        <img src="@/assets/images/temp/header.png">
        <div class="author-msg">
            <div>
                <p>胡凌</p>
                <span>圈主</span>
            </div>
            <div>
                <p>32W</p>
                <span>人气</span>
            </div>
        </div>
        <h6>阿里巴巴资深设计师，曾主导过支付宝，天猫等项目</h6>
        <p>在这里我将带领大家，每天让自己进步一点点，积累行业知识。用我8年的从业的过程中无数大大小小的坑，为大家填上。</p>
        <div class="author-more">查看主页</div>
    </div>
</template>
<script>
export default {
    name: "author-wrap"
};
</script>
<style lang="less">
.author-wrap {
    padding: 66px 30px 30px;
    background: rgba(248, 249, 255, 1);
    border-radius: 2px;
    margin-top: 80px;
    position: relative;
    > img {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
    }
    .author-msg {
        display: flex;
        justify-content: center;
        > div {
            &:first-child {
                padding-right: 10px;
                margin-right: 10px;
                border-right: 1px solid rgba(239, 239, 239, 1);
            }
            display: flex;
            align-items: flex-end;
            > p {
                font-size: 18px;

                font-weight: 500;
                color: #333333;
                line-height: 18px;
            }
            > span {
                font-size: 12px;

                color: #999999;
                line-height: 12px;
                margin-left: 10px;
            }
        }
    }
    > h6 {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        margin: 15px 0 10px;
    }
    > p {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
    }
    .author-more {
        height: 32px;
        background: rgba(84, 120, 235, 1);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;

        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 32px;
        margin-top: 30px;
    }
}
</style>


