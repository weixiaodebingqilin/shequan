<template>
    <header id="glob-top">
        <section>
            <!-- logo -->
            <div class="top-logo">
                <svg class="icon"
                     aria-hidden="true">
                    <use xlink:href="#iconlogo-blue"></use>
                </svg>
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
                <p @click="keyCreate = !keyCreate">经验创作</p>
                <ul v-if="keyCreate"
                    @click="closeCreate">
                    <li>
                        <router-link to="/create-article">经验创作</router-link>
                    </li>
                    <li>
                        <router-link to="/create-circle">主题圈</router-link>
                    </li>
                    <li>
                        实战训练
                    </li>
                </ul>
                <!-- <router-link to="/create">经验创作</router-link> -->
            </div>
            <!-- 搜索 -->
            <div class="top-search"
                 @click="search">
                <!-- <input type="text" /> -->
                <div>
                    <svg class="icon"
                         aria-hidden="true">
                        <use xlink:href="#iconsousuo-copy"></use>
                    </svg>

                    <span>搜索</span>
                </div>
            </div>
            <!-- 行为 -->
            <div class="behavior">
                <!-- 写作 -->
                <!-- <p>加入主题</p> -->
                <!-- 登陆注册 -->
                <dl v-if="!isLogin">
                    <dt>
                        <router-link to="/login">登陆</router-link>
                    </dt>
                    <dd>
                        <router-link to="/register">注册</router-link>
                    </dd>
                    <!-- <dd>
                        <router-link to="/mine"> / 个人中心</router-link>
                    </dd> -->
                </dl>
                <div class="nav-myinfo"
                     v-else>
                    <router-link to="/register"
                                 class="nav-notification">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconxiaoxi"></use>
                        </svg>
                    </router-link>
                    <nav class="nav-mymenu">
                        <img src="@/assets/images/temp/header.png"
                             @click="keyMymenu = !keyMymenu"
                             alt="头像" />
                        <ul v-show="keyMymenu">
                            <li v-for="item in mymenu"
                                :key='item.name'
                                @click="closeMenu">
                                <router-link :to="item.url">
                                    <em>
                                        <svg class="icon"
                                             aria-hidden="true">
                                            <use :xlink:href="item.icon"></use>
                                        </svg>
                                    </em>

                                    <p>{{item.name}} </p>
                                </router-link>
                            </li>

                            <li @click="logOut">
                                <em>
                                    <svg class="icon"
                                         aria-hidden="true">
                                        <use xlink:href="#iconsousuo-copy"></use>
                                    </svg>
                                </em>
                                <p>退出</p>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

    </header>
</template>

<script>
export default {
    name: "my-header",
    inject: ["app"],
    data() {
        return {
            isLogin: false, //是否登陆
            keyMymenu: false, // 显示mymenu
            keyCreate: false, //显示创作
            mymenu: [
                {
                    name: "我的主页",
                    url: "/mine",
                    icon: "#iconzhuye"
                },
                {
                    name: "我的收藏",
                    url: "/mine",
                    icon: "#icontuijian1"
                },
                {
                    name: "我的作业",
                    url: "/mine",
                    icon: "#iconzuoye"
                },
                {
                    name: "我的加入",
                    url: "/mine",
                    icon: "#iconzhandou"
                },
                {
                    name: "我的钱包",
                    url: "/mine",
                    icon: "#iconqianbao"
                },
                {
                    name: "资料设置",
                    url: "/mine",
                    icon: "#iconshezhi"
                },
                {
                    name: "已购项目",
                    url: "/mine",
                    icon: "#icongoumai"
                }
            ]
        };
    },
    created() {
        this.setIsLogin();
        this.setClick();
    },
    methods: {
        closeCreate() {
            if (!this.keyCreate) return;
            this.keyCreate = false;
        },
        setClick() {
            document.addEventListener("click", this.clo);
        },
        clo(e) {
            if (!this.$el.contains(e.target)) {
                this.closeMenu();
                this.closeCreate();
            }
        },
        setIsLogin() {
            let token = Cookies.get("token");
            this.isLogin = !!token;
        },
        closeMenu() {
            if (!this.keyMymenu) return;
            this.keyMymenu = false;
        },
        logOut() {
            this.closeMenu();
            this.app.romveToken();
            this.$router.push({
                path: "/login"
            });
        },
        search() {
            this.$router.push({
                path: "/search"
            });
        }
    },
    destroyed() {
        document.removeEventListener("click", this.clo);
    }
};
</script>


