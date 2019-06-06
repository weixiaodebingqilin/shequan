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
        <p>下面的单选或多选</p>
        <dk-switch-group :value="multiples"
                         multiple
                         @onChange='multonChange'>
            <dk-switch>
                <template slot="text">
                    单选
                </template>
            </dk-switch>
            <dk-switch>
                <template slot="text">
                    多选
                </template>
            </dk-switch>
        </dk-switch-group>
        <hr />
        <dk-switch-group :value="switchs2"
                         :multiple='isMult'
                         @onChange='onChange'>
            <dk-switch forLable
                       v-for="(item,i) in switchs2"
                       :key='i'>
                <template slot="text">
                    <section class="switch-item-content">
                        <input type="text"
                               placeholder="请输入内容"
                               v-model="ipts[i]" />
                        <ul class="operation">
                            <li @click="add(i,$event)">增加</li>
                            <li @click="dlt(i,$event)">删除</li>
                            <li @click="up(i,$event)">上</li>
                            <li @click="down(i,$event)">下</li>
                        </ul>
                    </section>

                </template>
            </dk-switch>

        </dk-switch-group>
        <hr />
        <dk-select v-model='value1'
                   placeholder="请选择语言">
            <dk-option value='Javascript'></dk-option>
            <dk-option value='C++'></dk-option>
            <dk-option value='PHP'
                       disabled></dk-option>
            <dk-option value='Java'></dk-option>
        </dk-select>
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
            switchs: [true, false, true],
            switchs2: [false, false, true, false, false, false, false, false],
            multiples: [true, false],
            isMult: true,
            ipts: [],
            value1: ""
        };
    },
    methods: {
        onChange(v) {
            console.log("switchsvvvvvv ", v);
            this.switchs2 = v;
        },
        choice(i) {
            console.log("switchs: ", this.switchs);
        },
        pclick(event) {
            // console.log("pppppp: ", event);
        },
        multonChange(v) {
            // 默认为单选
            console.log("multiplesv: ", v);
            if (v[0] || (!v[0] && !v[1])) {
                this.isMult = true;
            } else {
                this.isMult = false;
            }
            console.log("this.isMult: ", this.isMult);
        },
        up(i, el) {
            console.log("i,$event: ", i);
            if (i === 0) return;
            let tp = this.switchs2[i];
            this.$set(this.switchs2, i, this.switchs2[i - 1]);
            this.$set(this.switchs2, i - 1, tp);
            //
            let ip = this.ipts[i];
            this.$set(this.ipts, i, this.ipts[i - 1]);
            this.$set(this.ipts, i - 1, ip);
            //
        },
        down(i, el) {
            console.log("i,$event: ", i);
            if (i === this.switchs2.length - 1) return;
            let tp = this.switchs2[i];
            this.$set(this.switchs2, i, this.switchs2[i + 1]);
            this.$set(this.switchs2, i + 1, tp);
            //
            let ip = this.ipts[i];
            this.$set(this.ipts, i, this.ipts[i + 1]);
            this.$set(this.ipts, i + 1, ip);
        },
        add() {
            this.switchs2.push(false);
            this.ipts.push("");
        },
        dlt(i, el) {
            this.switchs2.splice(i, 1);
            this.ipts.splice(i, 1);
        }
    }
};
</script>
<style lang="less">
.switch-item-content {
    display: flex;
    .operation {
        display: flex;
        > li {
            width: 80px;
            text-align: center;
        }
    }
}
</style>

