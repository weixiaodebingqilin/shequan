<template>
    <p class="text-hd" :style="[boxLine,{'height':boxHeigth}]">
        <slot></slot>
    </p>
</template>
<script>
export default {
    name: 'text-hd',
    props:{
        line: {
            type: Number,
            default: 2
        },
    },
    /**
     * @codereview by heytoo 20190406
     */
    computed: {
        boxHeigth(){
            return this.line * 24 + 'px'
        },
        boxLine(){
            return {'-webkit-line-clamp':this.line}
        }
    },
    mounted(){
        
        
    },
    methods:{
        
    }
}
</script>
<style lang="less">
.text-hd{
    display: -webkit-box;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    /*如果该行末端有个很长的英文单词，它会把单词截断，一部分保持在行尾，另一部分换到下一行。*/
    // word-break:break-all; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 24px;
}
</style>


