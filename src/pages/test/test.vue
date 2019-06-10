<template>
    <section>
        <iframe src="http://player.bilibili.com/player.html?aid=6117110&cid=9931722&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"> </iframe>
        <p>wwww</p>
        <section class="text-cont">
            <!-- <ul v-for="(item) in articleList"
                :key="item.id">
                <li>
                    <h3>{{item.title}}</h3>
                    <div v-html="item.content"></div>
                </li>
            </ul> -->
        </section>
        <el-input type="text"
                  placeholder="这里写标题"
                  max="20"
                  v-model="tyTitle">
        </el-input>

        <tinymce @input='tinymceChange'></tinymce>
        <el-button @click="sbmtArticle">
            提交测试
        </el-button>
        <div style="margin-top: 60px">
            <el-input type="text"
                      placeholder="输入查询内容"
                      max="20"
                      v-model="searchKey">
            </el-input>
            <el-button @click="searchBykey">
                查询测试2
            </el-button>
            <section class="text-cont">
                <ul v-for="(item) in articleListSearch"
                    :key="item.id">
                    <li>
                        <h3>{{item.title}}</h3>
                        <div v-html="item.content"></div>
                    </li>
                </ul>
            </section>
        </div>
        <hr />
        <spit-text></spit-text>
    </section>
</template>
<script>
//组件
import tinymce from "@/components/Tinymce";
import atomy from "@/components/atomy/mixins.js";
import { debounce } from "@/utils/util.js";
import { articleAdd, articleQuery, articleQueryBykey } from "@/api/article.js";
export default {
    name: "test",
    components: { tinymce, spitText: atomy.spitText },
    data() {
        return {
            tyContent: "",
            tyTitle: "",

            articleList: [], // 文章列表
            articlePage: 1, // 文章第几页

            searchKey: "", // 根据关键字搜索
            articleListSearch: [],
            xx: 1
        };
    },
    methods: {
        sbmtArticle() {
            console.log("this.tyContent: ", this.tyContent);
            console.log("this.tyTitle: ", this.tyTitle);
            let _data = {
                title: this.tyTitle,
                image: "//img.cdn.shequanpro.com/timg-1560159491673.jpg", // 封面
                isPublic: false,
                themeCircleId: 1137639777894535168,
                content: this.tyContent,
                userId: 1135212201683062784,
                type: 1
            };
            articleAdd(_data).then(res => {
                console.log("res: res", res);
            });
        },
        tinymceChange(str) {
            console.log("str1111: ", str);
            this.tyContent = str;
        },
        searchBykey() {
            let _data = {
                key: this.searchKey,
                page: 1,
                size: 10
            };
            articleQueryBykey(_data).then(res => {
                console.log("res: ", res);
                this.articleListSearch = res.data.data.rows;
            });
        }
    },
    mounted() {
        articleQuery().then(res => {
            console.log("res: ", res);
            JSON.stringify;
            this.articleList = res.data.data;
        });
    }
};
</script>
<style lang="less">
.text-cont {
    ul {
        > li {
            margin: 40px 0;
        }
    }
}
</style>

