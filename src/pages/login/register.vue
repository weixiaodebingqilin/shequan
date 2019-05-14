<template>
    <section id="login">
        <header>
            <img src="@/assets/images/login/design.png" >
            <p>欢迎来到属于设计师的圈子，和优秀的设计师们一起学习成长</p>
        </header>
        <div class="main">
            <table-native :clounms="kindNative" ></table-native>
            <ul >
                <li class="input-item">
                    <div>
                        <input  type="text" name="mobile"  placeholder="手机号码" 
                            v-model="mobile" :class="{error: !mobileState}"
                            max="11" maxlength="11" @blur="validateMoblie"
                        />    
                    </div>    
                </li>
                <li class="input-item">
                    <div class="hidde-inpt">
                        <input type="text"
                          placeholder="请输入短信验证码"
                        />                      
                    </div>
                    <div>
                        <input type="tel"  class="hidde-inpt"
                          placeholder="请输入短信验证码"
                        />
                        <input type="tel"
                         max="6" maxlength="6"
                         name="code" v-model="code"  placeholder="请输入短信验证码"
                        />
                    </div>
                    <p @click="getCode" :class="[{canget: mobileState}, {waite: outtime !== this.outText}]">{{outtime}}</p>
                </li>
                <li class="input-item">
                    <div class="hidde-inpt">
                        <input type="password"
                          placeholder="请输入密码"
                        />    
                    </div>
                    <div>
                        <input type="text"  class="hidde-inpt"
                          placeholder="请输入密码"
                        />
                        <input :type="inputType" name="password" v-model="password" 
                            placeholder="请输入密码"
                        >
                        <div class="password-item"  @click="changeTpyes">
                            <svg class="icon " aria-hidden="true">
                                <use v-show="this.inputType !== 'password'" xlink:href="#iconliulan"></use>
                                <use v-show="this.inputType === 'password'" xlink:href="#iconbukejian"></use>
                            </svg>
                        </div>
                        
                    </div> 
                </li>
            </ul>
            <!-- <dl class="remember">
                <dt>
                    <img src="@/assets/images/icon/sure-gray.png" alt="记住用户名">
                    <p>我已阅读并接受<span>用户协议</span>和<span>隐私政策</span></p>
                </dt>
                
            </dl> -->
            <p class="sbmt can" @click="regist">注册</p>
            <section class="has-account">已有账号?<router-link to="/login">登陆</router-link></section>
        </div>
        <footer>京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by @ 2009-2019 shequanpro.com</footer>
    </section>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
import {getCode, regist} from '@/api/user.js'
import {reg} from '@/utils/validate.js'
import {cutDwon} from './utils.js'
export default {
    name: 'register',
    components: {
        tableNative: atomy.tableNative,
        
    },
    data(){
        return{
            kindNative: ['注册会员'],
            mobile: '',
            code: '',
            password: '',
            mobileState: true, // 手机号状态（
            inputType: 'password', // 密码框 input的属性
            outtime: '获取短信验证码', // 获取短信验证码显示内容
            outText: '获取短信验证码',
            times: 60, // 倒计时时间
            getCodeType: 'register', 
            
        }
    },
    computed: {
        
    },
    methods: {
        changeTpyes(){
            this.inputType = this.inputType == 'password' ? 'text' : 'password'
        },
        validateMoblie(){
            this.mobileState = reg.phone.test(this.mobile)
        },
        
        // 短信验证码
        getCode(e){
            this.validateMoblie()
            if(!this.mobileState) return
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
                }
                console.log('msg', msg)
            })
        },
        // 注册
        regist(){
            let _data = {
                mobile: this.mobile,
                password: this.password
            }
            regist(this.code, _data).then(res=>{
                console.log("res: ",res)
                if(!res.data.flag){
                    
                }else{

                }
                alert(res.message)
            })
        }
    },
    mounted(){
        this.code = ''
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



