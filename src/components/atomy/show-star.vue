<template>
    <dl class="show-star">
        <dt></dt>
        <dd>{{nums}}</dd>
    </dl>
</template>
<script>
export default {
    name: 'show-star',
    props: {
        nums: {
            type: Number,
            default: 0
        },
        types: {
            type: String,
            validator: function(value){
                return [,'star', 'comment'].includes(value);
            },
            default: 'star'
        }
    }
}
</script>

<style lang="less" scoped>
.show-star{
    display: flex;
    margin-right: 15px;
    dt{
        min-width: 14px;
        height: 14px;
        margin-right: 4px;
        background: rgba(12, 22, 23, .4)
    }
    dd{
        height:14px;
        line-height:14px;
        font-size:12px;
        color:rgba(180,180,180,1);
        
    }
}
</style>

