<template>
    <ul class="homework-item loadUp">
        <li>
            <h5>10步完成仙气十足林间小鹿插画<span>老木聊C4D</span></h5>
            <p>这个作业我真的是已经使出了浑身解数，太不容易了。大家多多指教！</p>
            <ol>
                <li><img src="@/assets/images/temp/circle-banner.png"></li>
                <li><img src="@/assets/images/temp/circle-banner.png"></li>
                <li><img src="@/assets/images/temp/circle-banner.png"></li>
                <li><img src="@/assets/images/temp/circle-banner.png"></li>
            </ol>
            <dl>
                <dt>
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>23</span>
                </dt>
                <dt>
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>223</span>
                </dt>
            </dl>
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
        padding: 30px 0 34px;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        > h5 {
            .flex-center();
            font-size: 20px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
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
        > p {
            margin-top: 20px;
            font-size: 13px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 13px;
        }
        > ol {
            display: flex;
            flex-wrap: wrap;
            padding-top: 15px;
            > li {
                margin: 4px 4px 0 0;
                > img {
                    display: block;
                    width: 110px;
                    height: 110px;
                }
            }
        }
        > dl {
            .flex-center();
            > dt {
                .flex-center();
                margin-right: 20px;
                margin-top: 20px;
                > span {
                    font-size: 12px;
                    margin-left: 10px;
                    font-weight: 400;
                    color: rgba(180, 180, 180, 1);
                    line-height: 24px;
                }
                > svg {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>


