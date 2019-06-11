<template>
    <ul class="exercise">
        <li class="exercise-item" v-for="(item,index) in 7"
                                      :key="index">
            <div>
                <img src="@/assets/images/temp/author-works2.png">
                <span>1/3</span>
            </div>
            <h5><span><font>精</font></span>超级插画风衣服篇特辑</h5>
            <ol>
                <li>
                    <svg class="icon"
                            aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>2019</span>
                </li>
                <li>
                    <svg class="icon"
                            aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>2019</span>
                </li>
                <li>
                    <svg class="icon"
                            aria-hidden="true">
                        <use xlink:href="#icondianzan"></use>
                    </svg>
                    <span>2019</span>
                </li>
            </ol>
        </li>
    </ul>
</template>
<script>
export default {
    name: "exercise",
    props: {
    }
};
</script>
<style lang="less">
/*combat-item**/
.exercise {
    .flex-center {
        display: flex;
        align-items: center;
    }
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    .exercise-item{
        width: 200px;
        margin-right: 20px;
        margin-bottom: 30px;
        &:nth-child(5n+5){
            margin-right: 0;
        }
        >div{
            position: relative;
            >img{
                display: block;
                width: 100%;
                height: 200px;
            }
            >span{
                position: absolute;
                font-size:14px;
                font-weight:500;
                color:#666666;
                line-height:14px;
                right: 10px;
                bottom: 10px;
            }
        }
        >h5{
            font-size:14px;
            font-family:PingFangSC-Medium;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:14px;
            margin: 10px 0;
            .flex-center();
            >span{
                .flex-center();
                margin-right: 10px;
                justify-content: center;
                width:19px;
                height:18px;
                background:rgba(255,147,0,1);
                border-radius:2px;
                
                >font{
                    transform: scale(.8);
                    font-size:12px;
                    font-weight:initial;
                    color:rgba(255,255,255,1);
                }
            }
            
        }
        >ol{
            .flex-center();
            >li{
                .flex-center();
                flex: 1;
                >span{
                    font-size:12px;
                    font-weight:400;
                    color:rgba(207,207,207,1);
                    line-height:14px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>


