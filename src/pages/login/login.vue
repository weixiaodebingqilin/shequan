<template>
    <section id="login">
        <header>
            <img src="@/assets/images/login/design.png" >
            <p>欢迎来到属于设计师的圈子，和优秀的设计师们一起学习成长</p>
        </header>
        <div class="main">
            <table-native :clounms="kindNative" @tableMoveIndex="tableMoveIndex" :initIndex='initIndex'></table-native>
            
            <ul   v-if="kindeIndex === 0">
                <li class="input-item">
                    <div>
                        <input type="text" name="mobile" placeholder="手机号码" maxlength="11">
                    </div>
                    
                </li>
                <li class="input-item">
                    <div>
                        <input type="text" name="mobile" placeholder="请输入密码">
                    </div>
                    
                </li>
            </ul>
                
            
            <ul v-if="kindeIndex === 1">
                    <li class="input-item">
                        <div>
                            <input type="text" name="mobile" placeholder="手机号码" maxlength="11">
                        </div>
                        
                    </li>
                    <li class="input-item">
                        <div>
                            <input type="text" name="mobile" placeholder="请输入密码">
                        </div>
                        
                        <p>获取短信验证码</p>
                    </li>
            </ul>
            <dl class="remember">
                <dt>
                    <img src="@/assets/images/icon/sure-gray.png" alt="记住用户名">
                    <p>记住用户名</p>
                </dt>
                <dd>
                    <p>注册</p>
                    <p>忘记密码</p>
                </dd>
            </dl>
            <p class="sbmt can">登陆</p>
            
        </div>
        <footer>京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by @ 2009-2019 shequanpro.com</footer>
    </section>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'login',
    components: {
        tableNative: atomy.tableNative,
        
    },
    data(){
        return{
            kindNative: ['密码登陆', '短信登陆'],
            initIndex: 0, //
            kindeIndex: 0,

        }
    },
    methods: {
        tableMoveIndex(index){
            this.kindeIndex = index
        }
    }
}
</script>
<style lang="less" >
@import '~@/assets/style/glob.less';
@wd: 400px;

#login{
    width: @wap;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    >header{
        width: @wd;
        margin: 130px auto 60px;
        text-align: center;
        img{
            width: 130px;
            height: 40px;
            margin-bottom: 20px;
        }
        p{
            height:14px;
            line-height:14px;
            font-size:14px;
            color:rgba(51,51,51,1);
            
        }
    }
    >.main{
        width: @wd;
        margin: 0 auto;
        text-align: center;
        dl.table-native{
            margin-bottom: 40px;
        }
        dl.table-native > dt{
            background: #333;
        }
        dl.table-native > dd.active{
            color: #333;
        }

    }
    >footer{
        text-align: center;
    }
    dl.remember{
        display: flex;
        justify-content: space-between;
        color:rgba(153,153,153,1);
        font-size:12px;
        dt{
            display: flex;
            cursor: pointer;
            img{
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }
        }
        dd{
            display: flex;
            cursor: pointer;
            p:nth-child(1){
                padding-right: 5px;
                border-right: 1px solid rgba(153,153,153,1);
                margin-right: 5px
            }
        }
    }
    .sbmt{
        width:@wd;
        height:48px;
        line-height: 48px;
        text-align: center;
        font-size:16px;
        color: #fff;
        margin: 40px auto 50px;
        
        box-shadow:0px 1px 6px 0px rgba(1,10,38,0.1),0px 1px 4px 0px rgba(84,120,235,0.1);
        border-radius:2px;
        &.can{
            background:linear-gradient(135deg,rgba(84,120,235,1) 0%,rgba(118,150,253,1) 100%);
            cursor: pointer;
        }
    }
}
.input-item{
    height:44px;
    line-height: 44px;
    border-radius:2px;
    margin-bottom: 30px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    >div{
        flex: 1;
        width: 100%;
        position: relative;
        >input{
            width: 100%;
            height: 46px;
            padding: 0 15px;
            position: absolute;
            top: -2px;
            left:  -2px;
            background:rgba(242,243,246,1);
            font-size:16px;
            color: #9396AB;
            box-sizing: border-box;
        }
    }
    >p{
        width:140px;
        height:44px;
        line-height: 44px;
        text-align: center;
        font-size:14px;
        color:rgba(153,153,153,1);
        background:rgba(239,239,239,0.7);
        border-radius:2px;
        margin-left: 30px;
        cursor: pointer;
    }
    
}
</style>


