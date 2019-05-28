<template>
    <ul class="combat-item loadUp">
        <li>
            <div class="combat-item-img">
                <div class="projects-timer">
                    <span>30天</span>
                    <span>实战</span>
                </div>
                <img src="@/assets/images/temp/author-works2.png">
            </div>
            <dl>
                <dt>
                    <h5>插画是如何从0到落地的？</h5>
                </dt>
                <div>
                    <span>
                        <font>最新</font>
                    </span>糖果图标的绘制
                </div>
                <dd>
                    <div>
                        <img src="@/assets/images/temp/category-product.png">
                        <span>千夜Ryan_Vision</span>
                    </div>
                    <p>进度12/30</p>
                    <span>有效期至：2020/05/30</span>
                </dd>
            </dl>
        </li>
    </ul>
</template>
<script>
export default {
    name: "combat-item",
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
/*combat-item**/
.combat-item {
    .flex-center {
        display: flex;
        align-items: center;
    }
    padding: 0 30px;
    > li {
        cursor: pointer;
        padding: 30px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        .flex-center();
        .combat-item-img {
            position: relative;
            > img {
                width: 255px;
                height: 120px;
                border-radius: 2px;
                display: block;
                margin-right: 20px;
            }
            .projects-timer {
                position: absolute;
                top: 10px;
                left: 10px;
                display: flex;
                padding: 0 10px;
                height: 24px;
                background: rgba(0, 0, 0, 0.5);
                border-radius: 12px;
                border: 1px solid rgba(68, 68, 68, 1);
                align-items: center;
                > span {
                    font-size: 14px;
                    color: rgba(181, 181, 181, 1);
                    line-height: 14px;
                    &:nth-child(1) {
                        border-right: 1px solid rgba(68, 68, 68, 1);
                        padding-right: 7px;
                        margin-right: 7px;
                    }
                }
            }
        }
        > dl {
            flex: 1;
            > div {
                display: flex;
                margin-top: 20px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                > span {
                    display: block;
                    padding: 4px;
                    margin-right: 5px;
                    border-radius: 4px;
                    border: 1px solid rgba(3, 191, 140, 1);
                    > font {
                        font-size: 12px;
                        color: rgba(3, 191, 140, 1);
                        line-height: 10px;
                        transform: scale(0.8);
                        display: block;
                    }
                }
            }
            > dt {
                .flex-center();
                > h5 {
                    font-size: 20px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    line-height: 24px;
                    max-width: 460px;
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
                margin-top: 32px;
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
                > p {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 20px;
                    margin-left: 10px;
                }
                > span {
                    flex: 1;
                    text-align: right;
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(180, 180, 180, 1);
                    line-height: 24px;
                }
            }
        }
    }
}
</style>


