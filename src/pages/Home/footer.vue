<template>
    <footer class="footer">
        <div class="footer-main">
            <div class="footer-nav">
                <div class="nav-wrap">
                    <div>关于U课网</div>
                    <div>合作企业</div>
                    <div>招贤纳士</div>
                    <div>讲师计划</div>
                </div>
                <div class="nav-wrap">
                    <div>联系我们</div>
                    <div>客服：400 8888888<font>周一至周五 9:00-24:00</font></div>
                    <div>邮箱：247870295@qq.com</div>
                </div>
                <div class="nav-wrap">
                    <div>合作伙伴</div>
                    <div>阿里云</div>
                </div>
                <div class="nav-wrap">
                    <div>关注我们</div>
                    <img class="QR-code" src="@/assets/images/temp/QR-code.png" >
                </div>
            </div>
            <div class="footer-links">
                <img src="@/assets/images/temp/footer-logo.png" >
                <div>
                    <div>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                        <a href="">友情链接</a>
                    </div>
                    <font>© 2011~2018 长沙时尘文化传媒有限公司 | 京ICP证150143 | 京公网安备11010502036009号</font>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'my-footer'
}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';
.footer{
    width:100%;
    min-height: 311px; 
    background: #282828;
    margin-top: 30px;
    .footer-main{
       width:@wap;
        margin: 0 auto;
        height: 100%; 
        .footer-nav{
            padding-top: 40px;
            border-bottom:2px solid rgba(59,66,74,1);
            display: flex;
            justify-content: space-between;
            .nav-wrap{
                >div{
                    min-height: 46px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color: #999;
                    line-height:14px;
                    &:first-child{
                        font-family:PingFangSC-Regular;
                        font-size:16px;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        line-height:16px;
                    }
                    >font{
                        display: block;
                        font-size:10px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        line-height:14px;
                        text-indent: 3em;
                        margin-top: 5px;
                        color: #666666;
                    }
                }
                .QR-code{
                    display: block;
                    height: 100px;
                    width: 100px;
                    margin-top: 20px;
                }
                &:last-child{
                    // align-items: flex-end;
                    margin-left: 360px;
                    >div{
                        text-align: center;
                        min-height: 18px;
                    }
                }
            }
        }
    }
    .footer-links{
        padding-top:15px;
        display: flex;
        >img{
            width: 40px;
            height: 36px;
            display: block;
            margin-right: 20px;
        }
        >div{
            >div{
                display: flex;
                >a{
                    line-height: 14px;
                    padding: 0 10px;
                    .text-link();
                    border-right:1px solid #666666;
                    &:first-child{
                        padding-left: 0;
                    }
                    &:last-child{
                        border-right:none;
                    }
                }
            }
            >font{
                .text-link();
                padding-top: 10px;
                display: block;
            }
        }
    }
    .text-link{
        font-size:12px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:12px;
        letter-spacing:1px;
    }
}
</style>


