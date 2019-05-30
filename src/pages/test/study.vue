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
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import As from "./components/provide-inject/A";
import Bs from "./components/provide-inject/B.vue";
import broadcastA from "./components/dispatch-broadcast/A";
export default {
    name: "study",
    provide: {
        name: "study的provide，studys"
    },
    components: { dkSwitch: atomy.dkSwitch, As, Bs, broadcastA },
    methods: {
        choice(i) {
            console.log(i);
        },
        pclick(event) {
            console.log("pppppp: ", event);
        }
    }
};
</script>
