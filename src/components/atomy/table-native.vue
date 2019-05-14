<template>
    <dl class="table-native">
        <dt :style="kindStyle"></dt>
        <dd v-for="(item,index) in clounms" :key="item"
            :class="{active: index === kindIndex}" 
            @click="tableMove(index,$event)"
            ref="dd"
        >
            {{item}}
        </dd>
    </dl>
</template>
<script>
export default {
    name: 'table-native',
    props: {
        // 标题
        clounms: {
            type: Array,
            default: () => []
        },
        // 初始时选中的索引值
        initIndex: {
            type: Number,
            default: 0
        }
    },
    computed: {
        
    },
    data(){
        return{
            kindStyle: {},
            kindIndex: this.initIndex,
        }
    },
    mounted(){
        this.initWidth()
    },
    methods: {
        initWidth(){
            let index = this.kindIndex > this.clounms.length ? this.clounms.length : this.kindIndex
            let frist = this.$refs.dd[index]
            this.tableMove(index,frist)
        },
        tableMove(index,event){
            let elem = event.target || event   // 初始化的时候， event即为dom节点没有target
            this.kindIndex = index
            this.kindStyle = Object.assign({},this.kindStyle,{
                left: elem.offsetLeft + 'px',
                width: elem.offsetWidth + 'px'
            })
            this.$emit('tableMoveIndex', index)
        }
    },

}
</script>
<style lang="less" scoped>
dl.table-native{
    display: flex;
    padding: 30px 0 14px;
    border-bottom: 1px solid rgba(239,239,239,1);
    position: relative;
    >dt{
        width: 66px;
        height:2px;
        background:rgba(84,120,235,1);
        border-radius:@bradius;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all .4s;
    }
    >dd{
        width: auto;
        height: 22px;
        line-height: 22px;
        margin-right: 50px;
        font-size:16px;
        color:rgba(153,153,153,1);
        text-shadow: -4px 1px 3px  rgba(89, 125, 243, 0);
        cursor: pointer;
        transition: all @transTime;
        &.active{
            color:rgba(84,120,235,1);
            font-weight: bold;
            // text-shadow: 2px 1px 3px  rgba(89, 125, 243, 0.4);
        }

    }
}
</style>


