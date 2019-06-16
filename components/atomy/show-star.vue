<template>
    <dl class="show-star">
        <dt>
            <svg class="icon"
                 aria-hidden="true">
                <use xlink:href="#icondianzan"></use>
            </svg>
        </dt>
        <dd>{{nums}}</dd>
    </dl>
</template>
<script>
export default {
    name: "show-star",
    props: {
        nums: {
            type: Number,
            default: 0
        },
        types: {
            type: String,
            validator: function(value) {
                return [, "star", "comment"].includes(value);
            },
            default: "star"
        }
    }
};
</script>

<style lang="less" scoped>
.show-star {
    display: flex;
    margin-right: 15px;
    align-items: center;
    dt {
        min-width: 14px;
        margin-right: 4px;
    }
    dd {
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        color: rgba(180, 180, 180, 1);
    }
}
</style>

