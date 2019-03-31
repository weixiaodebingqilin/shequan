<template>
    <!-- 实战 -->
    <div id="combat">
        <div class="combat-head">
            <h5>实战训练</h5>
            <div class="head-intro">
                <div>
                    让每次一次的学习都是学有所得，用积极学习的态度，空口无凭我们用实际行动说话！在这里你将会在大神的带领下，一起动手实战，完成规定天数的作业，实战创建者将会为你验收学习成果，和优秀的设计师们一起学习互动，每天比别人多进步一点，就每天比别人成长一点。
                </div>
                <ul>
                    <li>
                        <img src="@/assets/images/temp/QR-code.png" >
                        <p>最有效的学习方法</p>
                    </li>
                    <li>
                        <img src="@/assets/images/temp/QR-code.png" >
                        <p>最有效的学习</p>
                    </li>
                    <li>
                        <img src="@/assets/images/temp/QR-code.png" >
                        <p>最有效的学习方法</p>
                    </li>
                    <li>
                        <img src="@/assets/images/temp/QR-code.png" >
                        <p>最有效的学习</p>
                    </li>
                </ul>
            </div>
        </div>
        <section class="main">
            <div class="screen">
                <ul>
                    <li class="screen-active">全部</li>
                    <li>热门</li>
                    <li>UI设计</li>
                    <li>插画</li>
                    <li>动效</li>
                    <li>C4D</li>
                    <li>产品</li>
                    <li>经验</li>
                    <li>交互</li>
                </ul>
                <div>
                    <input type="text">
                    <img src="@/assets/images/temp/QR-code.png" >
                </div>
            </div>
            <ul class="combat-projects">
                <li v-for="(item,index) in 20" :key="index">
                    <img src="@/assets/images/temp/Group2.png" >
                    <div class="projects-msg">
                        <h2>插画30天挑战计划</h2>
                        <p>连续30天，在我的带领下，学习并完成当日作品，你将能够学会设计插画，提升自己的插画水平，在坚持中成长。</p>
                    </div>
                    <div class="projects-user">
                        <div>
                            <img src="@/assets/images/temp/Group20.png" >
                            <font>Superzeol</font>
                        </div>
                        <span>2101人参加</span>
                    </div>
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
        </section>

    </div>
</template>
<script>
export default {
    name: 'combat',

}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
#combat{
    width: @wap;
    margin: 0 auto;
    .combat-head{
        padding-top: 39px;
        >h5{
            display: inline-block;
            font-size:24px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:24px;
            border-bottom: 2px solid rgba(102,102,102,1);
            padding-bottom: 15px;
        }
        .head-intro{
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:28px;
            padding: 10px 0 20px;
            border-bottom:1px solid rgba(239,239,239,1);
            display: flex;
            >div{
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:28px;
                width: 688px;
                padding-right: 30px;
                border-right: 1px solid rgba(239,239,239,1);
            }
            >ul{
                flex: 1;
                padding-left: 30px;
                display: flex;
                flex-wrap: wrap;
                >li{
                    display: flex;
                    align-items: center;
                    margin-right: 50px;
                    &:nth-child(2n){
                        margin-right: 0;
                    }
                    &:nth-child(3),&:nth-child(4){
                        margin-top: 30px
                    }
                    >img{
                        width: 14px;
                        height: 14px;
                        display: block;
                        margin-right:10px;
                    }
                    >p{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                    }
                }
            }
        }
    }
    .main{
        .screen{
            padding: 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >ul{
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
            >div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width:160px;
                height:28px;
                border-radius:14px;
                border:1px solid rgba(84,120,235,0.7);
                >input{
                    flex: 1;
                    display: block;
                    line-height:28px;
                    border: none;
                    background: transparent;
                    width: 132px;
                    text-indent: 8px;
                }
                >img{
                    width:14px;
                    height:14px;
                    display: block;
                    margin: 0 7px;
                }
            }
        }
        .combat-projects{
            display: flex;
            flex-wrap: wrap;
            >li{
                display: flex;
                flex-direction: column;
                width: 255px;
                height: 298px;
                box-sizing: border-box;
                background:rgba(255,255,255,1);
                border-radius:2px;
                border:1px solid rgba(84,120,235,0.2);
                margin-right: 20px;
                margin-bottom: 20px;
                overflow: hidden;
                &:nth-child(4n){
                    margin-right: 0;
                }
                >img{
                    width: 100%;
                    height: 120px;
                    display: block;
                }
                >.projects-msg{
                    padding: 0 20px 15px 20px;
                    border-bottom:1px solid rgba(239,239,239,1);
                    flex: 1;
                    >h2{
                        font-size:18px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:24px;
                        padding: 15px 0 10px;
                    }
                    >p{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:18px;
                        overflow: hidden;
                        -webkit-line-clamp: 3; 
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                    }
                }
                >.projects-user{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    flex: 1;
                    >div{
                        display: flex;
                        align-items: center;
                        >img{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            overflow: hidden;
                            margin-right: 10px;
                        }
                        >font{
                            font-size:12px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(102,102,102,1);
                        }
                    }
                    >span{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                        line-height:14px;
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
}
</style>



