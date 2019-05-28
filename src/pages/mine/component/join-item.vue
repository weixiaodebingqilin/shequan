<template>
    <ul class="join-item loadUp">
        <li>
            <div v-if="showImg"
                 class="join-item-img"><img src="@/assets/images/temp/challenge-banner.png"></div>
            <dl>
                <dt>
                    <h5>插画是如何从0到落地的？</h5><span>10</span>
                </dt>
                <dd>
                    <div>
                        <img src="@/assets/images/temp/category-product.png">
                        <span>千夜Ryan_Vision</span>
                    </div>
                    <span>有效期至：2020/05/30</span>
                </dd>
            </dl>
            <div v-if="!showImg"
                 class="join-item-end">
                <span>有效期至：2020/05/30</span>
                <div class="join-end-button">老用户3折续圈 ></div>
                <p>已过期</p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: "join-item",
    props: {
        // 标题
        clounms: {
            type: Array,
            default: () => []
        },
        // 初始时选中的索引值
        showImg: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="less">
/*join-item**/
.join-item {
    .flex-center {
        display: flex;
        align-items: center;
    }
    padding: 0 30px;
    > li {
        padding: 30px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        .flex-center();
        .join-item-img {
            > img {
                width: 291px;
                height: 70px;
                border-radius: 5px;
                display: block;
                margin-right: 20px;
            }
        }
        > dl {
            > dt {
                .flex-center();
                > h5 {
                    font-size: 20px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    line-height: 24px;
                    max-width: 390px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                > span {
                    .flex-center();
                    justify-content: center;
                    padding: 0 5px;
                    min-width: 33px;
                    height: 18px;
                    background: rgba(254, 236, 232, 1);
                    border-radius: 9px;
                    box-sizing: border-box;
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(252, 64, 17, 1);
                    margin-left: 10px;
                }
            }
            > dd {
                .flex-center();
                margin-top: 20px;
                > div {
                    .flex-center();
                    padding-right: 10px;
                    position: relative;
                    &::after {
                        content: " ";
                        position: absolute;
                        width: 1px;
                        height: 10px;
                        opacity: 0.2;
                        background: #979797;
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    > img {
                        width: 24px;
                        height: 24px;
                        display: block;
                        border-radius: 50%;
                    }
                    > span {
                        font-size: 12px;
                        font-weight: 500;
                        color: rgba(102, 102, 102, 1);
                        line-height: 24px;
                        margin-left: 10px;
                    }
                }
                > span {
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(180, 180, 180, 1);
                    line-height: 24px;
                    margin-left: 20px;
                }
            }
        }
        .join-item-end {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            > span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(180, 180, 180, 1);
                line-height: 24px;
            }
            .join-end-button {
                .flex-center();
                padding: 0 12px;
                height: 24px;
                background: rgba(255, 147, 0, 0.1);
                border-radius: 12px;
                cursor: pointer;
                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 147, 0, 1);
                border: 1px solid rgba(255, 147, 0, 0.2);
            }
            > p {
                font-size: 12px;
                font-weight: 400;
                color: rgba(244, 76, 76, 1);
                line-height: 24px;
                margin-top: 20px;
            }
        }
    }
}
</style>


