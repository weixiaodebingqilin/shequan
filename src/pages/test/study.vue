<template >
    <div class="study">
        <!--1. click.native 原生事件； click自定义事件 -->
        <dk-switch @click="choice"
                   @click.native='pclick'>
            <template slot="text">
                设置定时发送
            </template>
        </dk-switch>

        <!-- 2. provide inject -->
        <As></As>
        <Bs></Bs>
        <broadcastA></broadcastA>
        <!-- 3  多选-->
        <dk-switch-group :value="switchs"
                         @onChange='onChange'>
            <dk-switch forLable>
                <template slot="text">
                    非整个组件点击事件
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhahafalse
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
        </dk-switch-group>
        <hr />
        <!-- 4  单选-->
        <dk-switch-group :value="switchs2"
                         multiple
                         @onChange='onChange'>
            <dk-switch forLable>
                <template slot="text">
                    非整个组件点击事件1
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    hhaha
                </template>
            </dk-switch>
        </dk-switch-group>
    </div>
</template>
<script>
import As from "./components/provide-inject/A";
import Bs from "./components/provide-inject/B.vue";
import broadcastA from "./components/dispatch-broadcast/A";
export default {
    name: "study",
    provide: {
        name: "study的provide，studys"
    },
    components: { As, Bs, broadcastA },
    data() {
        return {
            switchs: [
                true,
                false,
                true
            ],
            switchs2: [
                false,
                false,
                true,
                true,
                true,
                true,
                true,
                true
            ],
        }
    },
    methods: {
        onChange(v) {
            console.log('switchsvvvvvv ', v);
        },
        choice(i) {
            console.log('switchs: ', this.switchs);
        },
        pclick(event) {
            // console.log("pppppp: ", event);
        }
    }
};
</script>
