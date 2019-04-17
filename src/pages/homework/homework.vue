<template>
    <!-- 批改作业 -->
    <div id="homework">
        <section class="work-head">
            <div>
                今天 · <font>办公室场景插图</font>
            </div>
            <p>请为您带领的设计师们，验收学习成果吧～被设置为不符合主题将会被退回，您可以将违规或<span>与主题无关</span>
            的作品退回并说明理由，若用户当天没有再次重新提交作业，将被算作缺练没有坚持，
            <span>退回理由将会公示在公屏。</span>点击作品可查看详情。
            </p>
        </section>
        <section class="work-main">
            <div class="main-nav">
                <ul>
                    <li class="nav-active">未查阅 <span>240</span></li>
                    <li>全部</li>
                    <li>精选</li>
                    <li>不合格</li>
                </ul>
                <div>提交批改</div>
            </div>
            <ul class="main-list">
                <li v-for="(item,index) in 25" :key="index" :class="index === 3 ?'active-correct1':''">
                    <div class="handpick">精选</div>
                    <img src="@/assets/images/temp/homework-list.png" >
                    <div class="work-explain">
                        <h6>@KIM_会飞的鱼 </h6>
                        <p>嗯，圈主教的太好了！经历了这么多天我居然会画这种插画了</p>
                    </div>
                    <div class="correct">不符合主题</div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
    name: 'homework',

}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
#homework{
    width: @wap;
    margin: 0 auto;
    .center{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .work-head{
        padding: 30px 0;
        margin-top: 20px;
        border:1px solid rgba(84,120,235,0.1);
        >div{
            padding: 0 30px 15px;
            font-size:18px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:24px;
            border-bottom:1px solid rgba(239,239,239,1);
            >font{
                color:rgba(84,120,235,1);
            }
        }
        >p{
            padding: 20px 30px 0;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:28px;
            >span{
                color: #F44C4C;
            }
        }
    }
    .work-main{
        .main-nav{
            padding: 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >ul{
                display: flex;
                .nav-active{
                    color: #5478EB;
                }
                >li{
                    margin-right:26px;
                    padding:0 12px; 
                    height:28px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    background:rgba(84,120,235,0.1);
                    border-radius:14px;
                    >span{
                        color: #999999;
                        padding-left: 12px;
                    }
                    .center();
                }
            }
            >div{
                width:88px;
                height:28px;
                background:rgba(84,120,235,1);
                border-radius:2px;
                .center();
                font-size:14px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:14px;
            }
        }
        .main-list{
            display: flex;
            width: 200px;
            flex-wrap: wrap;
            width: 100%;
            >li{
                &:nth-child(5n){
                    margin-right: 0;
                }
                position: relative;
                margin-right: 20px;
                margin-bottom: 30px;
                >img{
                    display: block;
                    height: 200px;
                }
                .handpick{
                    position: absolute;
                    top: 10px;
                    right: 10px;;
                    .center();
                    width:49px;
                    height:24px;
                    background:rgba(0,20,84,0.5);
                    border-radius:12px;
                    border:1px solid rgba(255,255,255,0.3);
                    
                }
                >.active-handpick{
                    background:linear-gradient(139deg,rgba(255,186,0,0.7) 0%,rgba(255,147,0,1) 100%);
                    border-image:linear-gradient(139deg, rgba(255,215,106,1), rgba(254,182,84,1)) 1 1;
                    border:1px solid;
                }
                .correct{
                    margin-top: 10px;
                    height:36px;
                    background:rgba(239,239,239,1);
                    border-radius:2px;
                    .center();
                    font-size:16px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(207,207,207,1);
                }
                >.active-correct1 .correct{
                    background:rgba(252,64,17,0.1);
                    color:rgba(252,64,17,1);
                }
                >.active-correct2 .correct{
                    background:rgba(252,64,17,1);
                    color:rgba(255,255,255,1);

                }
                .work-explain{
                    width: 180px;
                    padding: 10px 0 7px;
                    position: absolute;
                    bottom: 46px;
                    left: 50%;
                    background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
                    transform: translateX(-50%);
                    >h6{
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:14px;
                        padding-bottom: 7px;
                    }
                    >p{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(239,239,239,1);
                        line-height:16px;
                    }
                }
            }
        }
    }
}
</style>



