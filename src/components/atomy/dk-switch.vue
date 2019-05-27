<template>
    <div class="dk-switch">
        <div class="dk-switch-icon"
             @click="iconClick">
            <slot name="icon">
                <em></em>
            </slot>
        </div>

        <slot name="text">

        </slot>
    </div>
</template>
<script>
export default {
    name: "dk-switch",
    props: {},
    data() {
        return {};
    },
    methods: {
        iconClick() {}
    }
};
</script>
<style lang="less">
.dk-switch {
    width: 100%;
    height: 20px;
    display: flex;
    .dk-switch-icon {
        margin-right: 5px;
    }
}
</style>


