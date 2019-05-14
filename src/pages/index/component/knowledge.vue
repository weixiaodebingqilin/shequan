<template>
    <section class="index-knowledge">
        <ul class="knowledge-wrap">
            <li v-for="(item,index) in 20" :key="index">
                <lazy-com >
                    <div>
                        <h5>8分钟学会LOGO的设计语言？</h5>
                        <!-- <video src=""></video> -->
                        <img class="know-video" src="@/assets/images/temp/video-banner.png" >
                        <div class="know-msg">
                            <div class="know-author">
                                <img src="@/assets/images/temp/header.png" >
                                <p>你丫才美工</p>
                                <span>《设计大师是如何成长的》</span>
                            </div>
                            <div class="know-hot">
                                <img src="@/assets/images/temp/browse-big.png" >
                                <span>18274</span>
                                <img src="@/assets/images/temp/collect.png" >
                            </div>
                        </div>
                    </div> 
                    <!-- 22 -->
                    <section class="knowledge-skeletion" slot='skeleton'>
                        <ul class="main">
                            <li class="big"></li>
                            <li></li>
                        </ul>
                    </section>
                </lazy-com>
                  
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'index-knowledge',

}
</script>
<style lang="less" scoped>
.index-knowledge{
    .knowledge-wrap{
        >li{
            >div{
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
       
    }
}

</style>

