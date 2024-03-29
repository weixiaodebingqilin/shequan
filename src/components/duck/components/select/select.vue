<template>
    <div class="dk-select">
        <div class="dk-select-input"
             @click.prevent="toggleMenu"
             @mouseover="mouseover"
             @mouseout="mouseout">
            <div class="dk-select-array"
                 v-show="multiple && checkArray.length">
                <div class="dk-select-array-content">
                    <span class="x-con-array">{{checkArray[0]}}</span>
                    <span class="dk-clearable-array"
                          @click.stop="clearValue">
                        <i class="dk-icon-x"></i>
                    </span>
                </div>
                <span v-if="checkArray.length > 1">+ {{checkArray.length - 1}}</span>
            </div>

            <input class="x-input"
                   readonly
                   ref="selectInput"
                   :class="{'is-focus': isActive}"
                   :disabled='disabled'
                   @focus.stop="focus"
                   :value="checkValue"
                   :placeholder="placeholder">

            <transition-group name="fade"
                              mode="out-in"
                              tag="div"
                              class="dk-select-icon">
                <div class="dk-clearable"
                     v-show="isClear"
                     key="1"
                     @click.stop="clearValue">
                    <i class="dk-icon-x"></i>
                </div>
                <i class="dk-arrow"
                   key="2"
                   v-show="!isClear"
                   :class="{'is-active': isActive}"></i>
            </transition-group>
        </div>

        <transition name="fade-up"
                    mode="out-in">
            <div class="dk-select-option"
                 :style="dropStyle"
                 v-show="isActive"
                 ref="optionEl">
                <div class="dk-select-search"
                     v-if="search">
                    <x-input iconBefore="dk-icon-search"
                             size="sm"
                             :clearable="true"
                             v-model="searchKey"
                             @input="searchEv" />
                </div>
                <ul>
                    <slot></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
let TimeId = null;
export default {
    name: "dkSelect",
    mixins: [Emitter],
    provide() {
        return {
            rootSelect: this
        };
    },
    props: {
        value: [String, Array],

        multiple: Boolean,
        placeholder: String,
        disabled: Boolean,
        search: [String, Boolean]
    },
    data() {
        return {
            isActive: false,
            checkValue: "",
            checkArray: [],
            dropStyle: null,
            isfocus: false,
            isClear: false,
            searchKey: "",
            dim: ""
        };
    },

    mounted() {
        this.getRect();
        document.addEventListener("click", e => {
            if (!this.$el.contains(e.target)) {
                this.close();
            }
        });
        this.$on("select", ({ label, check }) => {
            if (this.multiple) {
                if (check) {
                    this.checkArray.push(label);
                } else {
                    this.checkArray.splice(this.checkArray.indexOf(label), 1);
                }
                this.checkValue = this.checkArray.length ? " " : "";
                this.$emit("input", this.checkArray);
            } else {
                this.checkValue = label;
                this.close();
                this.$emit("input", this.checkValue);
            }
        });
        const search = this.search;
        if (search) {
            this.dim = "x" + search.replace(search[0], search[0].toUpperCase());
        }
    },
    methods: {
        getRect() {
            const SPACE = 5;
            const Rect = this.$el.getBoundingClientRect();
            const T = ~~Rect.height + 5;
            this.dropStyle = {
                minWidth: Rect.width + "px",
                top: T + "px"
            };
        },
        toggleMenu() {
            if (!this.disabled) {
                if (this.isfocus && this.isActive) {
                    this.close();
                } else {
                    this.show();
                    this.getRect();
                }
            }
        },
        close() {
            this.isfocus = false;
            this.isActive = false;
        },
        show() {
            this.searchKey = "";
            this.isActive = true;
            this.isfocus = true;
        },
        focus() {
            this.isActive = true;
        },
        mouseover() {
            if (!this.multiple && this.checkValue.length) {
                this.isClear = true;
            }
        },
        mouseout() {
            this.isClear = false;
        },
        clearValue() {
            let emitValue;
            if (this.multiple) {
                emitValue = this.checkArray.shift();
                this.$emit("input", this.checkArray);
                this.checkValue = this.checkArray.length ? " " : "";
            } else {
                emitValue = this.checkValue;
                this.$emit("input", (this.checkValue = ""));
            }
            this.broadcast("dkOption", "clearValue", emitValue);
        },
        searchEv() {
            clearTimeout(TimeId);
            TimeId = setTimeout(() => {
                this.broadcast(this.dim, "matched", this.searchKey);
            }, 100);
        }
    }
};
</script>
