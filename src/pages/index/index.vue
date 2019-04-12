<template>
    <div id="index">
        <test></test>
        <div class="index-native">
            <ul >
                <li>加入圈子</li>
                <li>视频教程</li>
                <li>直播课</li>
                <li>求职推荐</li>
                <li>职业规划</li>
            </ul>
        </div>
        <section>
            <!-- 左边 -->
            <div class="warp-left">
                <!-- 轮播 -->
                <div class="index-swiper">
                    <img src="@/assets/images/temp/Group.png">
                </div>
                <!-- kind-native -->
                <table-native :clounms="kindNative" @tableMoveIndex="tableMoveIndex"></table-native>
                <ul class="kind-box">
                    <card-artical></card-artical>
                </ul>
                <!-- 专题 special -->
                <section class="index-special">
                    <img src="@/assets/images/temp/Group2.png" >
                    <div >
                        <p>专题</p>
                        <div class="special-user">
                            <section>
                                <img src="@/assets/images/temp/header.png" >
                                <p>Seany</p>
                            </section>
                            <div>
                                <img src="@/assets/images/temp/browse.png" >   
                            </div>
                            
                            <p>502582</p>
                            <span>26篇文章</span>
                        </div>
                        <dl>
                            <dt>10000个知识点的大型快速复盘</dt>
                            <dd>
                                <text-hd >网络上有很多关于Icon设计的文章，一些文章从部分维度切入讲述Icon的设计理念，但大部分缺乏整体性，所以我尝试把自己的思考方式结合其他人的设计理念整理了一个完整的Icon设计法则。</text-hd>
                            </dd> 
                        </dl>
                    </div>
                    
                </section>
                <!-- others -->
                <ul class="kind-box">
                    <card-artical></card-artical>
                    <card-artical></card-artical>
                </ul>

                <!-- 知识点 -->
                <h1 style="margin:50px 0 20px">知识点</h1>
                <ul class="knowledge-wrap">
                    <li v-for="(item,index) in 4" :key="index">
                        <h5>8分钟学会LOGO的设计语言？</h5>
                        <!-- <video src=""></video> -->
                        <img class="know-video" src="@/assets/images/temp/video-banner.png" >
                        <div class="know-msg">
                            <div class="know-author">
                                <img src="@/assets/images/temp/header.png" >
                                <p>你丫才美工</p>
                                <span>《 设计大师是如何成长的》</span>
                            </div>
                            <div class="know-hot">
                                <img src="@/assets/images/temp/browse-big.png" >
                                <span>18274</span>
                                <img src="@/assets/images/temp/collect.png" >
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- 主题圈 -->
                <h1 style="margin:50px 0 20px">主题圈</h1>
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
            </div>
            <!-- 右边 -->
            <div class="warp-right">
                <!-- partner -->
                <ul class="index-partner">
                    <li>
                        <img src="@/assets/images/temp/Group20.png" >
                    </li>
                </ul>
                <dl class="index-entrance">
                    <dd>
                        <img src="@/assets/images/temp/plus.png" >
                        <span>分享经验</span>
                    </dd>
                    <dd>
                        <img src="@/assets/images/temp/answer.png" >
                        <span>付费答疑</span>
                    </dd>
                    <dt>
                        <img src="@/assets/images/temp/Group25.png" >
                    </dt>
                </dl>
                <!-- myjoin -->
                <dl class="myjoin">
                    <dt>
                        <span></span>
                        <p>我加入的</p>
                    </dt>
                    <dd>
                        <h3>专题圈</h3>
                        <ul class="right-special">
                            <li>
                                <div>
                                    <span>2</span>
                                    <h3>插画的世界-重塑你的画笔</h3>
                                    <p>刚刚</p>
                                </div>
                                <p>
                                    微笑的冰欺凌：今晚圈子答疑检查作业
                                </p>
                            </li>
                        </ul>     
                    </dd>
                    <dd>
                        <h3>抗魔计划</h3>
                        <ul class="right-combat">
                            <li>
                                <h4>动效30天</h4>
                                <p><span>10</span> / 30</p>
                            </li>
                            <li>
                                <h4>动效30天</h4>
                                <p><span>10</span> / 30</p>
                            </li>
                        </ul>     
                    </dd>
                </dl>
                <!-- 推荐圈主 -->
                <dl class="right-manager">
                    <dt>
                        <img src="@/assets/images/icon/flag.png" >
                        <h3>推荐圈主</h3>
                    </dt>
                    <dd>
                        <ul class="manager-list">
                            <li>
                                <img src="@/assets/images/temp/header.png" >
                                <dl>
                                    <dt>彩云Sky</dt>
                                    <dd>
                                        <p>22篇文章</p>
                                        <p>40k人气</p>
                                        <span>+关注</span>
                                    </dd>
                                </dl>
                                <div class="sicon-arrow"></div>
                            </li>
                            <li>
                                <img src="@/assets/images/temp/header.png" >
                                <dl>
                                    <dt>彩云Sky</dt>
                                    <dd>
                                        <p>22篇文章</p>
                                        <p>40k人气</p>
                                        <span>+关注</span>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </dd>
                    <dt class="manager-more">更多圈主</dt>
                </dl>
                <!-- 合作伙伴2 -->
                <!-- partner -->
                <ul class="index-partner">
                    <li>
                        <img src="@/assets/images/temp/Group20.png" >
                    </li>
                </ul>
                <!-- 热门标签 -->
                <dl class="hot-tags">
                    <dt>
                        <img src="@/assets/images/icon/hot-tags.png" >
                        <h3>热门标签</h3>
                    </dt>
                    <dd>
                        <ul>
                            <li>交互设计</li>
                            <li>职场精英</li>
                            <li>Ps</li>
                            <li>UI</li>
                            <li>插画</li>
                            <li>动效</li>
                        </ul>
                    </dd>
                </dl>
                
            </div>
        </section>
    </div>
