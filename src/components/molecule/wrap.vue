<template>
    <ul :class="{'category-erap loadUp':1,'showTitle':!showTitle}">
        <li v-for="(item,index) in 10"
            :key="index">
            <div v-if="showTitle">
                <span>最新</span>
                <font>03-01</font>
                <p>今天这篇文章是我经常用在实际项目中的方法</p>
            </div>
            <dl>
                <img src="@/assets/images/temp/category-product.png">
                <div>
                    <h5>产品设计师是什么？</h5>
                    <p>介绍产品设计师是什么，与普通UI的区别，以及如何晋升。前段时间有朋友来询问，产品设计师是一个什么样的岗位，要负责哪些工作？我其实是比较奇怪的，这个概念已经兴起了一两年了，从阿里的全链路设计师到产品设计师。本以为...</p>
                    <ol>
                        <li>
                            <svg class="icon"
                                 aria-hidden="true">
                                <use xlink:href="#icondianzan"></use>
                            </svg>
                            <span>23</span>
                        </li>
                        <li>
                            <svg class="icon"
                                 aria-hidden="true">
                                <use xlink:href="#iconhuifu"></use>
                            </svg>
                            <span>23</span>
                        </li>
                        <li>
                            <svg class="icon"
                                 aria-hidden="true">
                                <use xlink:href="#iconliulan"></use>
                            </svg>
                            <span>6548</span>
                        </li>
                        <li v-if="!showTitle"
                            class="date-time">
                            <svg class="icon"
                                 aria-hidden="true">
                                <use xlink:href="#iconliulan"></use>
                            </svg>
                            <span>2019/03/18</span>
                        </li>
                    </ol>
                </div>
            </dl>
        </li>
    </ul>
</template>
<script>
export default {
    name: "category-erap",
    props: {
        // 标题
        clounms: {
            type: Array,
            default: () => []
        },
        // 初始时选中的索引值
        showTitle: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="less">
/*category-wrap**/

.category-erap {
    padding: 15px 20px;
    background: #fff;
    > li {
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        > div {
            display: flex;
            align-items: center;
            padding: 15px 0;
            > span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 56px;
                height: 24px;
                background: rgba(3, 191, 140, 1);
                border-radius: 13px;
                font-size: 12px;

                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                margin-right: 10px;
            }
            > font {
                font-size: 18px;

                font-weight: 500;
                color: rgba(102, 102, 102, 1);
            }
            > p {
                font-size: 12px;

                color: rgba(153, 153, 153, 1);
                line-height: 24px;
                position: relative;
                padding-left: 23px;
                &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 10px;
                    width: 3px;
                    height: 3px;
                    background: rgba(153, 153, 153, 1);
                    border-radius: 50%;
                }
            }
        }
        > dl {
            display: flex;
            padding-top: 5px;
            > img {
                width: 180px;
                height: 120px;
                border-radius: 3px;
            }
            > div {
                flex: 1;
                padding-left: 15px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                > h5 {
                    font-size: 18px;

                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    line-height: 24px;
                    margin-bottom: 2px;
                }
                > p {
                    font-size: 12px;

                    color: rgba(102, 102, 102, 1);
                    line-height: 24px;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    height: 72px;
                }
                > ol {
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    > li {
                        display: flex;
                        align-items: center;
                        margin-right: 14px;
                        > img {
                            display: block;
                            width: 12px;
                            height: 12px;
                        }
                        > span {
                            font-size: 12px;

                            color: rgba(153, 153, 153, 1);
                            line-height: 14px;
                        }
                        > svg {
                            margin-right: 5px;
                        }
                    }
                    .date-time {
                        flex: 1;
                        display: flex;
                        justify-content: flex-end;
                        color: #999999;
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
.showTitle {
    padding-top: 0;
    > li {
        padding-top: 25px;
    }
}
</style>


