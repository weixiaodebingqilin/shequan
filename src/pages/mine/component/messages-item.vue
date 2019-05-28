<template>
    <ul class="messages-item loadUp">
        <li>
            <div class="messages-item-img">
                <img src="@/assets/images/temp/category-product.png">
            </div>
            <dl>
                <dt>
                    <h5>公告</h5>
                    <span>05/24 13:20</span>
                </dt>
                <dd>
                    <p>本周华为即将举报手机主题大赛，请大家记的关注哦～ </p>
                    <p>带来一场属于体验设计师的干货分享！</p>
                    <p>带你了解为全球 300w+设计者和开发者带来友好研发体验的设计体系！</p>
                </dd>
            </dl>

        </li>
    </ul>
</template>
<script>
export default {
    name: "messages-item",
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
.messages-item {
    .flex-center {
        display: flex;
        align-items: center;
    }
    padding: 0 30px;
    > li {
        cursor: pointer;
        display: flex;
        padding: 30px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        .messages-item-img {
            > img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: block;
            }
        }
        > dl {
            flex: 1;
            margin-left: 20px;
            > dt {
                .flex-center();
                > h5 {
                    font-size: 14px;
                    font-weight: bold;
                    color: rgba(102, 102, 102, 1);
                    line-height: 14px;
                    position: relative;
                    padding-right: 10px;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 1px;
                        height: 10px;
                        background: rgba(151, 151, 151, 0.2);
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                > span {
                    margin-left: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(180, 180, 180, 1);
                    line-height: 14px;
                }
            }
            > dd {
                margin-top: 15px;
                > p {
                    font-size: 13px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 26px;
                }
            }
        }
    }
}
</style>


