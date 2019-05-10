<template>
    <section class="newest-share">
       <ul>
           <li v-for="(item,index) in 3" :key="index">
               <dl class="share-head">
                   <dt><img src="@/assets/images/temp/header.png" ></dt>
                   <dd>
                       <h5>呼唤你的声音  <span>刚刚</span></h5>
                       <P>太不容易了终于画完了</P>
                   </dd>
               </dl>
               <div class="share-content">
                    <img src="@/assets/images/temp/Bitmap.png">
                    <ol>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                    </ol>
                    <dl>
                        <dd>
                            <span></span>
                            320
                        </dd>
                        <dd>
                            <span></span>
                            320
                        </dd>
                    </dl>
               </div>
               <div class="share-bototm">
                   <dl class="share-observer">
                       <dt>
                           <img src="@/assets/images/temp/header.png" >
                       </dt>
                       <dd>
                           <div>
                               <span>你丫才美工</span>
                               <span>来至<a>《插画30天实战挑战》</a>的点评</span>
                           </div>
                           <p>总的来说这个作品做的不错，比大多数人处理精致多。</p>
                       </dd>
                   </dl>
                   <ol>
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li> 
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li>
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li> 
                   </ol>
               </div>
           </li>
       </ul>
    </section>
</template>
<script>
export default {
    name: 'newest-share'
}
</script>
<style lang="less" scoped>
    .newest-share{
        padding-top: 30px;
        >ul>li{
            margin-bottom: 50px;
            .share-head{
                display: flex;
                >dt>img{
                        display: block;
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                }
                >dd{
                    padding-top: 2px;
                    >h5{
                       font-size:14px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:14px; 
                        >span{
                            color: #999999;
                            padding-left: 12px;
                        }
                    }
                    >p{
                      font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:28px;  
                        padding: 10px 0 15px;
                    }
                }
            }
            .share-content{
                border-radius:2px;
                border:1px solid rgba(84,120,235,0.1);
                overflow: hidden;
                position: relative;
                >img{
                    height: 500px;
                    width: 100%;
                    display: block
                }
                >ol{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 20px;
                    display: flex;
                    >li{
                        cursor: pointer;
                        margin-right: 10px;
                        border:2px solid rgba(84,120,235,1);
                        &:last-child{
                            margin-right: 0;
                        }
                        >img{
                            width: 50px;
                            height: 50px;
                            display: block;
                        }
                    }
                }
                >dl{
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                    display: flex;
                    >dd{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(207,207,207,1);
                        line-height:14px;
                        margin-right: 20px;
                        >span{
                            display: inline-block;
                            margin-right: 10px;
                            width: 14px;
                            height: 14px;
                            background: #CFCFCF;
                            vertical-align: middle;
                        }
                        
                    }
                }
            }
            .share-bototm{
                .share-observer{
                    display: flex;
                    padding: 20px;
                    background:rgba(244,244,244,1);
                    >dt>img{
                        width: 24px;
                        height: 24px;
                        display: block;
                        margin-right: 10px;
                    }
                    >dd{
                        flex: 1;
                        >div{
                            font-size:14px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            line-height:24px;
                            >span{
                                &:first-child{
                                    padding-right: 15px;
                                    margin-right: 15px;
                                    position: relative;
                                    &::after{
                                        width:3px;
                                        height:10px;
                                        background:rgba(151,151,151,0.2);
                                        position: absolute;
                                        top: 50%;
                                        transform: translateY(-50%);
                                    }
                                }
                                >a{
                                    color: #5478EB;
                                }
                            }
                        }
                        >p{
                            margin-top: 15px;
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                            line-height:28px;
                        }
                    }
                }
                >ol{
                    padding-left: 20px;
                    padding-top: 30px;
                    >li{
                        display: flex;
                        margin-bottom: 15px;
                        &:last-child{
                            border-bottom: 1px solid rgba(239,239,239,1);
                            >div{
                                border-bottom:none;
                            }
                        }
                        >img{
                            width: 30px;
                            height: 30px;
                            display: block;
                            margin-right: 10px;
                        }
                        >div{
                            padding-bottom: 18px;
                            border-bottom: 1px solid rgba(239,239,239,1);
                            >h5{
                                font-size:12px;
                                font-family:PingFangSC-Medium;
                                font-weight:500;
                                color:rgba(51,51,51,1);
                                line-height:12px;
                                padding: 9px 0 10px;
                                >span{
                                    color: #BDBDBD;
                                    padding-left: 10px;
                                    font-size: 12px;
                                    vertical-align: middle;
                                }
                            }
                            >p{
                                font-size:14px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(51,51,51,1);
                                line-height:24px;
                            }
                            >div{
                                display: flex;
                                align-items: center;
                                padding-top: 10px;
                                font-size:12px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(102,102,102,1);
                                line-height:14px;
                                margin-right: 20px;
                                vertical-align: middle;
                                >span{
                                    display: inline-block;
                                    margin-right: 10px;
                                    width: 14px;
                                    height: 14px;
                                    background: rgba(102,102,102,1);
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>


