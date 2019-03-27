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
        <section>
            <!-- 左边 -->
            <div class="warp-left">
                <!-- 轮播 -->
                <div class="index-swiper">
                    <img src="@/assets/images/temp/Group.png">
                </div>
                <!-- kind-native -->
                <dl class="kind-native">
                    <dt :style="kindStyle"></dt>
                    <dd v-for="(item,index) in kindNative" :key="index"
                        :class="{active: index === kindIndex}" 
                        @click="kindMove(index,$event)"
                    >{{item}}</dd>
                </dl>
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
import textHd from '@/components/atomy/text-hd.vue'
import cardArtical from '@/components/molecule/card-artical.vue'
export default {
    name: 'index',
    components: {
        textHd,
        cardArtical
    },
    data() {
        return {
            kindNative: ['最新发现','最新分享','专题圈','圈主'], ///
            kindIndex: 0, // 
            kindStyle: {},
        }
    },
    // 组件的生命周期
    created(){

    },
    // 我们要写的一些方法
    methods: {
        kindMove(index,event){
            let elem = event.target
            this.kindIndex = index
            this.kindStyle = Object.assign({},this.kindStyle,{
                left: elem.offsetLeft + 'px',
                width: elem.offsetWidth + 'px'
            })
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
    dl.kind-native{
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
            transition: all @transTime;
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
                // font-weight: bold;
                text-shadow: 2px 1px 3px  rgba(89, 125, 243, 0.4);
            }

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

