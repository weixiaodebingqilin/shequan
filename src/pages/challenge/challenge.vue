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
                        <ul class="chanllenge-schedule" v-if="tableIndex===0">
                            <!-- status 状态：['今日','今日已完成','已完成','未完成'] -->
                            <timeTaskAxis isToday>
                                <nav>
                                    <span>今天</span>
                                    <p>请在明日9:30之前提交练习作业</p>
                                </nav>
                            </timeTaskAxis>
                            <timeTaskAxis ></timeTaskAxis>
                            <timeTaskAxis ></timeTaskAxis>
                        </ul>
                        <!-- 挑战圈 -->
                        <div class="chanllenge-circle" v-if="tableIndex===1">
                            <ul class="circle-nav">
                                <li class="screen-active">全部</li>
                                <li>作业</li>
                                <li>精选</li>
                                <li>红名单</li>
                            </ul>
                            <ul class="circle-comment">
                                <li v-for="(item,index) in 5" :key="index">
                                    <img src="@/assets/images/temp/challenge-head.png" >
                                    <section>
                                        <h6>KIM_会飞的鱼 <span>刚刚</span></h6>
                                        <p><span>＃作业 </span> 嗯，圈主教的太好了！</p>
                                        <div class="comment-img">
                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                        </div>
                                        <dl>
                                            <dt class="green">
                                                <img src="@/assets/images/temp/challenge-comment.png" >
                                                <span>已批改</span>
                                            </dt>
                                            <dd class="dd-green">来！我把我把画笔给你，你来做圈主！</dd>
                                        </dl>
                                        <div class="comment-browse">
                                            <div>
                                                <img src="@/assets/images/temp/challenge-comment.png" >
                                                <span>320</span>
                                            </div>
                                            <div>
                                                <img src="@/assets/images/temp/challenge-comment.png" >
                                            </div>
                                        </div>
                                        <ol>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png" >
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png" >
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png" >
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png" >
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <button>展开更多评论</button>
                                        </ol>
                                    </section>
                                </li>
                            </ul>

                            <ul class="projects-page">
                                <li>1</li>
                                <li class="page-active">2</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>···</li>
                                <li>100</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div class="challenge-right">
                    <author-wrap></author-wrap>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import atomy from '@/components/atomy/mixins.js'
import molecule from  '@/components/molecule/mixins.js'
export default {
    name: 'challenge',
    components: {
        textHd: atomy.textHd,
        tableNative: atomy.tableNative,
        showStar: atomy.showStar,
        timeTaskAxis: molecule.timeTaskAxis,
        authorWrap: molecule.authorWrap,

    },
    data(){
        return{
            kindNative: ['日程','挑战圈'],
            tableIndex:0,
        }
    },
    methods: {
        tableMoveIndex(index){
            this.tableIndex=index;
        }
    }

    
}
</script>

