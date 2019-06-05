<template>
    <div class="dk-switch-group">
        <slot></slot>
    </div>
</template>
<script>
import { findComponentsDownward } from "../../utils/assist";
import Emitter from "../../mixins/emitter";
import { setTimeout } from "timers";
export default {
    name: "dk-switch-group",
    mixins: [Emitter],
    props: {
        // 传入的值
        value: {
            type: Array,
            default() {
                return [];
            }
        },
        // 是否为多选, 为单选时互斥
        multiple: {
            type: [Boolean, String],
            default: false
        }
    },
    data() {
        return {
            currentValue: [],
            childrens: [],
            isMultiple: this.multiple,
            oldIndex: 0
        };
    },
    mounted() {
        this.init(this.value);
    },
    methods: {
        init(value) {
            let values = this.isMultiple ? this.initValue(value, 0) : value;
            this.currentValue = values;
            this.updateModel(true, values);
        },
        updateModel(update, value) {
            this.childrens = findComponentsDownward(this, "dk-switch");
            if (this.childrens) {
                this.childrens.forEach((child, i) => {
                    if (update) {
                        child.beIcon = value[i];
                        child.index = i;
                        child.group = true;
                    }
                });
            }
        },
        initValue(arr, index) {
            let num = index;
            let values = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] && num === i) {
                    this.oldIndex = i;
                    values.push(true);
                } else {
                    num++;
                    values.push(false);
                }
            }
            this.$emit("onChange", values);
            return values;
        },
        // 此处可用old来纪录
        change(index) {
            if (this.isMultiple && +index !== +this.oldIndex) {
                // 如果是单选 修改oldIndex相关的内容
                this.childrens[this.oldIndex].beIcon = false;
                this.currentValue[this.oldIndex] = false;
                this.oldIndex = index;
            }
            this.currentValue[index] = !this.currentValue[index];
            this.$emit("onChange", this.currentValue);
        }
    },
    watch: {
        value(now) {
            setTimeout(() => {
                // 重新渲染是个异步的过程
                this.currentValue = now;
                this.updateModel(true, this.currentValue);
            }, 20);
        },
        multiple(now) {
            this.isMultiple = now;
            this.init(this.currentValue);
        }
    }
};
</script>
