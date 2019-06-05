<template>
    <div class="dk-switch"
         @click="switchClick">
        <div class="dk-switch-icon"
             @click="iconClick">
            <slot name="icon">
                <em :class="{active: beIcon}"></em>
            </slot>
        </div>
        <p class="dk-switch-text">
            <slot name="text"></slot>
        </p>
    </div>
</template>
<script>
import { findComponentUpward } from "../../utils/assist";
import Emitter from "../../mixins/emitter";
export default {
    name: "dk-switch",
    mixins: [Emitter],
    props: {
        // 是否选择
        likeIcon: {
            type: Boolean,
            default: false
        },
        // 点击事件  是否使用整个组件点击事件
        forLable: {
            type: Boolean,
            default: false
        }
    },
    provide() {
        return {
            rootSwitch: this
        };
    },
    data() {
        return {
            beIcon: this.likeIcon,
            isLable: this.forLable,
            group: false,
            parent: ""
        };
    },
    mounted() {
        this.parent = findComponentUpward(this, "dk-switch-group");
        if (this.parent) {
            this.group = true;
        }
    },
    methods: {
        change() {
            this.beIcon = !this.beIcon;
            this.$emit("click", this.beIcon);
            if (this.group) {
                //this.index 在group里面的索引值  vue自带
                this.parent.change(this.index);
            }
        },
        iconClick() {
            this.isLable && this.change();
        },
        switchClick() {
            !this.isLable && this.change();
        }
    }
};
</script>



