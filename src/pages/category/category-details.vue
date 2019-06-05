<template>
    <div id="category">
        <!-- 头部图片 -->
        <div class="photo">
            <img src="@/assets/images/ot/img/1.jpeg">
        </div>
        <!-- 主体 -->
        <div class="main clearfix">
            <div class="banner clearfix">
                <dl>
                    <dt>我在阿里做UI的8年历程 <span>已加入</span></dt>
                    <dd>立即分享赚30元</dd>
                </dl>
                <div class="shop clearfix">
                    <div class="user clearfix">
                        <img src="@/assets/images/temp/header.png">
                        <dl>
                            <dt>胡凌</dt>
                            <dd>3分钟前</dd>
                        </dl>
                    </div>
                    <div class="category-user-msg">
                        <p>今天20点前，围绕“为什么在实际项目中，很少出现概念搞中那些炫酷的交互效果？”提问，将会筛选出5个回答，现金奖励100元红包，和bat内推荐机会。悄悄告诉小秘密：有图有理会更好哦～</p>
                        <ul>
                            <li><span>32</span>篇文章更新</li>
                            <li><span>34332</span>位成员</li>
                            <li><span>32W</span>人气</li>
                        </ul>
                    </div>
                    <div class="msg">
                        <p>最近更新<span>支付宝01246版中遇到的坑</span>3小时前</p>
                        <div>有效期至：2020.03.12</div>
                    </div>
                </div>

            </div>
        </div>

        <!-- tab内容 -->
        <div class="main-wrap">
            <section class="catalogue">
                <!-- 发表内容 -->
                <div class="publish">
                    <div class="textarea-wrap">
                        <textarea name=""
                                  id=""
                                  cols="30"
                                  rows="10"
                                  placeholder="这一刻的想法"></textarea>
                        <ul>
                            <li><img src="@/assets/images/temp/circle-banner.png"></li>
                            <li><img src="@/assets/images/temp/circle-banner.png"></li>
                            <li><img src="@/assets/images/temp/comment-add.png"></li>
                        </ul>
                        <div><span>0</span>/500</div>
                    </div>
                    <div class="publish-type">
                        <ul>
                            <li class="publish-type-active">
                                <svg class="icon"
                                     aria-hidden="true">
                                    <use xlink:href="#iconremendianping"></use>
                                </svg>
                                <span>表情</span>
                            </li>
                            <li class="publish-type-active">
                                <svg class="icon"
                                     aria-hidden="true">
                                    <use xlink:href="#iconremendianping"></use>
                                </svg>
                                <span>图片</span>
                            </li>
                            <li>
                                <svg class="icon"
                                     aria-hidden="true">
                                    <use xlink:href="#iconremendianping"></use>
                                </svg>
                                <span>链接</span>
                            </li>
                            <li>
                                <svg class="icon"
                                     aria-hidden="true">
                                    <use xlink:href="#iconremendianping"></use>
                                </svg>
                                <span>话题</span>
                            </li>
                        </ul>
                        <div>发表</div>
                    </div>
                </div>
                <!-- 圈子内搜索 -->

                <!-- 导航 -->
                <div class="catalogue-native">
                    <table-native :clounms="kindNative"
                                  @tableMoveIndex="kindMove"
                                  :initIndex='kindIndex'></table-native>
                </div>

                <!-- 圈子 -->
                <category-circle v-if="kindIndex === 0 "></category-circle>
                <!-- 目录 -->
                <category-wrap v-if="kindIndex === 1 "></category-wrap>
                <!-- 挑战／抗魔计划 -->
                <!-- <div class="challenge" v-if="kindIndex === 2 ">
					<ul>
						<li v-for="(item,index) in 4" :key="index">
							<img src="@/assets/images/temp/challenge-item.png">
							<dl>
								<dt>
									<img src="@/assets/images/temp/challenge-item.png">
									<h5>插画30天挑战计划</h5>
								</dt>
								<dd>连续30天，在我的带领下，学习并完成当日作品，你将能够学会设计插画，提升自己的插画水平，在坚持中成长，学习中进步。加油，有付出就有收获。</dd>
								<div>
									<p>已有2101人参加</p>
									<img src="@/assets/images/temp/challenge-item.png">
									<span>44570</span>
								</div>
							</dl>
						</li>
					</ul>
				</div> -->
                <category-challenge v-if="kindIndex === 2 "></category-challenge>

            </section>
            <section class="main-right">
                <!-- 圈子数据 -->
                <div class="circle-data">
                    <div class="clock-in-title"
                         @click="popouts(0)">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconremendianping"></use>
                        </svg>
                        <span>圈子数据</span>
                        <div class="arrow-right">
                            <img src="@/assets/images/icon/arrows-right.png">
                        </div>
                    </div>
                    <ul>
                        <li>
                            <span>今日打卡数</span>
                            <p>2236</p>
                        </li>
                        <li>
                            <span>今日互动数</span>
                            <p>40437</p>
                        </li>
                    </ul>
                </div>
                <!-- 圈子设置 -->
                <div class="circle-data">
                    <div class="clock-in-title"
                         @click="popouts(1)">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconremendianping"></use>
                        </svg>
                        <span>圈子设置</span>
                        <div class="arrow-right">
                            <img src="@/assets/images/icon/arrows-right.png">
                        </div>
                    </div>
                </div>
                <!-- 打卡 -->
                <div class="clock-in">
                    <div class="clock-in-title">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconremendianping"></use>
                        </svg>
                        <span>以坚持打卡天数</span>
                    </div>
                    <ul class="clock-in-date">
                        <li>31</li>
                        <li>32</li>
                        <li>33</li>
                    </ul>
                    <p>优秀的你32天都在成长，加油！</p>
                    <div class="clock-in-button">立即打卡</div>
                    <div v-show="0"
                         class="clock-in-button clock-in-button-green">分享</div>
                </div>
                <div class="share">
                    <div class="card-info">您已打卡<span>32</span>天，每天进步一点点，加油！</div>
                    <div class="card-share">
                        <div>已打卡</div>
                        <div @click="open">分享链接到朋友圈</div>
                    </div>
                    <div class="card-but">
                        <p>立即打卡</p>
                        <span>2019.3.21</span>
                    </div>
                    <div class="card-msg">
                        <span>已结束</span>
                        <div>
                            <span>12</span>
                            <font>/15</font>
                        </div>
                        <span>即将开始</span>
                    </div>
                    <div class="card-version">
                        <span></span>
                        <p>到截止日之前，打卡超过15天，并分享至朋友圈，将抽取20位圈友，获得老胡推荐的大厂面试机会，然后造化看个人了哦</p>
                        <div>
                            <span>活动时间</span>
                            <span>3.20-4.30</span>
                            <span>分享至朋友圈生效</span>
                        </div>
                    </div>
                </div>
                <!-- 打卡奖励 -->
                <div class="hit-crad">
                    <div class="clock-in-title"
                         @click="popouts(2)">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconremendianping"></use>
                        </svg>
                        <span>打卡奖励</span>
                    </div>
                    <ul>
                        <li>
                            <p>阿里启动页插画源文件</p>
                            <div>
                                <span>领取</span>
                                <!-- <font>20天</font> -->
                            </div>
                        </li>
                        <li>
                            <p>阿里启动页插画源文件</p>
                            <div>
                                <font>20天</font>
                            </div>
                        </li>
                        <li>
                            <p>阿里启动页插画源文件</p>
                            <div>
                                <font>20天</font>
                            </div>
                        </li>
                        <li>
                            <p>阿里启动页插画源文件</p>
                            <div>
                                <font>20天</font>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 榜单 -->
                <div class="list-focus">
                    <div class="clock-in-title">
                        <svg class="icon"
                             aria-hidden="true">
                            <use xlink:href="#iconremendianping"></use>
                        </svg>
                        <span>榜单</span>
                    </div>
                    <ol>
                        <li class="list-tab-active">今日获评</li>
                        <li>今日交流</li>
                        <li>打卡</li>
                    </ol>
                    <ul>
                        <li>
                            <img src="@/assets/images/temp/circle-banner.png">
                            <div>
                                <img src="@/assets/images/temp/circle-banner.png">
                                <div>
                                    <p>彩云Sky</p>
                                    <span>获得41个评论</span>
                                </div>
                            </div>
                            <img src="@/assets/images/icon/arrows-right.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/circle-banner.png">
                            <div>
                                <img src="@/assets/images/temp/circle-banner.png">
                                <div>
                                    <p>彩云Sky</p>
                                    <span>获得41个评论</span>
                                </div>
                            </div>
                            <img src="@/assets/images/icon/arrows-right.png">
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/images/temp/circle-banner.png">
                                <div>
                                    <p>彩云Sky</p>
                                    <span>获得41个评论</span>
                                </div>
                            </div>
                            <img src="@/assets/images/icon/arrows-right.png">
                        </li>
                    </ul>
                </div>
                <!-- <div class="author-wrap">
					<img src="@/assets/images/ot/img/slices/图1(3).png" >
					<div class="author-msg">
						<div>
							<p>胡凌</p>
							<span>圈主</span>
						</div>
						<div>
							<p>32W</p>
							<span>人气</span>
						</div>
					</div>
					<h6>阿里巴巴资深设计师，曾主导过支付宝，天猫等项目</h6>
					<p>在这里我将带领大家，每天让自己进步一点点，积累行业知识。用我8年的从业的过程中无数大大小小的坑，为大家填上。</p>
					<div class="author-more">查看主页</div>
				</div> -->
                <author-wrap></author-wrap>
                <img src="@/assets/images/temp/author-bottom.png">
            </section>
        </div>

        <!-- 弹框 -->
        <div class="mask"
             v-show="maskShow"></div>
        <!-- 分享至微信弹框 -->
        <div class="QR-wrap"
             v-show="maskShow">
            <div>
                <h6>用微信扫描二维码将链接分享至微信朋友圈</h6>
                <div>
                    <img src="@/assets/images/temp/challenge-item.png">
                    <div>
                        <div>扫描二维码后点击页面右上角</div>
                        <img src="@/assets/images/temp/QR-code.png">
                    </div>
                </div>
                <img class="close"
                     @click="close"
                     src="@/assets/images/temp/close-but.png">
            </div>
        </div>
        <!-- 支付二维码弹框 -->
        <div class="QR-code"
             style="display:none">
            <div>
                <img class="code-close"
                     src="@/assets/images/temp/code-close.png">
                <p>微信支付￥266.00</p>
                <img class="code-img"
                     src="@/assets/images/temp/QR-code.png">
                <span>使用微信扫描二维码进行支付</span>
            </div>
        </div>

        <!-- 结算中 -->
        <section class="settlement-wrap">
            <div class="settlement">
                <h5>结算中</h5>
                <div class="settlement-msg">
                    <div>
                        <h6>我在阿里做UI的8年成长历程</h6>
                        <div>
                            <div>专题圈 | 限时优惠</div>
                            <p>￥299.00/年</p>
                            <span>￥399.00</span>
                        </div>
                    </div>
                    <p>加入圈子，你将获得加入之日前圈主所有的文章，以及往后一年内更新的所有文章，你将可以和优秀的设计师们一起学习交流，和圈主一起每天比别人多进步一点。</p>
                </div>

                <div class="settlement-way">
                    <div class="user-msg">
                        <img src="@/assets/images/temp/header.png">
                        <div>
                            <div>微笑的冰欺凌</div>
                            <p>我的余额： <span>￥56</span></p>
                        </div>
                        <p>使用余额</p>
                    </div>

                    <div class="pay-way">
                        <p>请选择支付方式</p>
                        <dl>
                            <dt>
                                <img src="@/assets/images/temp/weChat-pay.png">
                                <span>微信支付</span>
                            </dt>
                            <dt>
                                <img src="@/assets/images/temp/ali-pay.png">
                                <span>支付宝</span>
                            </dt>
                            <dd>
                                支付倒计时
                                <span>59</span>分
                                <span>23</span>秒
                            </dd>
                        </dl>
                        <div>
                            <p>商品为虚拟内容，购买后不支持退换、转让</p>
                            <div>
                                <p>应付金额：<font>￥243.00</font>
                                </p>
                                <div>立即支付</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 圈子管理（数据） -->
        <popout ref="pop"
                :popoutData="popout[0]"
                :popoutSet="popout[1]"
                :popoutCard="popout[2]"></popout>

    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
