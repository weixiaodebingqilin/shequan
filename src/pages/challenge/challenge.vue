<template>
    <div id="challenge">
        <div class="main">
            <section class="challenge-top">
                <div class="challenge-banner">
                    <img src="@/assets/images/temp/challenge-banner.png" />
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
                        <div class="chanlenge-money">
                            <dl>
                                <dt>￥99.00</dt>
                                <dd>保证金</dd>
                            </dl>
                            <p>
                                截止日期：
                                <span>2019年4月20日</span>
                            </p>
                        </div>
                        <div class="chanllenge-join">
                            <img src="@/assets/images/icon/join-right.png" >
                        </div>
                    </dd>
                </dl>
            </section>
            <!-- cont -->
            <section class="challenge-cont">
                <div class="challenge-left">
                    <nav class="challenge-cont-nav">
                        <table-native :clounms="kindNative" @tableMoveIndex="tableMoveIndex"></table-native>
                    </nav>
                    <section class="chanllenge-contBox">
                        <!-- 日程 -->
                        <ul class="chanllenge-schedule">
                            <!-- status 状态：['今日','今日已完成','已完成','未完成'] -->
                            <li class="today">
                                <dl>
                                    <dt></dt>
                                    <dd>
                                        <nav>
                                            <span>今天</span>
                                            <p>请在明日9:30之前提交练习作业</p>
                                        </nav>
                                        <section>
                                            
                                            <div>
                                                <h3>
                                                   <span></span> 
                                                   情感化设计教程
                                                </h3>
                                                <text-hd :line='3'>
                                                    前几天在电影《设圈》中，看见了几个非常有意思的创意，今天就来分析一下几个字体，从零到完工的全部过程。
                                                </text-hd>
                                                <div class="show-star-box">
                                                    <show-star :nums='23'></show-star>
                                                    <show-star :nums='23'></show-star>
                                                </div>
                                            </div>
                                            <img src="@/assets/images/temp/kind-native.png" />
                                        </section>
                                    </dd>
                                </dl>
                            </li>
                            <li class="had">
                                <dl>
                                    <dt></dt>
                                    <dd>
                                        <section>
                                            
                                            <div>
                                                <h3>
                                                   <span></span> 
                                                   情感化设计教程
                                                </h3>
                                                <text-hd :line='3'>
                                                    前几天在电影《设圈》中，看见了几个非常有意思的创意，今天就来分析一下几个字体，从零到完工的全部过程。
                                                </text-hd>
                                                <div class="show-star-box">
                                                    <show-star :nums='23'></show-star>
                                                    <show-star :nums='23'></show-star>
                                                </div>
                                            </div>
                                            <img src="@/assets/images/temp/kind-native.png" />
                                        </section>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                        <!-- 挑战圈 -->
                        <div class=""></div>
                    </section>
                </div>
                <div class="challenge-right"></div>
            </section>
        </div>
    </div>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'challenge',
    components: {
        textHd: atomy.textHd,
        tableNative: atomy.tableNative,
        showStar: atomy.showStar
    },
    data(){
        return{
            kindNative: ['日程','挑战圈']
        }
    },
    methods: {
        tableMoveIndex(index){

        }
    }

    
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
                width: 200px;
                margin-left: 30px;
                padding-left: 45px;
                border-left: 1px solid rgba(239,239,239,1);
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
    .challenge-day{
        width: 135px;
        height: 90px;
        margin: 0 auto;
        position: relative;
        > img{
            width: 135px;
            height: 90px;
        }
        > p{
            height:48px;
            line-height:48px;
            font-size:48px;
            font-weight:800;
            text-align: center;
            color:rgba(255,147,0,1);
            letter-spacing:1px;
            position: absolute;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .chanlenge-money{
        >dl{
            display: flex;
            font-weight:500;
            margin:10px auto 15px;
            height:24px;
            line-height:24px;
            vertical-align: bottom;
            justify-content: center;
            >dt{
                font-size:24px;                                
                color:rgba(255,147,0,1);
                margin-right:10px;
            }
            >dd{ 
                display: inline-block;               
                vertical-align: text-bottom;
                font-size:14px;                                
                color:rgba(153,153,153,1);
                
            }
        }
        >p{
            height:12px;
            line-height:12px;
            font-size:12px;
            color:rgba(153,153,153,1);
            text-align: center;
            margin-bottom: 15px;
        }
    }
    .chanllenge-join{
        width: 177px;
        height: 82px;
        margin: 0 auto;
        cursor: pointer;
        >img{
            width: 177px;
            height: 82px;
        }
    }
    // cont
    .challenge-cont-nav{
        display: flex;
    }
    ul.chanllenge-schedule{
        >li{
            display: flex;
            margin-top: 30px;
            &.today{
                nav{
                    display: flex;
                    line-height: 24px;
                    font-size: 16px;
                    margin-bottom: 19px;
                    >span{
                        width: 64px;
                        height:24px;
                        text-align: center;
                        color: #fff;
                        background:rgba(3,191,140,1);
                        border-radius:11px;
                        margin-right: 15px;
                    }
                    >p{
                        color:rgba(153,153,153,1);
                    }
                }
                section{
                    width: 692px;
                    border-radius:8px;
                    padding: 15px;
                    border-color: rgba(3,191,140,1);
                    flex-direction: row-reverse;
                    >img{
                        margin:0 15px 0 0;
                    }
                }
            }
            section{
                width:707px;
                height:120px;
                padding: 15px 0 15px 15px;
                border:1px solid transparent;
                display: flex;
                
                >img{
                    width: 180px;
                    height: 120px;
                    border-radius: @bradius;
                    margin:0 0 0 15px ;
                }
                >div{
                    flex: 1;
                    >h3{
                        height:24px;
                        line-height:24px;
                        font-size:18px;
                        color:rgba(51,51,51,1);
                        margin-bottom: 2px;
                    }
                    .show-star-box{
                        display: flex;
                        margin-top: 8px;
                    }
                }
            }
        }
    }
}
</style>
