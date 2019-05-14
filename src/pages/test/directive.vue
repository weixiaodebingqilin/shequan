<template>
    <section id="index">
        <div v-lazy='ni'>xxxxxxx</div>
        <section>
            <!-- 左边 -->
            <div class="warp-left">
                <!-- 轮播 -->
                <lazy-com :timeout="3000">
                    <div class="index-swiper">
                        <img src="@/assets/images/temp/Group.png">
                    </div>
                    <section class="knowledge-skeletion" slot='skeleton'>
                        <ul class="main">
                            <li class="big">
                                固定时间3s；  
                                <p>这个骨架样子是可以设置的</p>
                                
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </section>
                </lazy-com>
                <div>
                    <index-knowledge ></index-knowledge>
                    <lazy-com>
                        <hot-find ></hot-find> 
                        <section class="knowledge-skeletion" slot='skeleton'>
                            <ul class="main">
                                <li class="big"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </section>
                    </lazy-com>
                    <lazy-com >
                        <newest-share  ></newest-share> 
                        <section class="knowledge-skeletion" slot='skeleton'>
                            <ul class="main">
                                <li class="big"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </section>
                    </lazy-com>
                    <lazy-com :timeout='4000'>
                        <index-category ></index-category>
                        <section class="knowledge-skeletion" slot='skeleton'>
                            <ul class="main">
                                <li class="bigs"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </section>
                    </lazy-com>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import hotFind from '@/pages/index/component/hot-find'
import indexCategory from '@/pages/index/component/category'
import newestShare from '@/pages/index/component/share'
import indexKnowledge from '@/pages/index/component/knowledge'
export default {
    name: 'test',
    components: {
        hotFind,
        indexCategory,
        newestShare,
        indexKnowledge
    },
    data(){
        return {
            ni: '123'
        }
    }
}
</script>
<style lang="less">

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
            border-bottom: 1px solid rgba(242,242,242,1);
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

.knowledge-skeletion{
    .main{
        position: relative;
        height: 442px;
        width: 100%;
        background: rgba(102,102,102,.2);
        >li{
            background: rgba(151,151,151,.5);
            width: 80%;
            height: 20px;
            margin: 10px 0;
            &.big{
                background: rgba(151,151,151,1);
                height: 80%;
            }
            &.bigs{
                background: rgba(251,151,151,1);
                width: 100%;
                height: 80%;
            }
            
        }
    }
}
</style>



