<template>
    <header id="glob-top">
        <section>
            <!-- logo -->
            <div class="top-logo">
                <img src="@/assets/images/icon/logo.png" />

                <dl>
                    <dt>设圈</dt>
                    <dd>高效学习</dd>
                </dl>
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
                <li>
                    <router-link to="/homework">批改作业</router-link>
                </li>
            </ul>
            <!-- 经验创作 -->
            <div class="top-create">
                <router-link to="/create">经验创作</router-link>
            </div>
            <!-- 搜索 -->
            <div class="top-search">
                <input type="text" />
                <div>
                    <img src="@/assets/images/icon/search.png">
                    <span>搜索</span>
                </div>
            </div>
            <!-- 行为 -->
            <div class="behavior">
                <!-- 写作 -->
                <p>加入主题</p>
                <!-- 登陆注册 -->
                <dl>
                    <dt>
                        <router-link to="/login">登陆</router-link>
                    </dt>
                    <dd>
                        <router-link to="/register">注册</router-link>
                    </dd>
                    <dd>
                        <router-link to="/mine"> / 个人中心</router-link>
                    </dd>
                </dl>
            </div>
        </section>

    </header>
</template>

<script>
export default {
    name: "my-header"
};
</script>