<style lang="less">
@import '~@/assets/style/glob.less';
#challenge{
    padding-top: 30px;
    background: #F8F9FF;
    .challenge-left{
        width: 749px;
    }
    .challenge-right{
        width: 280px;
    }
    // 挑战圈
    .chanllenge-circle{
        .circle-nav{
            padding: 30px 0;
            display: flex;
            >li{
                padding: 0 12px;
                height:28px;
                display: flex;
                align-items: center;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:14px;
                border-radius:14px;
                margin-right: 26px;
            }
            .screen-active{
                background:rgba(84,120,235,0.1);
                color:rgba(84,120,235,1);
                font-weight: bold;
            }
        }
        .circle-comment{
            >li{
                padding: 15px 0;
                display: flex;
                border-bottom:1px solid rgba(242,242,242,1);
                >img{
                    width: 40px;
                    height: 40px;
                    display: block;
                    margin-right: 10px;
                }
                >section{
                    flex: 1;
                    >h6{
                        padding: 2px 0 10px;
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:14px;
                        >span{
                            font-size:12px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(189,189,189,1);
                            line-height:14px;
                            padding-left: 11px;
                        }
                    }
                    >p{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:#333333;
                        line-height:28px;
                        >span{
                            color:rgba(3,191,140,1);
                        }
                        margin-bottom: 15px;

                    }
                    .comment-img{
                        display: flex;
                        flex-wrap: wrap;
                        margin-bottom: 15px;
                        >img{
                            width: 100px;
                            height: 100px;
                            display: block;
                            margin-right: 10px;
                        }
                    }
                    >dl{
                        >dt{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width:88px;
                            height:24px;
                            border-radius:13px;
                            margin-bottom: 10px;
                            >img{
                                width: 10px;
                                height: 10px;
                                display: flex;
                                margin-right: 10px;
                            }
                            >span{
                                font-size:12px;
                                font-family:PingFangSC-Medium;
                                font-weight:500;
                                line-height:12px;
                            }
                        }
                        .green{
                            background:rgba(3,191,140,0.1);
                            border:1px solid rgba(3,191,140,0.4);
                            >span{
                                color:#03BF8C; 
                            }
                        }
                        .red{
                            background:rgba(252,64,17,0.1);
                            border:1px solid rgba(252,64,17,0.4);
                            >span{
                                color: #FC4011;
                            }
                        }
                        >dd{
                            font-size:12px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:#888888;
                            line-height:17px;
                            padding: 15px;
                            display: inline-block;
                            margin-bottom: 15px;
                            border-radius:2px;
                        }
                        .dd-green{
                            background:rgba(3,191,140,0.1);
                        }
                        .dd-red{
                            background:rgba(252,64,17,0.1);
                        }
                    }
                    .comment-browse{
                        display: flex;
                        align-items: center;
                        padding-bottom: 15px;
                        >div{
                            display: flex;
                            align-items: center;
                            margin-right: 15px;
                            >img{
                                width: 14px;
                                height: 14px;
                                margin-right: 6px;
                            }
                            >span{
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(102,102,102,1);
                                line-height:14px;
                            }
                        }
                    }
                    >ol{
                        padding:5px  15px 0;
                        background: #EFF0FA;
                        >li{
                            display: flex;
                            border-bottom:1px solid rgba(233,233,233,1);
                            &:last-child{
                                border-bottom:none;
                            }
                            >img{
                                width: 30px;
                                height: 30px;
                                display: flex;
                                margin-right: 10px;
                            }
                            >section{
                                flex: 1;
                                >h6{
                                    padding-top: 9px;
                                    padding-bottom: 5px;
                                    font-size:12px;
                                    font-family:PingFangSC-Medium;
                                    font-weight:500;
                                    color:rgba(51,51,51,1);
                                    line-height:12px;
                                    >span{
                                        padding-left: 10px;
                                        font-size:12px;
                                        font-family:PingFangSC-Medium;
                                        font-weight:500;
                                        color:rgba(189,189,189,1);
                                    }
                                }
                                >p{
                                    font-size:14px;
                                    font-family:PingFangSC-Regular;
                                    font-weight:400;
                                    color:rgba(51,51,51,1);
                                    line-height:28px;
                                    margin-bottom: 10px;
                                }
                                >div{
                                    display: flex;
                                    align-items: center;
                                    >div{
                                        display: flex;
                                        align-items: center;
                                        margin-right: 15px;
                                        >img{
                                            width: 14px;
                                            height: 14px;
                                            margin-right: 6px;
                                        }
                                        >span{
                                            font-size:12px;
                                            font-family:PingFangSC-Regular;
                                            font-weight:400;
                                            color:rgba(102,102,102,1);
                                            line-height:14px;
                                        }
                                    }
                                    padding-bottom: 10px;
                                }
                            }
                        }
                        >button{
                            padding: 0 0 15px;
                            margin: 0;
                            border: none;
                            background: transparent;
                            font-size:12px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(189,189,189,1);
                            line-height:17px;
                            outline: none;
                            margin-left: 40px;
                        }
                    }

                }

            }
        }
        .projects-page{
            display: flex;
            justify-content: center;
            padding: 60px 0;
            >li{
                display: flex;
                align-items: center;
                justify-content: center;
                width:39px;
                height:39px;
                background:rgba(232,232,232,1);
                border-radius: 50%;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:20px;
                margin-right: 20px;
                &:last-child{
                    margin-right: 0;
                }
            }
            .page-active{
                background: #5478EB;
                color: #fff;
            }
        }
    }
    // 挑战圈 end
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
    .challenge-cont{
        display: flex;
        justify-content: space-between;
    }
    .chanllenge-contBox{
        overflow: hidden;
    }
    ul.chanllenge-schedule{
        margin: 30px 0 30px;
    }


}
</style>
