<template>
    <div id="home">
        <header class="glob-top">
            <!-- logo -->
            <div class="top-logo">

            </div>
            <!-- native  暂时别管样式  这里为了项目结构-->
            <ul class="top-native">
                <li>
                    <router-link to="/index">首页</router-link>
                </li>
                <li>
                    <router-link to="/article">文章页</router-link>
                </li>
                <li>
                    <router-link to="/category">专题圈</router-link>
                </li>
                <li>
                    <router-link to="/challenge">挑战</router-link>
                </li>
                <li>
                    <router-link to="/combat">实战</router-link>
                </li>
            </ul>
            <!-- 搜索 -->
            <div class="top-search"></div>
            <!-- 行为 -->
            <div class="behavior">
                <!-- 写作 -->
                <!-- 登陆注册 -->
            </div>
        </header>
        <router-view />
        <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '@/pages/Home/footer.vue'
export default {
    name: 'home',
    components: {
        myFooter
    }
}
</script>
<style lang="less">
.glob-top{
    height:60px;
    background:rgba(84,120,235,1);
    font-size:14px;
    color:rgba(255,255,255,1);
    ul.top-native{
        display: flex;
        >li{
            flex: 1;
            line-height:60px;
            text-align: center;
            a{
                display: block;
                color:rgba(255,255,255,1);
            }
        }
    }
}
</style>


