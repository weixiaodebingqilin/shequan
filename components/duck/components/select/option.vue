<template>
    <li @click='select'
        class="dk-option"
        v-show="isShow">
        <div class="dk-option-row"
             :class="className">
            <div class="dk-option-text">{{value}}</div>
        </div>
    </li>
</template>

<script>
import Emitter from "../../mixins/emitter";
export default {
    name: "dkOption",
    inject: ["rootSelect"],
    mixins: [Emitter],
    props: {
        value: String,
        disabled: Boolean
    },
    data() {
        return {
            isActive: false,
            isShow: true
        };
    },
    computed: {
        className() {
            return {
                select: this.isActive,
                "is-disabled": this.disabled
            };
        }
    },
    mounted() {
        this.$on("clearValue", value => {
            if (this.value === value) {
                this.isActive = false;
            }
        });
        this.$on("groupValue", status => {
            if (this.disabled) {
                return;
            }
            switch (status) {
                case 0:
                    this.isActive = true;
                    this.emitParent();
                    break;
                case 1:
                    if (!this.isActive) {
                        this.isActive = status !== 2;
                        this.emitParent();
                    }
                    break;
                case 2:
                    this.isActive = false;
                    this.emitParent();
                    break;
                default:
            }
        });
        this.$on("matched", param => {
            this.isShow = !(this.value.indexOf(param) === -1);
            this.dispatch("dkOptionGroup", "groupshow", true);
        });
    },
    methods: {
        select() {
            if (!this.disabled) {
                if (this.rootSelect.multiple) {
                    this.isActive = !this.isActive;
                } else {
                    this.rootSelect.$children.map(item => {
                        item.isActive = false;
                    });
                    this.isActive = true;
                }
                this.emitParent();
            }
        },
        emitParent() {
            this.dispatch("dkSelect", "select", {
                label: this.value,
                check: this.isActive
            });
        }
    }
};
</script>
