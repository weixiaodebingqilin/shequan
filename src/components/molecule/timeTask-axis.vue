<template>
    <li class="timeTask-axis">
        <dl :class="[classObject, 'timeTask']">
            <dt>
                <svg class="icon"
                     aria-hidden="true">
                    <use xlink:href="#iconwanchengdise"></use>
                </svg>
            </dt>
            <dd>
                <slot v-if="isToday"></slot>
                <section>
                    <div>
                        <h3>
                            <span></span>
                            情感化设计教程
                        </h3>
                        <text-hd :line='3'>
                            前几天在电影《设圈》中，看见了几个非常有意思的创意，今天就来分析一下几个字体，从零到完工的全部过程。
                        </text-hd>
                        <div class="show-star-box">
                            <show-star :nums='23'></show-star>
                            <show-star :nums='24'></show-star>
                        </div>
                    </div>
                    <img src="@/assets/images/temp/kind-native.png" />
                </section>
            </dd>
        </dl>
    </li>

</template>
<script>
import atomy from "@/components/atomy/mixins.js";
export default {
    name: "timeTask-axis",
    components: {
        textHd: atomy.textHd,
        showStar: atomy.showStar
    },
    props: {
        isToday: {
            type: Boolean,
            default: false
        },
        isHad: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};
    },
    computed: {
        classObject() {
            return {
                today: this.isToday,
                had: this.isHad
            };
        }
    }
};
</script>
<style lang="less" scoped>
.timeTask-axis {
    &:last-child {
        .timeTask {
            > dt {
                &::after {
                    background: transparent;
                }
                &::before {
                    content: "";
                    width: 2px;
                    height: 15px;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(222, 222, 222, 1);
                }
            }
        }
    }
}
.timeTask {
    display: flex;
    > dt {
        width: 24px;
        margin-right: 17px;
        position: relative;
        &::after {
            content: "";
            width: 2px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(222, 222, 222, 1);
        }
        > svg {
            display: block;
            font-size: 24px;
            position: relative;
            z-index: 2;
        }
    }
    > dd {
        flex: 1;
    }
    &.today {
        > dt {
            > span {
                margin-top: 0;
            }
        }
        nav {
            display: flex;
            line-height: 24px;
            font-size: 16px;
            margin: 0 0 19px 15px;
            > span {
                width: 64px;
                height: 24px;
                text-align: center;
                color: #fff;
                background: rgba(3, 191, 140, 1);
                border-radius: 11px;
                margin-right: 15px;
            }
            > p {
                color: rgba(153, 153, 153, 1);
            }
        }
        section {
            border-radius: 8px;
            padding: 15px;
            border-color: rgba(3, 191, 140, 1);
            flex-direction: row-reverse;
            > img {
                margin: 0 15px 0 0;
            }
        }
    }
    section {
        height: 120px;
        padding: 15px 0 15px 15px;
        border: 1px solid transparent;
        display: flex;
        > img {
            width: 180px;
            height: 120px;
            border-radius: @bradius;
            margin: 0 0 0 15px;
        }
        > div {
            flex: 1;
            > h3 {
                height: 24px;
                line-height: 24px;
                font-size: 18px;
                color: rgba(51, 51, 51, 1);
                margin-bottom: 2px;
            }
            .show-star-box {
                display: flex;
                margin-top: 8px;
            }
        }
    }
}
</style>


