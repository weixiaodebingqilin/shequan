<template>
    <div class="category-circle "  >
        <!-- 评论 -->
        <section class="palte-comment">
            <!-- 功能区--我发表评论 -->
            <div class="function-discusss">
                <div class="textarea-text">
                    <textarea name=""  cols="30" rows="10"></textarea>
                    <p><span>30</span> / 500</p>
                </div>
                <dl>
                    <dt>
                        <img src="@/assets/images/temp/comment-add.png">
                    </dt>
                    <dd>
                        <span>取消想法</span>
                        <div>发表</div>
                    </dd>
                    
                </dl>
                <ul>
                    <li class="screen-active">全部</li>
                    <li>精选</li>
                </ul>
                <ol>
                    <li>#创新发现</li>
                    <li>#提问</li>
                    <li>#干货</li>
                </ol>
            </div>
            <div class="show-comment-box">
                <ul class="show-comment">
                    <li class="comment-list">
                        <img src="@/assets/images/temp/header.png" >
                        <section>
                            <dl>
                                <dt>作者名字<span>02.24 14:02</span></dt>
                                <dd>
                                    <p>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</p>
                                    <div>
                                        <img src="@/assets/images/temp/circle-banner.png">
                                        <img src="@/assets/images/temp/circle-banner.png">
                                        <img src="@/assets/images/temp/circle-banner.png">
                                        <img src="@/assets/images/temp/circle-banner.png">
                                    </div>
                                </dd>
                                <dd>
                                    <p><span></span>回复</p>
                                    <p><span></span></p>
                                </dd>    
                            </dl>
                            <ul class="show-comment">
                                <li class="comment-list">
                                    <img src="@/assets/images/temp/header.png" >
                                    <section>
                                        <dl>
                                            <dt>作者名字<span>02.24 14:02</span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd class="last-p">
                                                <p><span></span>回复</p>
                                                <p><span></span>举报</p>
                                            </dd>    
                                        </dl>
                                    </section>
                                </li>
                                <li class="comment-list">
                                    <img src="@/assets/images/temp/header.png" >
                                    <section>
                                        <dl>
                                            <dt>作者名字<span>02.24 14:02</span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd class="last-p">
                                                <p><span></span>回复</p>
                                                <p><span></span>举报</p>
                                            </dd>    
                                        </dl>
                                    </section>
                                </li>
                            </ul>
                        </section>
                    </li>
                    <li class="comment-list">
                        <img src="@/assets/images/temp/header.png" >
                        <section>
                            <dl>
                                <dt>作者名字<span>02.24 14:02</span></dt>
                                <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                <dd>
                                    <p><span></span>回复</p>
                                    <p><span></span></p>
                                </dd>    
                            </dl>
                            <ul class="show-comment">
                                <li class="comment-list">
                                    <img src="@/assets/images/temp/header.png" >
                                    <section>
                                        <dl>
                                            <dt>作者名字<span>02.24 14:02</span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd class="last-p">
                                                <p><span></span>回复</p>
                                                <p><span></span>举报</p>
                                            </dd>    
                                        </dl>
                                    </section>
                                </li>
                                <li class="comment-list">
                                    <img src="@/assets/images/temp/header.png" >
                                    <section>
                                        <dl>
                                            <dt>作者名字<span>02.24 14:02</span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd class="last-p">
                                                <p><span></span>回复</p>
                                                <p><span></span>举报</p>
                                            </dd>    
                                        </dl>
                                    </section>
                                </li>
                            </ul>
                        </section>
                    </li>
                    
                </ul>
                <div class="comment-addmore">
                    <span>更多评论</span>
                </div>
            </div>
            

        </section>
    </div>
</template>
<script>
export default {
    name: 'category-circle'
}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
.category-circle{
    .palte-comment{
        padding-top: 20px ;
        margin-bottom: 20px;
        background-color: #fff;
        .function-discusss{
            >dl{
                margin-top: 10px;
                >dt{
                    >img{
                        width: 100px;
                        height: 100px;
                        display: block;
                        border: 1px dashed #666;
                    }
                }
                >dd{
                    display: flex;
                    align-items: center;
                    padding: 30px 0 30px 190px;
                    border-bottom:1px solid rgba(242,242,242,1);
                    margin-bottom: 15px;
                    >span{
                        height:38px;
                        padding: 0 5px;
                        margin-right: 17px;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                        line-height:38px;
                    }
                    >div{
                        width:189px;
                        height:38px;
                        background:rgba(84,120,235,1);
                        border-radius:19px;
                        border:1px solid rgba(84,120,235,1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:38px;
                        cursor: pointer;
                    }
                }
            }
            >ul{
                display: flex;
                align-items: center;
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
            >ol{
                display: flex;
                padding: 15px 0 30px;
                align-items: center;
                >li{
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:14px;
                    margin-right: 20px;
                }
            }
        }
        .textarea-text{
            position: relative;
            >textarea{
                width: 100%;
                height: 96px;
                padding: 10px;
                box-sizing: border-box;
                line-height:24px;
                font-size:14px;
                color:rgba(51,51,51,1);
                resize: none;
            }
            >p{
                position: absolute;
                bottom: 10px;
                right: 10px;
                >span{
                color:  #FF6C47;
                }
            }
        }
    }
    // 评论
    .show-comment-box{
        position: relative;
    }
    .show-comment{
        li.comment-list{
            display: flex;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(242,242,242,1);
            &:last-child{
                border-bottom: none;
            }
            >img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
            section{
                flex: 1;
                >dl{
                    >dt{
                        height:14px;
                        font-size:14px;
                        line-height:14px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        margin-bottom: 5px;
                        >span{
                            margin-left: 14px;
                            font-size:12px;
                            color:rgba(189,189,189,1);
                        }
                    }
                    >dd{
                        font-size:14px;
                        line-height:28px;
                        color:rgba(51,51,51,1);
                        margin: 15px 0;
                        >p{
                            font-size:14px;
                            line-height:28px;
                            color:rgba(51,51,51,1);
                            margin-right: 15px;
                            display: inline;
                            align-items: center;
                            >span{
                                width: 12px;
                                height: 12px;
                                background: #999999;
                                margin-right: 5px;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
                        >div{
                            display: flex;
                            flex-wrap: wrap;
                            >img{
                                width: 100px;
                                height: 100px;
                                margin: 0 10px 10px 0;
                            }
                        }
                    }
                    .last-p{
                        display: flex;
                        justify-content: space-between;
                        >p{
                            height: 18px;
                            line-height:18px;
                            font-size: 12px;
                            display: flex;
                            align-items: center;
                            margin-right: 0;
                            cursor: pointer;
                            >span{
                                display: inline-block;
                                width: 14px;
                                height: 14px;
                                background: rgba(151,151,151,.8);
                                margin-right:5px;
                            }
                            &:last-child{
                                color:rgba(102,102,102,.2);
                            }
                        }
                            
                    }

                }
            }
            .show-comment{
                padding: 15px;
                background:rgba(246,246,246,1);
                border-radius:2px;
            }
            
        }
    }
    .comment-addmore{
        width: 100%;
        height: 160px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 10%, rgba(255,255,255,.9) 30%, white);
        >span{
            display: block;
            width: 150px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            font-size:12px;
            color:rgba(153,153,153,1);
            border: 1px solid rgba(153,153,153,.6);
            border-radius: 17px;
            margin: 95px auto 0;
        }
    }
}
</style>


