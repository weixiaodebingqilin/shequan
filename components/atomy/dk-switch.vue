<template>
    <div class="dk-switch"
         @click="iconClick">
        <div class="dk-switch-icon">
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
export default {
    name: "dk-switch",
    props: {
        likeIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            beIcon: this.likeIcon
        };
    },
    methods: {
        iconClick() {
            this.beIcon = !this.beIcon;
            this.$emit("click", this.beIcon);
        }
    }
};
</script>

