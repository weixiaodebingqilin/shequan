<template>
    <ul class="homework-item loadUp">
        <li>
            <h5>在体验式设计之中，我们至少需要做到哪些关键点？</h5>
            <div>
                <div>
                    <img src="@/assets/images/temp/category-product.png">
                    <span>千夜Ryan_Vision</span>
                </div>
                <span>1230个回答</span>
            </div>
            <p>@微笑的冰欺凌：我认为在体验式设计之中，至少需要做到以下三点：1.让我们的设计符合商业化规则。2.让设计符合贴近用户。3.是以用户为中心的是以用户为中心的是以用户为中心的是以用户为中心的是以用户为中心的是以用户为中心的是以用户为中心的是以用户为中心的</p>

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
        cursor: pointer;
        padding: 30px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);
        > h5 {
            font-size: 20px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
        }
        > div {
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
                margin-left: 10px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(180, 180, 180, 1);
                line-height: 24px;
            }
        }
        > p {
            margin-top: 20px;
            font-size: 13px;
            font-weight: 400;
            color: rgba(180, 180, 180, 1);
            line-height: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }
}
</style>


