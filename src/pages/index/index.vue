<template>
    <div id="index">
        <div class="index-native">
            <ul >
                <li>加入圈子</li>
                <li>视频教程</li>
                <li>直播课</li>
                <li>求职推荐</li>
                <li>职业规划</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {

        }
    },
    // 组件的生命周期
    created(){

    },
    // 我们要写的一些方法
    methods: {

    }
}
</script>
<style lang="less" src='@/assets/style/glob.less'></style>

<style lang="less">
#index{
    .index-native{
        height:120px;
        background:rgba(255,255,255,1);
        box-shadow:0px 4px 12px 0px rgba(6,67,67,0.1);
        >ul{
            width: 1080px;
        }

    }
}
</style>