import categoryCircle from "./component/circle";
import categoryWrap from "@/components/molecule/wrap";
import categoryChallenge from "./component/challenge";
import popout from "./component/popout";
export default {
    name: "category",
    components: {
        tableNative: atomy.tableNative,
        authorWrap: molecule.authorWrap,
        categoryCircle: categoryCircle,
        categoryWrap: categoryWrap,
        categoryChallenge: categoryChallenge,
        popout: popout
    },
    data() {
        return {
            kindNative: ["圈子", "目录", "挑战／抗魔计划"], ///
            kindIndex: 0, //
            kindStyle: {},
            maskShow: false,
            popout: [false, false, false],
            showpopout: false
        };
    },
    // 组件的生命周期
    created() {},
    // 我们要写的一些方法
    methods: {
        kindMove(index) {
            this.kindIndex = index;
        },
        open() {
            this.maskShow = true;
        },
        close() {
            this.maskShow = false;
        },
        //弹框
        popouts(index) {
            this.$refs["pop"].showpops();
            this.popout = [false, false, false];
            this.$set(this.popout, index, !this.popout[index]);
            console.log(this.popout[index]);
            // if (this.popout[index]) {
            //     this.popout[index] = false;
            // } else {
            //     this.popout[index] = true;
            // }
        }
    }
};
</script>
