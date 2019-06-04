<template>
    <div class="dk-switch-group">
        <slot></slot>
    </div>
</template>
<script>
import { findComponentsDownward } from '../../utils/assist';
import Emitter from '../../mixins/emitter';
export default {
    name: 'dk-switch-group',
    mixins: [Emitter],
    props: {
        // 传入的值
        value: {
            type: Array,
            default() {
                return []
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
            currentValue: this.value,
            childrens: [],
            isMultiple: this.multiple,
            oldIndex: 0,
        };
    },
    mounted() {
        let values = this.isMultiple ? this.initValue(this.value, 0) : this.value
        this.currentValue = values
        this.updateModel(true, values);
    },
    methods: {
        updateModel(update, value) {
            this.childrens = findComponentsDownward(this, 'dk-switch');
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
            let num = index
            let values = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] && num === i) {
                    this.oldIndex = i
                    values.push(true)
                } else {
                    num++
                    values.push(false)
                }
            }
            return values
        },
        // 此处可用old来纪录
        change(index) {
            if (this.isMultiple && +index !== +this.oldIndex) {
                this.childrens[this.oldIndex].beIcon = false
                this.currentValue[this.oldIndex] = false
                this.oldIndex = index
            }
            this.currentValue[index] = !this.currentValue[index];
            this.$emit('onChange', this.currentValue);
        }
    },
    watch: {
        value() {
            this.updateModel(true);
        }
    }
}
</script>
