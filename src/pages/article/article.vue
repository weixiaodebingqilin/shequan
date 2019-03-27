<template>
    <div id="articles">
        <section class="article-main">
            <!-- 文章左侧内容 -->
            <div class="main-left">
                <!-- //文章内容 -->
                <div class="article-content">
                    <div class="article-user">
                        <h5>Icon设计的法则</h5>
                        <div class="user-msg">
                            <img src="@/assets/images/temp/QR-code.png">
                            <dl>
                                <dt><font>胡凌</font><span>关注</span></dt>
                                <dd>
                                    <p>阿里资深UI设计师，专注设计规则，提升作图效率</p>
                                    <div>
                                        <div>
                                            <img src="@/assets/images/temp/QR-code.png">
                                            <span>2019-03-18</span>
                                        </div>
                                        <div>
                                            <img src="@/assets/images/temp/QR-code.png">
                                            <span>8255</span>
                                        </div>
                                        <div>
                                            <img src="@/assets/images/temp/QR-code.png">
                                            <span>102</span>
                                        </div>
                                        <div>
                                            <img src="@/assets/images/temp/QR-code.png">
                                            <span>646</span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            
                        </div>
                    </div>
                    <div class="article-details">

                    </div>
                </div>
                <!-- //文章评论 -->
                <div class="article-comment">
                    <h5>从不同维度对Icon设计进行解析，整理一整套Icon设计的法则</h5>
                    <p>网络上有很多关于Icon设计的文章，一些文章从部分维度切入讲述Icon的设计理念，但大部分缺乏整体性。 所以我尝试把自己的思考方式结合其他人的设计理念整理了一个完整的Icon设计法则，通过简单易懂的描述语言，并且结合设计案例呈现出来，希望能够对大家有所帮助。文章使用的案例只代表个人观点，并不代表相关产品。 本文重点讲述Icon设计思维，关于Icon的具体定义以及具体的制作过程就不再赘述，网络上有很多相关文章都有讲述。 从不同维度对Icon设计进行解析，整理一整套Icon的设计法则。每一个产品中都有不同类型的Icon，产品通过Icon可以快速的向用户传递语意，通过独特的设计语言让用户形成对于产品的认知心智。Icon的重要性就不言而喻了。 ICON的设计法则-菱形设计法则，主要包括语意、层级、设计形式、风格、一致性、范围。而其他的设计思考也是这个设计法则的变体，中心思想没有发生变化。通过对以上设计思考点的聚合，来设计能够传递Icon语意，并且能够清晰展现产品结构和信息层级的Icon系统，通过差异化的设计形式展现产品设计的独特风格，让具有一致性的设计语言传递信息，和用户形成共鸣。</p>
                    <img src="@/assets/images/temp/Group.png">
                </div>
                <!-- //文章推送 -->
                <div class="article-push">

                </div>
            </div>
            <!-- 文章右侧内容 -->
            <div class="main-right">

            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'articles',
   
}
</script>
<style lang="less">

#articles{
    width: 100%;
    background:rgba(243,245,247,1);
    .article-wrap{
        width:1100px;
        display: flex;
        justify-content: space-between;
        .main-left{
            width: 790px;
            margin-right: 20px;
            .article-content{
                background: #FFFFFF;
                .article-user{
                    padding: 20px 20px 15px;
                    border-bottom:1px solid rgba(239,239,239,1);
                }
                .article-user>h5{
                    font-size:22px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:22px;
                    margin-top: 30rpx;
                }
                .article-user .user-msg{
                    display: flex;
                    >img{
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                        display: block;
                        margin-right: 10px;
                    }
                    >dl{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        >dt{
                            padding-top: 2px;
                            display: flex;
                            >font{
                                font-size:14px;
                                font-family:PingFangSC-Medium;
                                font-weight:500;
                                color:rgba(51,51,51,1);
                                line-height:20px;
                                margin-right:10px; 
                            }
                            >span{
                                display: flex;
                                width: 55px;
                                height: 22px;
                                box-sizing: border-box;
                                justify-content: center;
                                align-items: center;
                                border-radius:11px;
                                border:1px solid rgba(84,120,235,1);
                                color: #5478EB;
                                font-size: 12px;
                            }
                        }
                        >dd{
                            display: flex;
                            justify-content: space-between;
                            >p{
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(153,153,153,1);
                                line-height:12px;
                            }
                        }
                        >dd>div{
                            display: flex;
                            >div{
                                display: flex;
                                align-items: center;
                                >img{
                                    width: 12px;
                                    height: 12px;
                                    display: block;
                                    margin-right: 5px;
                                }
                                >span{
                                    font-size:12px;
                                    font-family:PingFangSC-Regular;
                                    font-weight:400;
                                    color:rgba(153,153,153,1);
                                    line-height:12px;
                                }
                            }
                        }
                    }
                    
                }
            }
            .article-comment{
                padding: 20px;
                >h5{
                    font-size:18px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:18px;
                    padding-top: 20px;
                }
                >p{
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:28px;
                    padding-top: 20px;
                }
                >img{
                    display: block;
                    width: 100%;
                    padding-top: 20px;
                }
            }
        }
        .main-right{
            width: 290px;
            background: #FFFFFF;
        }
    }
}
</style>