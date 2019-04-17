<template>
    <div class="category-challenge" >
        <ul>
            <li v-for="(item,index) in 4" :key="index">
                <img src="@/assets/images/temp/challenge-item.png">
                <dl>
                    <dt>
                        <img src="@/assets/images/temp/challenge-item.png">
                        <h5>插画30天挑战计划</h5>
                    </dt>
                    <dd>连续30天，在我的带领下，学习并完成当日作品，你将能够学会设计插画，提升自己的插画水平，在坚持中成长，学习中进步。加油，有付出就有收获。</dd>
                    <div>
                        <p>已有2101人参加</p>
                        <img src="@/assets/images/temp/challenge-item.png">
                        <span>44570</span>
                    </div>
                </dl>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'category-challenge'
}
</script>
<style lang="less">
.category-challenge{
    >ul{
        >li{
            display: flex;
            padding: 15px 0;
            >img{
                width: 340px;
                height: 160px;
                border-radius: 3px;
            }
            >dl{
                flex: 1;
                padding-left: 20px;
                >dt{
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    >img{
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                    }
                    >h5{
                        font-size:18px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:24px;
                    }
                }
                >dd{
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:28px;
                    height: 84px;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                }
                >div{
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    >p{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(84,120,235,0.7);
                        line-height:14px;
                        padding-right: 10px;
                        border-right: 1px solid rgba(239,239,239,1);
                    }
                    >img{
                        width: 15px;
                        height: 10px;
                        margin: 0 9px 0 15px;
                    }
                    >span{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                        line-height:24px;
                    }
                }
            }
        }
    }
}
</style>


