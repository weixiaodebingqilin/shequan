<template>
    <!-- 批改作业 -->
    <div id="search">
        <div class="search-box">
            <input type="text"
                   placeholder="请输入关键词">
            <div>
                <svg class="icon"
                     aria-hidden="true">
                    <use xlink:href="#iconsousuo-copy"></use>
                </svg>
            </div>
        </div>
        <div class="search-recommend">
            <div class="recommend-title">
                <svg class="icon"
                     aria-hidden="true">
                    <use xlink:href="#icontuijian"></use>
                </svg>
                <p>热门标签</p>
            </div>
            <ul class="recommend-tag">
                <li v-for="(item,index) in recTag"
                    :key="index">{{item}}</li>
            </ul>
            <div class="recommend-title">
                <svg class="icon"
                     aria-hidden="true">
                    <use xlink:href="#icontuijian"></use>
                </svg>
                <p>热门标签</p>
            </div>
            <ul class="recommend-sift">
                <li>
                    <p>插画是如何从0到落地的？</p>
                    <div></div>
                    <span>3483人加入</span>
                </li>
                <li>
                    <p>插画是如何从0到落地的？</p>
                    <div></div>
                    <span>3483人加入</span>
                </li>
            </ul>
        </div>
        <div class="search-result">
            <p class="search-result-title"><span>插画</span> 找到128个结果</p>
            <hot-find></hot-find>
        </div>
    </div>
</template>
<script>
import hotFind from "../index/component/hot-find";
export default {
    name: "search",
    components: {
        hotFind
    },
    data() {
        return {
            recTag: ["交互设计", "职场经验", "PS", "UI", "插画", "动效"]
        };
    },
    // 组件的生命周期
    created() {},
    // 我们要写的一些方法
    methods: {}
};
</script>

<style  lang="less">
#search {
    .search-result {
        width: 750px;
        margin: 60px auto 0;
        .search-result-title {
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            line-height: 16px;
            > span {
                color: rgba(84, 120, 235, 1);
                margin-right: 4px;
            }
        }
    }
    min-height: 600px;
    .flex-center {
        display: flex;
        align-items: center;
    }
    .search-box {
        .flex-center();
        width: 600px;
        height: 40px;
        background: rgba(247, 247, 247, 1);
        border-radius: 20px;
        border: 1px solid rgba(221, 221, 221, 1);
        margin: 60px auto 0;
        > input {
            flex: 1;
            border: none;
            background: transparent;
            outline: none;
            text-indent: 30px;
        }
        > div {
            height: 100%;
            padding: 0 30px;
            .flex-center();
        }
    }
    .search-recommend {
        width: 600px;
        margin: 0 auto;
        .recommend-title {
            padding: 20px 0;
            .flex-center();
            > p {
                font-size: 16px;
                font-weight: 500;
                color: rgba(102, 102, 102, 1);
                line-height: 18px;
                margin-left: 10px;
            }
        }
        .recommend-tag {
            .flex-center();
            > li {
                .flex-center();
                justify-content: center;
                font-size: 12px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 12px;
                padding: 0 20px;
                height: 32px;
                margin-right: 16px;
                background: rgba(243, 245, 247, 1);
                border-radius: 15px;
            }
        }
    }
    .recommend-sift {
        > li {
            .flex-center();
            padding: 10px 0;
            > div {
                flex: 1;
                border-top: 1px dashed rgba(239, 239, 239, 1);
                margin: 0 20px;
            }
            > p {
                font-size: 16px;
                font-weight: 500;
                color: rgba(102, 102, 102, 1);
                line-height: 24px;
                max-width: 400px;
                min-width: 180px;
            }
            > span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(180, 180, 180, 1);
                line-height: 24px;
            }
        }
    }
}
</style>



