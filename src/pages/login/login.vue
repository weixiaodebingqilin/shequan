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
                        <input  type="text" name="mobile"  placeholder="手机号码" 
                            v-model="mobile" :class="{error: !mobileState}"
                            max="11" maxlength="11" @blur="validateMoblie"
                        />    
                    </div> 
                    
                </li>
                <li class="input-item" v-show="kindeIndex === 0">
                    <div>
                        <input type="password" name="password" 
                            v-model="password"
                        placeholder="请输入密码" />
                    </div>
                    
                </li>
                <li class="input-item" v-show="kindeIndex === 1">
                    <div class="hidde-inpt">
                        <input type="tel"
                          placeholder="请输入短信验证码"
                        >
                    </div>
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
                    <p><router-link to="/forgot">忘记密码</router-link></p>
                    <!-- <p>忘记密码</p> -->
                </dd>
            </dl>
            <p class="sbmt can" @click="loginto">登陆</p>
            <ul class="third-login">
                <li>
                    <div>
                        <i class="icon"></i>
                        <p>微信登陆</p>
                    </div>
                </li>
            </ul>
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
            this.code = ''
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
            if(!this.code){
                console.log('验证码不能为空')
                return
            }
            loginMessage(this.code,_data).then(res => {
                console.log('resmgs: ', res)  
                this.$router.push({path: '/'})
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
@import url('./login.less');

</style>


