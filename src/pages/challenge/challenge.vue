<template>
    <div id="challenge">
        <div class="main">
            <section class="challenge-top">
                <div class="challenge-banner">
                    <img src="@/assets/images/temp/challenge-banner.png" >
                    <span>挑战</span>
                </div>
                <dl class="top-cont">
                    <dt>
                        <h2>
                            简约插画30天挑战训练
                            <span>该模式连续坚持完30天退还所有保证金</span>
                        </h2>
                        <text-hd>
                            学习是自己的，有收获就有付出，没有付出就一定没有收获。在这里我将每天带领大家一起学习插画，每天完成一些简单插画的作业。成功需要的是坚持，如果你想学习到东西。那请你对自己保证吧。30天实战挑战练习，你还在等什么？百见不如一练，来吧，用行动说话！
                        </text-hd>
                        <dl class="challenge-careful">
                            <dt>注意：</dt>
                            <dd>
                                <text-hd>本着监督自身积极学习的态度，用实际行动说话，为自己保证。该模式需要先支付99元对抗金，完成老师每天带领的练习后将所有保证金！但是若此过程中有一天没有坚持完成练习，保证金将一分不退还。</text-hd>
                            </dd>
                        </dl>
                        <ul class="challenge-popularity">
                            <li>
                                3459 <span>人参加</span>
                            </li>
                            <li>
                                32W <span>人气</span>
                            </li>
                        </ul>
                    </dt>
                    <dd>
                        <div class="challenge-day">
                            <img src="@/assets/images/icon/challenge-day.png" >
                            <p>30</p>
                        </div>
                    </dd>
                </dl>
            </section>
        </div>
    </div>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'challenge',
    components: {
        textHd: atomy.textHd
    },
}
</script>

<style lang="less">
@import '~@/assets/style/glob.less';
#challenge{
    padding-top: 30px;
    background: #F8F9FF;
    .main{
        width: @wap;
        margin: 0 auto;
    }
    .challenge-top{
        box-shadow: 0px 4px 12px 0px rgba(84,120,235,0.1);
        .top-cont{
            padding: 30px ;
            display: flex;
            >dt{
                flex: 1;
                >h2{
                    height:32px;
                    line-height:32px; 
                    font-size:24px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    margin-bottom: 25px;
                    span{
                        display: inline-block;
                        height:30px;
                        line-height:30px; 
                        padding: 0 15px;
                        font-size:14px;
                        color:rgba(3,191,140,1);
                        border-radius:16px;
                        border:1px solid rgba(3,191,140,1);
                        margin-left: 15px;
                    }
                }
            
            }
            >dd{

            }
        }
        .challenge-careful{
            display: flex;
            width: 720px;
            padding: 15px;
            margin: 15px auto 30px;
            background:rgba(246,246,246,1);
            dt{
                width:43px;
                height:24px;
                line-height:24px;
                font-size:14px;
                color:rgba(255,147,0,1); 
            }
            dd{
                flex: 1;
            }
        }
        .challenge-popularity{
            display: flex;
            li{
                height:20px;
                line-height:20px;
                font-size:20px;
                font-weight:500;
                color:rgba(102,102,102,1);
                padding-right: 28px;
                margin-left: 16px;
                &:first-child{
                    border-right: 2px solid rgba(151,151,151,1);
                }
                span{
                    color: #999999;
                    font-size: 12px;
                }
            }
        }
    } 
    .challenge-banner{
        position: relative;
        width: 100%;
        height: 260px;
        overflow: hidden;
        >img{
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }
        >span{
            display: inline-block;
            height: 38px;
            line-height: 38px;
            padding: 0 29px;
            border-radius: 20px;
            font-size:18px;
            color:rgba(255,255,255,1);
            background:rgba(0,20,84,0.7);
            position: relative;
            z-index: 2;
            margin: 30px 0 0 30px;
        }
    }
}
</style>
