<template>
    <section id="login">
        <header>
            <!-- <img src="@/assets/images/login/design.png" > -->
            <svg class="icon logo"
                 aria-hidden="true">
                <use xlink:href="#iconlogo-bluegary"></use>
            </svg>
            <p>欢迎来到属于设计师的圈子，和优秀的设计师们一起学习成长</p>
        </header>
        <div class="main">
            <table-native :clounms="kindNative"></table-native>
            <ul v-show="!keyNext">
                <li class="input-item">
                    <div>
                        <input type="text"
                               name="mobile"
                               placeholder="手机号码"
                               v-model="mobile"
                               :class="{error: !mobileState}"
                               max="11"
                               maxlength="11"
                               @blur="validateMoblie" />
                    </div>
                </li>
            </ul>
            <p v-show="!keyNext"
               class="sbmt can"
               @click="nextTodo">下一步</p>
            <!-- 第二步 -->
            <ul v-show="keyNext">
                <li class="input-item">
                    <div>
                        <input type="text"
                               name="mobile"
                               placeholder="手机号码"
                               v-model="mobile"
                               :class="{error: !mobileState}"
                               max="11"
                               maxlength="11"
                               @blur="validateMoblie" />
                    </div>
                </li>
                <li class="input-item">

                    <div>
                        <input type="tel"
                               class="hidde-inpt"
                               placeholder="请输入短信验证码" />
                        <input type="tel"
                               max="6"
                               maxlength="6"
                               name="code"
                               v-model="code"
                               placeholder="请输入短信验证码" />
                    </div>
                    <p @click="getCode"
                       :class="[{canget: mobileState}, {waite: outtime !== this.outText}]">{{outtime}}</p>
                </li>
                <li class="input-item">
                    <div>
                        <input type="text"
                               class="hidde-inpt"
                               placeholder="请输入密码" />
                        <input :type="inputType"
                               name="password"
                               v-model="password"
                               placeholder="请输入密码" />
                        <div class="password-item"
                             @click="changeTpyes">
                            <svg class="icon "
                                 aria-hidden="true">
                                <use v-show="this.inputType !== 'password'"
                                     xlink:href="#iconliulan"></use>
                                <use v-show="this.inputType === 'password'"
                                     xlink:href="#iconbukejian"></use>
                            </svg>
                        </div>
                    </div>
                </li>
            </ul>

            <p v-show="keyNext"
               class="sbmt can"
               @click="restPassword">完成</p>
            <section class="has-account">已有账号?<router-link to="/login">登陆</router-link>
            </section>
        </div>
        <footer>京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by @ 2009-2019 shequanpro.com</footer>
    </section>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import { getCode, restPassword } from "@/api/user.js";
import { reg } from "@/utils/validate.js";
import { cutDwon } from "./utils.js";
export default {
    name: "login",
    components: {
        tableNative: atomy.tableNative
    },
    data() {
        return {
            kindNative: ["重置密码"],
            mobile: "",
            code: "",
            password: "",
            mobileState: true, // 手机号状态（
            inputType: "password", // 密码框 input的属性
            outtime: "获取短信验证码", // 获取短信验证码显示内容
            outText: "获取短信验证码",
            times: 60, // 倒计时时间
            getCodeType: "reset", // 短信验证码type
            ///
            keyNext: false
        };
    },
    methods: {
        changeTpyes() {
            this.inputType = this.inputType == "password" ? "text" : "password";
        },
        nextTodo() {
            if (!this.validateMoblie()) return;
            this.keyNext = true;
            this.password = "";
        },
        validateMoblie() {
            let isPhone = reg.phone.test(this.mobile);
            this.mobileState = isPhone;
            return isPhone;
        },

        // 短信验证码
        getCode() {
            if (!this.validateMoblie()) return;
            if (this.outtime !== this.outText) return;
            this.outtime = this.times + "s";
            cutDwon(this.times, {
                doing: res => (this.outtime = res + "s"),
                end: () => (this.outtime = this.outText)
            });

            getCode(this.mobile, this.getCodeType).then(res => {
                let msg = "发送失败,请重新获取";
                if (+res.status === 200) {
                    msg = res.data.message;
                    console.log("短信验证码为：", res.data.data);
                }
                console.log("msg", msg);
            });
        },

        // 重置密码
        restPassword() {
            let _data = {
                mobile: this.mobile,
                password: this.password
            };
            restPassword(this.code, _data).then(res => {
                console.log("res: ", res);
                if (!res.data.flag) {
                } else {
                }
                alert(res.data.message);
                this.$router.push({ path: "/" });
            });
        }
    },
    watch: {
        mobile(nwe) {
            // console.log(nwe.length)
            nwe.length > 11 && (this.mobile = this.mobile.slice(0, 11));
            this.mobileState = true;
        }
    }
};
</script>



