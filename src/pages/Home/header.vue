<template>
    <header class="glob-top">
    <section>
            <!-- logo -->
        <div class="top-logo">
            <img src="@/assets/images/icon/logo.png" >
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
        <!-- 搜索 -->
        <div class="top-search">
            <input type="text"  />
            <div>
                <img src="@/assets/images/icon/search.png" >
                <span>搜索</span>
            </div>
        </div>
        <!-- 行为 -->
        <div class="behavior">
            <!-- 写作 -->
            <p>加入主题</p>
            <!-- 登陆注册 -->
            <dl>
                <dt>登陆</dt>
                <dd>注册</dd>
            </dl>
        </div>
    </section>
    
</header>
</template>

<script>
export default {
    name: 'my-header',
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/glob.less';
.glob-top{
    
    background:rgba(84,120,235,1);
    font-size:14px;
    color:rgba(255,255,255,1);
    
    >section{
        width: @wap;
        height:60px;
        display: flex;
        // justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    .top-logo{
        display: flex;
        align-items: center;
        >img{
            width: 24px;
            height: 33px;
            margin: 0 15px 0 0;
        }
        >dl{
            max-width: 50px;
            min-width: 42px;
            dt{
                height: 28px;
                line-height: 28px;
                font-size:20px;
                font-weight: 600;
            }
            dd{
                width: 200%;
                height: 13px;
                line-height: 13px;
                font-size: 18px;
                transform: scale(0.5);
                transform-origin: 0;
            }
        }
    }
    .top-native{
        display: flex;
        flex: 1;
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
    .top-search{
        display: flex;
        justify-content: center;
        align-items: center;
        >input{
            width: 90px;
            height: 20px;
            margin-right: 6px; 
            background: transparent;
            border: 1px solid transparent;
            transition: all .3s ease-out;
            border-radius: 30px;
            padding-left: 10px;
            color: #fff;
            &:focus{
                width: 100px;
                border-color: #fff; 
            }
        }
        >div{
            display: flex;
            cursor: pointer;
            align-items: center;
            img{
                width: 14px;
                height: 14px;
                margin-right:10px;
            }
            span{
              font-size: 14px;

            }
        }
        
    }
    .behavior{
        display: flex;
        align-items: center;
        margin-left: 100px;
        > p{
            width:86px;
            height:30px;
            line-height: 30px;
            border-radius:15px;
            border:1px solid rgba(255,255,255,1);
            font-size:12px;
            text-align: center;
            cursor: pointer;
        }
        > dl{
            display: flex;
            margin-left: 15px;
            >dt{
                margin-right: 20px;
                position: relative;
                cursor: pointer;
                &::after{
                    content: '/';
                    position: absolute;
                    right: -12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #fff;
                }
            }
            >dd{
                cursor: pointer;
            }
        }
    }
}
</style>

