<template>
    <section class="hot-find">
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
    </section>
</template>
<script>
import molecule from '@/components/molecule/mixins.js'
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'hot-find',
    components: {
        cardArtical: molecule.cardArtical,
        textHd: atomy.textHd,
        test: atomy.test,
        tableNative: atomy.tableNative
    },
}
</script>

<style lang="less">
@import '~@/assets/style/glob.less';
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
</style>


