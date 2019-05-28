<template>
    <ul class="homework-item loadUp">
        <li>
            <h5>请问下这个有附件可以下载吗？想下载这篇文章的资料。<span v-if="showSpan">老木聊C4D</span></h5>
            <div v-if="showContent">
                <p>《在体验式设计之中，我们至少需要做到哪些关键点？》</p>
                <div>
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>2019/03/18 17:20</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: "homework-item",
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
        },
        showSpan: {
            type: Boolean,
            default: true
        },
        showContent: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="less">
/*combat-item**/
.homework-item {
    .flex-center {
        display: flex;
        align-items: center;
    }
    padding: 0 30px;
    > li {
        padding: 30px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        > h5 {
            .flex-center();
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            font-size: 16px;
            line-height: 16px;
            > span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 24px;
                padding: 0 12px;
                background: rgba(153, 153, 153, 0.1);
                border-radius: 13px;
                margin-left: 20px;
            }
        }
        > div {
            margin-top: 20px;
            .flex-center();
            justify-content: space-between;
            > p {
                font-size: 16px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 16px;
            }
            > div {
                .flex-center();
                > span {
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    line-height: 14px;
                }
                > svg {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>


