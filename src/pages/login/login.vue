<template>
    <section id="login">
        <header>
            <!-- <img src="@/assets/images/login/design.png" > -->
            <svg class="icon logo" aria-hidden="true">
                <use xlink:href="#iconlogo"></use>
            </svg>
            <p>欢迎来到属于设计师的圈子，和优秀的设计师们一起学习成长</p>
        </header>
        <div class="main">
            <table-native :clounms="kindNative" @tableMoveIndex="tableMoveIndex" :initIndex='initIndex'></table-native>
            
            <ul  >
                <li class="input-item">
                    <div>
                        <input  type="number" name="mobile"  placeholder="手机号码" 
                            v-model="mobile" :class="{error: !mobileState}"
                            max="11" maxlength="11" @blur="validateMoblie"
                        />    
                    </div> 
                    
                </li>
                <li class="input-item" v-if="kindeIndex === 0">
                    <div>
                        <input type="password" name="password" 
                            v-model="password"
                        placeholder="请输入密码" />
                    </div>
                    
                </li>
                <li class="input-item" v-if="kindeIndex === 1">
                    <div>
                        <input type="tel"
                         max="6" maxlength="6"
                         name="code" v-model="code"  placeholder="请输入短信验证码"
                        >
                    </div>
                    <p @click="getCode" :class="[{canget: mobileState}, {waite: outtime !== this.outText}]">{{outtime}}</p>
                </li>
            </ul>
                
            
            <!-- <ul v-if="kindeIndex === 1">
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
            </ul> -->
            <dl class="remember">
                <dt>
                    <img src="@/assets/images/icon/sure-gray.png" alt="记住用户名">
                    <p>记住用户名</p>
                </dt>
                <dd>
                    <p><router-link to="/register">注册</router-link></p>
                    <!-- <p><router-link to="/login">忘记密码</router-link></p> -->
                    <p>忘记密码</p>
                </dd>
            </dl>
            <p class="sbmt can" @click="loginto">登陆</p>
            
        </div>
        <footer>京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by @ 2009-2019 shequanpro.com</footer>
    </section>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
import {getCode, loginMessage, loginPassword} from '@/api/user.js'
import {reg} from '@/utils/validate.js'
import {cutDwon} from './utils.js'
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
            mobile: '',
            code: '',
            password: '',
            mobileState: true, // 手机号状态（
            inputType: 'password', // 密码框 input的属性
            outtime: '获取短信验证码', // 获取短信验证码显示内容
            outText: '获取短信验证码',
            times: 60, // 倒计时时间
            getCodeType: 'smslogin', // 短信验证码type
        }
    },
    methods: {
        tableMoveIndex(index){
            this.kindeIndex = index
        },
        loginto(){

        },
        validateMoblie(){
            this.mobileState = reg.phone.test(this.mobile)
        },
        
        // 短信验证码
        getCode(e){
            this.validateMoblie()
            if(!reg.phone.test(this.mobile)) return
            if(this.outtime !== this.outText) return
            this.outtime = this.times + 's'
            cutDwon(this.times,{
                doing: res => this.outtime = res + 's',
                end: res => this.outtime = this.outText    
            })
            
            getCode(this.mobile, this.getCodeType).then(res => {
                let msg = '发送失败,请重新获取'
                if(+res.status === 200){
                    msg = res.data.message
                    console.log('短信验证码为：',res.data.data)
                }
                console.log('msg', msg)
            })
        },
        loginto(){
            this.validateMoblie()
            if(!reg.phone.test(this.mobile)) return
            let _data = {
                mobile: this.mobile
            }
            let fn = [this.loginPswd,this.loginMsg][this.kindeIndex]
            fn(_data)
                
        },
        // 验证码登陆
        loginMsg(_data){
            loginMessage(this.code,_data).then(res => {
                console.log('resmgs: ', res)
            });
        },
        // 密码登陆
        loginPswd(_data){
            if(!this.password){
                console.log('密码不能为空')
                return
            }
            _data.password = this.password
            loginPassword(_data).then(res => {
                if(+res.status === 200){
                    res = res.data
                    console.log('密码登陆： ', res.message)
                    if(res.data && res.data.token){
                        localStorage.setItem('token', res.data.token)
                        this.$router.push({path: '/'})
                    }
                    
                }
            }); 
        }
    },
    watch: {
        mobile(nwe){
            // console.log(nwe.length)
            nwe.length > 11 && (this.mobile = this.mobile.slice(0,11))  
            this.mobileState = true
        }
    }
}
</script>
<style lang="less" >
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
        img,.logo{
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
            p{
                &:nth-child(1){
                    padding-right: 5px;
                    border-right: 1px solid rgba(153,153,153,0.2);
                    margin-right: 5px
                }
                a{
                    color:rgba(153,153,153,1);
                }
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
            border: 1px solid rgba(221,221,221,1);
            border-radius: 2px;
            &.error{
                border-bottom-color: red;
            }
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
        margin-left: 10px;
        cursor: not-allowed;
        &.canget{
            cursor: pointer;
            color:rgba(255,255,255,1);
            background:rgba(84,120,235,0.7);
        }
        &.waite{
            cursor: wait;
        }
    }
    
}
</style>