</template>
<script>
// import cardArtical from '@/components/molecule/card-artical.vue'
import molecule from '@/components/molecule/mixins.js'
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'index',
    components: {
        cardArtical: molecule.cardArtical,
        textHd: atomy.textHd,
        test: atomy.test,
        tableNative: atomy.tableNative
    },
    data() {
        return {
            kindNative: ['最新发现','最新分享','专题圈','圈主'], ///
        }
    },
    // 组件的生命周期
    created(){

    },
    // 我们要写的一些方法
    methods: {
        // 导航栏切换后的回调
        tableMoveIndex(index){
            
        }
    }
}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
#index{
    .index-native{
        height:60px;
        background:rgba(255,255,255,1);
        box-shadow:0px 4px 12px 0px rgba(6,67,67,0.1);
        >ul{
            width: @wap;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            >li{
                padding: 0 20px;
                font-size:14px;
                color:rgba(153,153,153,1);
                position: relative;
                &::after{
                    content: '';
                    height: 14px;
                    width: 1px;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -7px;
                    background: rgba(151,151,151,1);
                    box-shadow: 1px 0 1px 1px rgba(151,151,151,0.1)
                }
            }
        }

    }
    /*主体内容*/
    >section{
        width: @wap;
        margin: 27px auto 60px;
        display: flex;
        justify-content:space-between;
    } 
}
.warp-left{
    width: @wapLeft;
    .index-swiper{
        width: 100%;
        height: 270px;
        position: relative;
        border-radius: @bradius;
        >img{
            width: 100%;
        }
    }
    
    
    .index-special{
        height: 166px;
        position: relative;
        margin: 16px 0;
        >img{
            width: 100%;
            height: 100%;
            border-radius: @bradius;
            position: absolute;
            top: 0;
            left: 0;
        }
        >div{
            padding: 20px;
            position: relative;
            z-index: 2;
            >p{
                display: inline-block;
                width: auto;
                height: 24px;
                line-height: 24px;
                padding: 0 12px;
                border-radius: 12px;
                font-size: 12px;
                color:rgba(255,255,255,1);
                background: rgba(0,0,0,.6);
            }
            .special-user{
                display: flex;
                height: 24px;
                line-height: 24px;
                font-size: 12px;
                float: right;
                color:rgba(239,239,239,1);
                >section{
                        padding-right:10px;
                        position: relative;
                        display: flex;
                        &::after{
                            content: '';
                            width: 1px;
                            height: 10px;
                            position: absolute;
                            top: 7px;
                            right: 0;
                            background: rgba(239,239,239,1);
                        }
                        >img{
                            width: 24px;
                            height: 24px;
                            margin-right: 10px;
                        }
                        >p{
                            color:rgba(255,255,255,1);
                        }
                }
                >div{
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    margin-left: 10px;
                    >img{
                        width: 12px;
                    }

                }
                >p{
                    margin-right: 10px;
                }
            }
            >dl{
                margin-top: 20px;
                color:rgba(255,255,255,1);
                >dt{
                    height: 24px;
                    line-height:24px;
                    font-size:22px;
                    font-weight:500;
                    -webkit-text-stroke:1px rgba(255,255,255,1);
                    text-stroke:1px rgba(255,255,255,1);
                    margin-bottom: 10px;
                }
                >dd{
                    line-height:24px;
                    font-size: 14px;
                }
            }
        }
        
    }
    // 知识点
    .knowledge-wrap{
       >li{
           border-bottom:1px solid rgba(242,242,242,1);
           >h5{
               font-size:18px;
                font-family:PingFangHK-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:18px;
                padding: 15px 0;
           }
           .know-video{
               display: block;
               height: 442px;
               width: 100%;
           }
           .know-msg{
               display: flex;
               justify-content: space-between;
               align-items: center;
               height: 54px;
               .know-author{
                   display: flex;
                   align-items: center;
                   >img{
                       width: 24rpx;
                       height: 24rpx;
                       border-radius: 50%;
                       margin-right: 10px;
                   }
                   >span{
                       position: relative;
                       padding-left: 15px;
                       margin-left: 15px;
                       &::after{
                           position: absolute;
                           content: '';
                           left: 0;
                           top: 50%;
                           transform: translateY(-50%);
                           height: 7px;
                           width: 1px;
                           background: rgba(151,151,151,1);
                       }
                   }
                   >p,>span{
                       font-size:14px;
                        font-family:PingFangHK-Medium;
                        font-weight:500;
                        color:rgba(102,102,102,1);
                        line-height:24px;
                   }
               }
               .know-hot{
                   display: flex;
                   align-items: center;
                   >img{
                       display: block;

                   }
                   >span{
                       font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(180,180,180,1);
                        line-height:24px;
                        margin: 0 30px 0 10px;
                   }
               }
           }
           
       } 
    }
    //主题圈
    .theme-wrap{
        display: flex;
        flex-wrap: wrap;
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
.warp-right{
    width: @wapRight;
    >.index-partner{
        >li{
            >img{
                width: 280px;
                height: 270px;
                border-radius: @bradius; 
            } 
        }
    }
    >.index-entrance{
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0;
        >dd{
            width: 132px;
            height: 38px;
            line-height: 38px;
            display: flex;
            border-radius: @bradius;
            background: rgba(84,120,235,.1);
            &:first-child{
                margin-right: 15px;
            }
            >img{
                width: 14px;
                height: 14px;
                margin: 12px 8px 0 26px;
            }
        }
        >dt{
            width: 278px;
            height: 88px;
            margin-top: 20px;
            text-align: center;
            border:1px solid rgba(255,108,71,0.2);
            >img{
                width: 242px;
                height: 50px;
                margin: 19px  auto 0 ;
            }
        }
    }
    .myjoin{
        margin-bottom: 40px;
        >dt{
            display: flex;
            padding-bottom: 10px;
            border-bottom:1px solid rgba(242,242,242,1);
            >span{
                width:18px;
                height:16px;
                margin-right: 10px;
                background: #5478EB;
            }
        }
        >dd{
            margin-top: 20px;
            >h3{
                height: 20px;
                line-height: 20px;
                padding-left: 14px;
                margin-bottom: 12px;
                font-size:14px;
                color:rgba(51,51,51,1);
                position: relative;
                overflow: hidden;
                &::before{
                    content: '';
                    width: 4px;
                    height: 14px;
                    position: absolute;
                    left: 0;
                    top: -7px;
                    transform: translate(0,50%);
                    background: #5478EB;
                }
            }
            
        }
    }
    .right-special{
        margin-top: 20px;
        >li{
            font-size: 12px;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom:1px solid rgba(242,242,242,1); 
            >div{
                display: flex;
                height: 18px;
                line-height: 18px;
                margin-bottom: 10px ;
                >span{
                    width: auto;
                    height: 18px;
                    padding: 0 5px;
                    border-radius: 9px;
                    color: rgba(252,64,17,1);
                    background: rgba(252,74,30,0.1);
                    margin-right: 10px;
                }
                >h3{
                    color:rgba(51,51,51,1);
                    flex: 1;
                }

            }
            >p{
                color:rgba(146,146,146,1);
            }
        }
        
    }
    .right-combat{
        margin-top: 20px;
        >li{
            font-size: 12px;
            display: flex;
            height:16px;
            line-height: 16px;
            margin-bottom: 18px;
            >h4{
                font-weight:400;
                color:rgba(51,51,51,1);
                flex: 1;
                
            }
            >p{
                min-width: 40px;
            }
        }
    }
    .right-manager{
        >dt:first-child{
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(242,242,242,1);
            display: flex;
            >img{
                width: 16px;
                height: 18px;
                margin-right: 11px;
            }
            >h3{
                height:18px;
                line-height:18px;
                font-size:18px;
                color:rgba(51,51,51,1);
                
            }
        }
        >dd{
        
        }
    }
    ul.manager-list{
        margin-top: 20px;
        >li{
            height: 40px;
            padding-bottom: 14px;
            margin-bottom: 14px;
            display: flex;
            position: relative;
            &::before{
                content: '';
                height: 2px;
                width: 82%;
                position: absolute;
                bottom: 0;
                right: 0;
                background-color: rgba(242,242,242,1);
                transition: all @transTime;
            }
            &:hover{
                &::before{
                    width: 100%;
                }
            }
            >img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
            >dl{
                flex: 1;
                >dt{
                    font-size:14px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    margin-bottom: 5px;
                }
                >dd{
                    font-size:12px;
                    color:rgba(146,146,146,1);
                    display: flex;
                    position: relative;
                    >p:nth-child(2){
                        margin: 0 20px 0 16px;
                        position: relative;
                        &::after{
                            content: '';
                            width: 1px;
                            height: 10px;
                            background: rgba(151,151,151,.3);
                            position: absolute;
                            top: 50%;
                            margin-top: -5px;
                            left: -8px;
                        }
                    }
                    >span{
                        font-weight:500;
                        color:rgba(84,120,235,1);
                        cursor: pointer;
                    }
                }
            }
            
        }
    }
    .manager-more{
        width: 100%;
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        color: #5478EB;
        text-align: center;
        border-radius: @bradius;
        background:rgba(84,120,235,.1);
        cursor: pointer;
        margin: 20px 0;
    }
    .sicon-arrow{
        width: 10px;
        height: 18px;
        position: absolute;
        background: rgba(120, 0, 0, .3);
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
    }
    .hot-tags{
        margin-top: 24px;
        >dt{
            display: flex;
            padding-bottom:15px;
            border: 1px solid rgba(242,242,242,1);
            >img{
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
            >h3{
                width:74px;
                height:18px;
                font-size:18px;
                line-height:18px;
            }
        }
        >dd{
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                >li{
                    height:32px;
                    line-height: 32px;
                    font-size:12px;
                    color:rgba(51,51,51,1);
                    background:rgba(89,123,233,1);
                    border-radius:15px;
                    margin-top: 15px;
                    padding: 0 20px;
                }
            }
        }
    }
    
}
</style>

