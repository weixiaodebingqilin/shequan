<template>
    <section class="home-work">
        <div class="home-work-wrap">
            <h5>Icon的规范性设计（10题）</h5>
            <div class="hw-close">
                <img src="@/assets/images/temp/close.png" >
            </div>
            <div class="topic-wrap"  v-for="(item,index) in 8" :key="index">
                <div class="topic-item">
                    <h6>{{index+1}}.画一个Icon的步骤是？ <span>（单选）</span> </h6>
                    <ul>
                        <li><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-check"><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-true"><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-error"><span></span>打开Sketch，好了完了</li> 
                    </ul>
                </div>
            </div>
            <div class="home-work-button">
                <button class="cencle">取消</button>
                <button class="confrim">确定</button>
            </div>
        </div>
    </section>
    
</template>
<script>
export default {
    name: 'home-work'
}
</script>
<style lang="less" scoped>
    .home-work{
        background:rgba(255,255,255,1);
    }
    .home-work-wrap{
        width: 800px;
        padding-top: 60px;
        margin: 0 auto;
        position: relative;
        >h5{
            font-size:24px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:24px;
            padding: 30px 0;
            border-bottom:1px solid rgba(239,239,239,1);
        }
        .hw-close{
             position: absolute;
             right: -55px;
             top: 85px;
             cursor: pointer;
        }
        .topic-wrap{
            padding-left: 86px;
        }
        .topic-item{
            margin-top: 22px;
            padding-bottom: 20px;
            >h6{
               font-size:16px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:16px; 
                margin-bottom: 20px;
                >span{
                    color: #999;
                    padding-right: 15px;
                    position: relative;
                    &::after{
                        content: '';
                        width:6px;
                        height:6px;
                        background:rgba(252,64,17,0.7);
                        position: absolute;
                        top: 50%;
                        right: 0;
                        border-radius: 50%;
                        transform:translate(-50%,-50%);

                    }
                }
                
            }
            >ul{
                padding-left: 24px;
                display: flex;
                flex-wrap: wrap;
                border-bottom:1px solid rgba(239,239,239,1);
                >li{
                    cursor: pointer;
                    padding-left: 20px;
                    width:280px;
                    height:46px;
                    background:rgba(84,120,235,0.06);
                    border-radius:2px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:16px;
                    border:1px solid rgba(84,120,235,0.1);
                    margin-right: 20px;
                    margin-bottom: 20px;
                    
                    &:nth-child(2n+2){
                        margin-right: 0;
                    }
                    >span{
                        width:14px;
                        height:14px;
                        border:1px solid rgba(51,51,51,1);
                        margin-right: 10px;
                        box-sizing: border-box;
                        position: relative;
                        border-radius: 50%;
                    }
                }
                .topic-active-check{
                    border:1px solid rgba(84,120,235,1);
                    color: #5478EB;
                    >span{
                        border:1px solid rgba(84,120,235,1);
                    }
                }
                .topic-active-true{
                    border:1px solid rgba(84,120,235,1);
                    background:rgba(84,120,235,1);
                    color: #fff;
                    >span{
                        border:1px solid rgba(255,255,255,1);
                        &::before{
                            content: ' ';
                            position: absolute;
                            width: 8px;
                            height: 8px;
                            background: #fff;
                            top: 50%;
                            left: 50%;
                            border-radius: 50%;
                            transform:translate(-50%,-50%);
                        }
                    }
                }
                .topic-active-error{
                    color: #F44C4C;
                    border:1px solid rgba(244,76,76,1);
                    >span{
                        border: none;
                        .close-error{
                            position: absolute;
                            width: 20px;
                            height: 1px;
                            background: #F44C4C;
                            border-radius: 2px;
                            top: 50%;
                            left: 50%;
                        }
                         &::before{
                            content: '';
                            .close-error();
                            transform:translate(-50%,-50%) rotate(-45deg) ;
                         }
                         &::after{
                            content: '';
                            .close-error();
                             transform:translate(-50%,-50%) rotate(45deg) ;
                         }
                    }
                }
            }
        }
        .home-work-button{
            display: flex;
            justify-content: center;
            padding-top: 30px;
            >button{
                &:first-child{
                    margin-right: 100px;
                    background:rgba(102,102,102,1);
                }
                width:200px;
                height:48px;
                border-radius:2px;
                font-size:18px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
            }
            .cencle{
                background:rgba(102,102,102,1);
            }
            .confrim{
                background:rgba(84,120,235,1);
            }
        }
    }
</style>


