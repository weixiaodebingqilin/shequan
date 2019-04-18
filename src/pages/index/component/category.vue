<template>
    <section class="index-category">
        <ul class="theme-wrap">
            <li v-for="(item,index) in 8" :key="index">
                <div class="theme-img">
                    <img src="@/assets/images/temp/theme-banner.png" >
                    <img src="@/assets/images/temp/homework-list.png" >
                </div>
                <div class="theme-title">
                    <h5>UI设计的奇妙世界</h5>
                    <p>微笑的冰欺凌，大厂丰富经验</p>
                    <div><span>试看</span>为什么你的界面总是不耐看？</div>
                </div>
                <div class="theme-msg">
                    <div>
                        <p>主题圈介绍</p>
                        <div>
                            <span>已更新23章</span>
                            <span>2101人参加</span>
                        </div>
                    </div>
                    <p>在奇妙世界每天会有实际项目中遇见的各种问题解析，带领大家提高设计的认知，指引设计师找到方向且提高设计能力，在学习过程中，优化设计思维，结交志同道合的设计...</p>
                    <dl>
                        <dt>￥398/年</dt>
                        <dd>
                            <img src="@/assets/images/temp/join-button.png" >
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'index-category'
}
</script>
<style lang="less" scoped>
.index-category{
    .theme-wrap{
        display: flex;
        flex-wrap: wrap;
        padding-top: 15px;
        >li{
            box-sizing: border-box;
            margin-bottom: 20px;
            overflow: hidden;
            width:365px;
            height:416px;
            border-radius:8px;
            border:1px solid rgba(84,120,235,0.1);
            margin-right: 20px;
            &:nth-child(2n+2){
                margin-right: 0;
            }
            .theme-img{
                >img{
                    &:nth-child(1){
                        width: 100%;
                        display: block;
                        height: 88px;
                    }
                    &:nth-child(2){
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                        overflow: hidden;
                        display: block;
                        margin-top: -23px;
                        margin-left: 20px;
                    }
                }
            }
            .theme-title{
                padding: 20px;
                border-bottom:1px solid rgba(239,239,239,1);
                >h5{
                    font-size:20px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:24px;
                }
                >p{
                    font-size:13px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:13px;
                    padding: 10px 0 18px;
                }
                >div{
                    display: flex;
                    align-items: center;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:18px;
                    >span{
                        display: flex;
                        width: 29px;
                        height: 18px;
                        align-items: center;
                        justify-content: center;
                        border-radius:4px;
                        border:1px solid rgba(3,191,140,1);
                        font-size:10px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(3,191,140,1);
                        line-height:10px;
                        margin-right: 6px;
                    }
                }
            }
            .theme-msg{
                padding: 20px 20px 0;
                >div{
                    padding-bottom: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    >p{
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:13px;
                    }
                    >div{
                        display: flex;
                        span{
                            font-size:12px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(153,153,153,1);
                            line-height:12px;
                            &:first-child{
                                padding-right: 10px;
                                margin-right: 10px;
                                border-right:1px solid rgba(84,120,235,0.1);
                            }
                        }
                    }
                }
                >p{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    margin-bottom: 10px;
                }
                >dl{
                    display: flex;
                    justify-content: space-between;
                    >dt{
                        font-size:18px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,147,0,1);
                        line-height:20px;
                        margin-top: 12px;
                    }
                    >dd{
                         >img{
                            display: block;
                        }  
                    }
                }
            }
        }
    }
}
</style>


