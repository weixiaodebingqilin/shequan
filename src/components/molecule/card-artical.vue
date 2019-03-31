<template>
    <li class="card-artical">
        <img src="@/assets/images/temp/kind-native.png">
        <section>
            <h3>
                <p>渐变插画的重设计</p> 
                <span>插画世界-重塑你的画笔</span>
            </h3>
            <text-hd >这不仅仅是一篇经验，而是前辈用日积月累得工作心得。把自己这些年学习的一些想法和感悟，希望可以帮助到你。</text-hd>
            <dl>
                <dt>
                    <img src="@/assets/images/temp/header.png">
                    <p>element</p>
                </dt>
                <dd>
                    <div>
                        <img src="@/assets/images/temp/star.png" >
                    </div>
                    <p>24</p>                                
                    <div>
                        <img src="@/assets/images/temp/point.png" >
                    </div>
                    <p>246</p>
                    
                </dd>
            </dl>
        </section>
    </li>
</template>
<script>
// import textHd from '@/components/atomy/text-hd.vue'
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'card-artical',
    components: {
        textHd: atomy.textHd
    },
}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
li.card-artical{
    height: 120px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid rgba(242,242,242,1);
    &:last-child{
        border-bottom:none;
    }
    >img{
        width: 180px;
        height: 100%;
        border-radius: @bradius;
    }
    >section{
        position: relative;
        margin-left: 15px;
        >h3{
            height:24px;
            line-height:24px;
            font-size:18px;
            color:rgba(51,51,51,1);
            position: relative;
            margin-bottom: 7px;
            >p{
                position: relative;
                display: inline-block;
                &::after{
                    content: '';
                    width: 0;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-bottom: 1px solid rgba(51,51,51,1);    
                    
                }
                &:hover::after{
                    width: 100%;
                    transition: all @transTime;
                }
                
                
                
            }
            
            >span{
                display: inline-block;
                width: auto;
                height:24px;
                line-height:24px;
                padding: 0 12px;
                font-size:12px;
                color:rgba(153,153,153,1);
                background:rgba(153,153,153,0.1);
                border-radius:11px;
                position: absolute;
                top: 0;
                right: 2px;
                transition: background @transTime;
                &:hover{
                    background:rgba(84,120,235,1);
                    color: #fff;
                }
            }
        }
        >dl{
            display: flex;
            margin-top: 15px;
            font-size:12px;
            line-height: 24px;
            >dt{
                display: flex;
                height: 24px;
                padding-right: 22px;
                position: relative;
                &::after{
                    content: '';
                    width: 1px;
                    height: 10px;
                    position: absolute;
                    top: 7px;
                    right: 13px;
                    background: rgba(151,151,151,1);
                    box-shadow: 1px 1px 1px rgba(151,151,151,.2);
                }
                >img{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 10px;   
                }
                >p{
                    color:rgba(102,102,102,1);
                }
            }
            >dd{
                display: flex;
                >div{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    text-align: center;
                    cursor: pointer;
                }
                >p{
                    margin-right:15px; 
                    color:rgba(180,180,180,1);
                }
            }
        }
    }
    
}
</style>


