<template>
    <li class="dk-option dk-option-group"
        v-show="isShow">
        <div class="dk-option-title">
            <div class="dk-option-row">
                <div class="dk-option-text">{{label}}</div>
            </div>
        </div>
        <ul>
            <slot></slot>
        </ul>
    </li>
</template>

<script>
import Emitter from "../../mixins/emitter";
export default {
    name: "dkOptionGroup",
    mixins: [Emitter],
    props: {
        label: String
    },
    data() {
        return {
            isShow: true
        };
    },
    mounted() {
        this.$on("groupshow", () => {
            this.isShow = this.$children.some(item => item.isShow);
        });
        this.$on("matched", param => {
            this.isShow = !(this.label.indexOf(param) === -1);
        });
    }
};
</script>
