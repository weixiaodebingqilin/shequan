<template>
    <div id="category">
        <!-- 头部图片 -->
		<div class="photo">
			<img src="@/assets/images/ot/img/1.jpeg" >
		</div>
		<!-- 主体 -->
		<div class="main clearfix">
			<div class="banner clearfix">
				<dl>
					<dt>我在阿里做UI的8年历程</dt>
					<dd>已加入</dd>
				</dl>
				<div class="shop clearfix">
					<div class="user clearfix">
						<img src="@/assets/images/temp/header.png" >
						<dl>
							<dt>胡凌</dt>
							<dd>3分钟前</dd>
						</dl>
					</div>
					<div class="summary clearfix">
						<p>今天20点前，围绕“为什么在实际项目中，很少出现概念搞中那些炫酷的交互效果？”提问，将会筛选出5个回答，现金奖励100元红包，和bat内推荐机会。悄悄告诉小秘密：有图有理会更好哦～</p>
					</div>
					<div class="tool clearfix">
						<dl class="clearfix">
							<dt>
								<ul>
									<li>32篇文章更新</li>
									<li>32459位成员</li>
									<li>20W人气</li>
								</ul>
							</dt>
							<dd>有效期至：2020.03.12</dd>
						</dl>
					</div>
					<div class="msg">
						<p>最近更新   支付宝01246版中遇到的坑   3小时前</p>
					</div>
				</div>
				
			</div>
		</div>
		
		<!-- tab内容 -->
		<div class="main-wrap">
			<section class="catalogue">
				<dl class="kind-native">
                    <dt :style="kindStyle"></dt>
                    <dd v-for="(item,index) in kindNative" :key="index"
                        :class="{active: index === kindIndex}" 
                        @click="kindMove(index,$event)"
                    >{{item}}</dd>
                </dl>
				<!-- 圈子 -->
				<div class="circle"  v-if="kindIndex === 0 ">
					<!-- 评论 -->
					<section class="palte-comment">
						<!-- 功能区--我发表评论 -->
						<div class="function-discuss">
							<div class="textarea-text">
								<textarea name=""  cols="30" rows="10"></textarea>
								<p><span>30</span> / 500</p>
							</div>
							<dl>
								<dt>取消评论</dt>
								<dd>评论</dd>
							</dl>
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
													<img src="@/assets/images/temp/challenge-item.png">
													<img src="@/assets/images/temp/challenge-item.png">
													<img src="@/assets/images/temp/challenge-item.png">
													<img src="@/assets/images/temp/challenge-item.png">
												</div>
											</dd>
											<dd>
												<p><span></span>回复</p>
												<p><span></span>举报</p>
											</dd>    
										</dl>
										<ul class="show-comment">
											<li class="comment-list">
												<img src="@/assets/images/temp/header.png" >
												<section>
													<dl>
														<dt>作者名字<span>02.24 14:02</span></dt>
														<dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
														<dd>
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
														<dd>
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
												<p><span></span>举报</p>
											</dd>    
										</dl>
										<ul class="show-comment">
											<li class="comment-list">
												<img src="@/assets/images/temp/header.png" >
												<section>
													<dl>
														<dt>作者名字<span>02.24 14:02</span></dt>
														<dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
														<dd>
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
														<dd>
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
				<!-- 目录 -->
				<ul class="catalogue-wrap" v-if="kindIndex === 1 ">
					<li v-for="(item,index) in 10" :key="index">
						<div>
							<span>最新</span>
							<font>03-01</font>
							<p>今天这篇文章是我经常用在实际项目中的方法</p>
						</div>
						<dl>
							<img src="@/assets/images/ot/img/slices/图1(3).png" >
							<div>
								<h5>产品设计师是什么？</h5>
								<p>介绍产品设计师是什么，与普通UI的区别，以及如何晋升。前段时间有朋友来询问，产品设计师是一个什么样的岗位，要负责哪些工作？我其实是比较奇怪的，这个概念已经兴起了一两年了，从阿里的全链路设计师到产品设计师。本以为...</p>
								<ol>
									<li>
										<img src="@/assets/images/ot/img/slices/图1(3).png" >
										<span>23</span>
									</li>
									<li>
										<img src="@/assets/images/ot/img/slices/图1(3).png" >
										<span>23</span>
									</li>
									<li>
										<img src="@/assets/images/ot/img/slices/图1(3).png" >
										<span>6548</span>
									</li>
								</ol>
							</div>
						</dl>
					</li>
				</ul>
				<!-- 挑战／抗魔计划 -->
				<div class="challenge" v-if="kindIndex === 2 ">
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
				</div>
				
			</section>
			<section class="main-right">
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
				<div class="author-wrap">
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
				</div>
				<img src="@/assets/images/ot/img/slices/图1(3).png" >
			</section>
		</div>

		<!-- 弹框 -->
		<div class="mask" v-show="maskShow"></div>
		<!-- 分享至微信弹框 -->
		<div class="QR-wrap" v-show="maskShow">
			<div>
				<h6>用微信扫描二维码将链接分享至微信朋友圈</h6>
				<div>
					<img src="@/assets/images/temp/challenge-item.png">
					<div>
						<div>扫描二维码后点击页面右上角</div>
						<img src="@/assets/images/temp/QR-code.png">
					</div>
				</div>
				<img class="close" @click="close" src="@/assets/images/temp/close-but.png">
			</div>
		</div>
		<!-- 支付二维码弹框 -->
		<div class="QR-code" style="display:none">
			<div>
				<img class="code-close" src="@/assets/images/temp/code-close.png">
				<p>微信支付￥266.00</p>
				<img class="code-img" src="@/assets/images/temp/QR-code.png">
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
						<img src="@/assets/images/temp/QR-code.png">
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
								<img src="@/assets/images/temp/QR-code.png">
								<span>微信支付</span>
							</dt>
							<dt>
								<img src="@/assets/images/temp/QR-code.png">
								<span>支付宝</span>
							</dt>
							<dd>
								支付倒计时
								<span>59</span>分
								<span>23</span>秒
							</dd>
						</dl>
						<div>
							<p></p>
							<div>
								<p>应付金额：<font>￥243.00</font></p>
								<div>立即支付</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>
<script>
export default {
    name: 'category',
    data() {
        return {
            kindNative: ['圈子','目录','挑战／抗魔计划'], ///
            kindIndex: 0, // 
			kindStyle: {},
			maskShow:false,
        }
    },
    // 组件的生命周期
    created(){

    },
    // 我们要写的一些方法
    methods: {
        kindMove(index,event){
            let elem = event.target
            this.kindIndex = index
            this.kindStyle = Object.assign({},this.kindStyle,{
                left: elem.offsetLeft + 'px',
                width: elem.offsetWidth + 'px'
            })
		},
		open(){
			this.maskShow=true;
		},
		close(){
			this.maskShow=false;
		}
    }
}
</script>
<style lang="less">
@import '~@/assets/style/glob.less';

#category{
    .nav{
		width: 1080px;
		height: 60px;
		margin: 0 auto;
	}
	.clearfix{
		zoom: 0;
	}
	.clearfix:after{
		content: '';
		display: table;
		clear: both;
	}
	.hearder{
		background: #5478EB;
		width:100%;
		height: 60px;
		color: #FFFFFF;
	}
	.nav>.logo{
		float: left;
		width: 24px;
		height: 33px;
		border: 5px solid #5478EB ;
		background-color: #5478EB;
		border-radius: 70%;
		margin-top: 13px;
	}
	.annotation>dl{
		float: left;
		margin-top: 10px;
		margin-left: 15px;
	}
	.annotation>dl>dt{
		float: left;
		width: 62px;
		height: 28px;
		font-size: 20px;
		color: #5478EB;
		font-weight: 600;
	}
	.annotation>dl>dd{
		width: 60px;
		height: 13px;
		font-size: 9px;
		font-weight: 600;
		color: #5478EB;
	}
	.topnav>ul>li{
		float: left;
		width: 60px;
		height: 14px;
		font-size: 14px;
		font-weight: 500;
		margin-top: 18px;
		margin-left: 30px;
	}
	.search>dl>dt{
		float: left;
		margin-top: 18px;
	}
	.search>dl>dd{
		float: left;
		margin-top: 18px;
		margin-left: 10px;
		font-size: 14px;
	}
	.navigation>p{
		float: left;
		margin-top: 15px;
		margin-left: 30px;
		padding: 5px;
		border: 1px solid #5478EB;
		color: #5478EB;
		border-radius: 15px;
	}
	.login>img{
		margin-top: 14px;
		margin-left: 15px;
	}
	.photo{
		width: 100%;
		height: 210px;
		overflow: hidden;
		text-align: center;
	}
	.photo>img{
		width: 1920px;
		height: auto;
		margin: 0 auto;
	}
	.main{
		width: 1080px;
		margin: 0 auto;
	}
	.main>.banner{
		width: 1080px;
		height: 378px;
		margin: 0 auto;
		background: white;
		border: 0px solid white;
		transform: translate(-10px,-84px);
		box-shadow: 0px 3px 2px rgba(0,0,0,0.3),0 0 5px rgba(0,0,0,0.1 )inset;
	}
	.main>.banner>dl{
		position: relative;
		height: 84px;
		line-height: 84px;
		background: #FFFFFF;
	}
	.main>.banner>dl>dt{
		width: 100%;
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		text-align: center;
	}
	.main>.banner>dl>dd{
		position: absolute;
		width: 37px;
		height: 24px;
		line-height: 24px;
		top: 50%;
		transform: translateY(-50%);
		right: 20px;
		font-size: 12px;
		color: #5478EB;
		border: 1px solid #5478EB;
		border-radius: 12px;
	}
	.shop{
		float: left;
		margin-left: 30px;
		margin-top: 20px;
	}
	.shop>.user>img{
		float: left;
	}
	.shop>.user>dl{
		float: left;
		margin-left: 3px;
	}
	.shop>.summary>p{
		float: left;
		margin-top: 30px;
	}
	.shop>.tool{
		border-bottom: 1px solid #EFEFEF;
		padding-bottom: 20px;
	}
	.tool>dl>dt>ul>li{
		float: left;
		margin-top: 40px;
		font-size: 24px;
	}
	.tool>dl>dd{
		float: right;
		margin-top: 50px;
		margin-right: 15px;
	}
	.msg>p{
		padding-top: 20px;
	}
	
	//tab内容
	.main-wrap{
		width: @wap;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
		.main-right{
			width: 280px;
		}
		.kind-native{
			display: flex;
			padding: 30px 0 14px;
			border-bottom: 1px solid #EFEFEF;
			position: relative;
			>dt{
				width: 32px;
				height:4px;
				background:rgba(84,120,235,1);
				border-radius:3px;
				position: absolute;
				bottom: 0;
				left: 0;
				transition: all @transTime;
			}
			>dd{
				width: auto;
				height: 22px;
				line-height: 22px;
				margin-right: 50px;
				font-size:16px;
				color:rgba(153,153,153,1);
				text-shadow: -4px 1px 3px  rgba(89, 125, 243, 0);
				cursor: pointer;
				transition: all @transTime;
				&.active{
					color:rgba(84,120,235,1);
					// font-weight: bold;
					text-shadow: 2px 1px 3px  rgba(89, 125, 243, 0.4);
				}

			}
		}
	}
	//圈子
	.circle{
		.palte-comment{
			padding-top: 20px ;
			margin-bottom: 20px;
			background-color: #fff;
			.function-discuss{
				>dl{
					display: flex;
					justify-content: flex-end;
					margin-top: 10px;
					>dt{
						height:28px;
						font-size:14px;
						color:rgba(153,153,153,1);
						line-height:28px;
						margin-right: 20px;
					}
					>dd{
						width:85px;
						height:28px;
						line-height: 28px;
						text-align: center;
						border-radius:@bradius;
						border:1px solid rgba(151,151,151,.8);
						cursor: pointer;
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
							&:last-child{
								height: 18px;
								line-height:18px;
								font-size: 12px;
								display: flex;
								justify-content: space-between;
								align-content: center;
								>p{
									cursor: pointer;
									>span{
										display: inline-block;
										width: 14px;
										height: 14px;
										background: rgba(151,151,151,.8);
										margin-right:5px;
									}
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

	.catalogue{
		width: 749px;
		//目录
		.catalogue-wrap{
			>li{
				padding-bottom:15px;
				border-bottom:1px solid rgba(242,242,242,1);
				>div{
					display: flex;
					align-items: center;
					padding: 15px 0;
					>span{
						display: flex;
						justify-content: center;
						align-items: center;
						width:56px;
						height:24px;
						background:rgba(3,191,140,1);
						border-radius:13px;
						font-size:12px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(255,255,255,1);
						margin-right: 10px;
					}
					>font{
						font-size:18px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(102,102,102,1);
					}
					>p{
						font-size:12px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(153,153,153,1);
						line-height:24px;
						position: relative;
						padding-left: 23px;
						&::before{
							content: '';
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							left: 10px;
							width:3px;
							height:3px;
							background:rgba(153,153,153,1);
							border-radius: 50%;
						}
					}
				}
				>dl{
					display: flex;
					>img{
						width: 180px;
						height: 120px;
						border-radius:3px; 
					}
					>div{
						flex: 1;
						padding-left: 15px; 
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						>h5{
							font-size:18px;
							font-family:PingFangSC-Medium;
							font-weight:500;
							color:rgba(51,51,51,1);
							line-height:24px;
							margin-bottom: 2px;
						}
						>p{
							font-size:12px;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(102,102,102,1);
							line-height:24px;
							overflow: hidden;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							display: -webkit-box;
							height: 72px;
						}
						>ol{
							display: flex;
							align-items: center;
							margin-top: 8px;
							>li{
								display: flex;
								align-items: center;
								>img{
									display: block;
									width: 12px;
									height: 12px;
								}
								>span{
									font-size:12px;
									font-family:PingFangSC-Regular;
									font-weight:400;
									color:rgba(153,153,153,1);
									line-height:14px;
								}
							}
						}
					}
				}
			}
		}
		//挑战／抗魔计划
		.challenge{
			>ul{
				>li{
					display: flex;
					padding: 15px 0;
					>img{
						width: 340px;
						height: 160px;
						border-radius: 3px;
					}
					>dl{
						flex: 1;
						padding-left: 20px;
						>dt{
							display: flex;
							align-items: center;
							margin-bottom: 10px;
							>img{
								width: 24px;
								height: 24px;
								margin-right: 10px;
							}
							>h5{
								font-size:18px;
								font-family:PingFangSC-Medium;
								font-weight:500;
								color:rgba(51,51,51,1);
								line-height:24px;
							}
						}
						>dd{
							font-size:14px;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(102,102,102,1);
							line-height:28px;
							height: 84px;
							overflow: hidden;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							display: -webkit-box;
						}
						>div{
							margin-top: 20px;
							display: flex;
							align-items: center;
							>p{
								font-size:14px;
								font-family:PingFangSC-Regular;
								font-weight:400;
								color:rgba(84,120,235,0.7);
								line-height:14px;
								padding-right: 10px;
								border-right: 1px solid rgba(239,239,239,1);
							}
							>img{
								width: 15px;
								height: 10px;
								margin: 0 9px 0 15px;
							}
							>span{
								font-size:12px;
								font-family:PingFangSC-Regular;
								font-weight:400;
								color:rgba(153,153,153,1);
								line-height:24px;
							}
						}
					}
				}
			}
		}

	}
	// 右侧内容
	.main-right{
		.share{
			.card-share{
				display: flex;
				height: 48px;
				border-radius:8px;
				border:1px solid rgba(84,120,235,0.4);
				overflow: hidden;
				margin-bottom: 30px;
				>div{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
					font-size:14px;
					font-family:PingFangSC-Medium;
					font-weight:500;
					&:nth-child(1){
						color:rgba(84,120,235,1);
						background: #fff;
						width: 104px;
					}
					&:nth-child(2){
						flex: 1;
						background: #5478EB;
						color:rgba(255,255,255,1);
					}
				}
			}
			.card-info{
				margin: 38px 0 30px;
				display: flex;
				align-items: flex-end;
				font-size:12px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:#666666;
				>span{
					font-size:32px;
				}
			}
			.card-but{
				display: flex;
				justify-content: center;
				align-items: center;
				width:280px;
				height:48px;
				background:rgba(84,120,235,1);
				border-radius:8px;
				border:1px solid rgba(84,120,235,0.4);
				margin: 0 auto;
				>p{
					font-size:18px;
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:18px;
				}
				>span{
					display: block;
					font-size:18px;
					font-family:PingFangSC-Light;
					font-weight:300;
					color:rgba(255,255,255,1);
					padding-left: 16px;
					border-left: 1px solid rgba(255,255,255,0.2);
					margin-left: 15px;
				}
			}
			.card-msg{
				display: flex;
				justify-content: center;
				align-items: flex-end;
				padding: 30px 0 24px;
				>span{
					font-size:12px;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(102,102,102,1);
					line-height:12px;
				}
				>div{
					margin: 0 60px;
					>span{
						font-size:24px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(84,120,235,1);
						line-height:24px;
					}
					>font{
						font-size:12px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:#666666;
					}
				}
			}
			.card-version{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 26px 16px 0;
				height:189px;
				box-sizing: border-box;
				width: 100%;
				border-radius:8px;
				border:4px solid rgba(84,120,235,0.2);
				position: relative;
				>span{
					position: absolute;
					width:12px;
					height:12px;
					background:rgba(3,191,140,1);
					left: 50%;
					transform: translateX(-50%);
					top: -9px;
					border-radius: 50%;
					border:2px solid rgba(3,191,140,0.2);
					
				}
				&::before{
					content: '';
					position: absolute;
					left: 30px;
					top: -8px;
					width:10px;
					height:10px;
					border-radius: 50%;
					background:rgba(153,153,153,1);

				}
				&::after{
					content: '';
					border-radius: 50%;
					position: absolute;
					right: 30px;
					top: -8px;
					width:10px;
					height:10px;
					background:rgba(84,120,235,1);
				}
				>p{
					font-size:12px;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:24px;
				}
				>div{
					padding: 15px 0;
					display: flex;
					>span{
						font-size:12px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(153,153,153,1);
						line-height:12px;
						//transform: scale(0.8);
						&:last-child{
							margin-right: 0;
							padding-left: 8px;
							border-left:1px solid rgba(239,239,239,1);
						}
					}
				}
			}
		}
		.author-wrap{
			padding: 66px 30px 30px;
			background:rgba(248,249,255,1);
			border-radius:2px;
			margin-top: 80px;
			position: relative;
			>img{
				position: absolute;
				width: 100px;
				height: 100px;
				border-radius: 50%;
				display: block;
				left: 50%;
				top: 0;
				transform: translate(-50%,-50%);
				
			}
			.author-msg{
				display: flex;
				justify-content: center;
				>div{
					&:last-child{
						padding-right: 10px;
						margin-right: 10px;
						border-right:1px solid rgba(239,239,239,1);
					}
					display: flex;
					align-items: flex-end;
					>p{
						font-size:18px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:#333333;
						line-height:18px;
					}
					>span{
						font-size:12px;
						font-family:PingFangSC-Medium;
						color:#999999;
					}
				}
			}
			>h6{
				font-size:12px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(51,51,51,1);
				line-height:24px;
				padding-bottom: 10px;
				border-bottom:1px solid rgba(239,239,239,1);
				margin: 15px 0 10px;
			}
			>p{
				font-size:12px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(102,102,102,1);
				line-height:24px;
			}
			.author-more{
				height:32px;
				background:rgba(84,120,235,1);
				border-radius:2px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size:12px;
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height:32px;
				margin-top: 30px;
			}
		}
		>img{
			width: 100%;
			margin-top: 20px;
		}
	}

	//弹框
	.mask{
		width: 100vw;
		height: 100vh;
		background:rgba(0,0,0,0.8);
		position: fixed;
		left: 0;
		top: 0;
	}
	.QR-wrap{
		position: fixed;
		width: 800px;
		height: 405px;
		left: 50%;
		transform: translateX(-50%);
		top: 165px;
		background: #fff;
		>div{
			width: 100%;
			height: 100%;
			position: relative;
			padding: 40px;
			box-sizing: border-box;
			>h6{
				font-size:16px;
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:16px;
				padding-bottom: 20px;
				text-align: center;
				border-bottom: 1px solid rgba(239,239,239,1);
			}
			>div{
				margin-top: 30px;
				display: flex;
				justify-content: center;
				>img{
					width: 400px;
					height: 257px;
					margin-right: 30px;
				}
				>div{
					>div{
						display: flex;
						justify-content: center;
						align-items: center;
						width:200px;
						height:32px;
						background:rgba(84,120,235,0.1);
						border-radius:16px;
						border:1px solid rgba(84,120,235,0.3);
						font-size:12px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(84,120,235,1);
						line-height:12px;
					}
					>img{
						width: 200px;
						height: 200px;
						margin-top: 25px;
					}
				}
			}
			>img{
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: -90px;
			}
		}
	}
	//支付码
	.QR-code{
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		top: 200px;
		width:320px;
		height: 346px;
		background: #fff;
		>div{
			position: relative;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.code-close{
			position: absolute;
			right: 5px;
			top: 5px;
			cursor: pointer;
		}
		.code-img{
			margin: 20px 0 15px;
			width: 160px;
			height: 160px;
			
		}
		>p{
			font-size:16px;
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(102,102,102,1);
			line-height:16px;
		}
		>span{
			font-size:12px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(0,0,0,1);
			line-height:12px;
		}
	}


	// <section class="settlement-wrap">
	// 	<div class="settlement">
	// 		<h5>结算中</h5>
	// 		<div class="settlement-msg">
	// 			<div>
	// 				<h6>我在阿里做UI的8年成长历程</h6>
	// 				<div>
	// 					<div>专题圈 | 限时优惠</div>
	// 					<p>￥299.00/年</p>
	// 					<span>￥399.00</span>
	// 				</div>
	// 			</div>
	// 			<p>加入圈子，你将获得加入之日前圈主所有的文章，以及往后一年内更新的所有文章，你将可以和优秀的设计师们一起学习交流，和圈主一起每天比别人多进步一点。</p>
	// 		</div>

	// 		<div class="settlement-way">
	// 			<div class="user-msg">
	// 				<img src="@/assets/images/temp/QR-code.png">
	// 				<div>
	// 					<div>微笑的冰欺凌</div>
	// 					<p>我的余额： <span>￥56</span></p>
	// 				</div>
	// 				<p>使用余额</p>
	// 			</div>

	// 			<div class="pay-way">
	// 				<p>请选择支付方式</p>
	// 				<dl>
	// 					<dt>
	// 						<img src="@/assets/images/temp/QR-code.png">
	// 						<span>微信支付</span>
	// 					</dt>
	// 					<dt>
	// 						<img src="@/assets/images/temp/QR-code.png">
	// 						<span>支付宝</span>
	// 					</dt>
	// 					<dd>
	// 						支付倒计时
	// 						<span>59</span>分
	// 						<span>23</span>秒
	// 					</dd>
	// 				</dl>
	// 				<div>
	// 					<p></p>
	// 					<div>
	// 						<p>应付金额：<font>￥243.00</font></p>
	// 						<div>立即支付</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>

	//结算中
	.settlement-wrap{
		background:rgba(248,249,255,1);
		padding: 30px 0 60px;
		.settlement{
			margin: 0 auto;
			width: @wap;
			>h5{
				font-size:24px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:24px;
				padding-bottom: 15px;
				border-bottom:1px solid rgba(239,239,239,1);
				margin-bottom: 15px;
			}
			.settlement-msg{
				display: flex;
				align-items: center;
				padding: 30px;
				>div{
					width: 416px;
					border-right:1px solid rgba(239,239,239,1);
					margin-right: 30px;
					>h6{
						font-size:24px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(51,51,51,1);
						line-height:24px;
						margin-bottom: 30px;
					}
					>div{
						display: flex;
						align-items: center;
						>div{
							height: 24px;
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 12px;
							font-size:12px;
							font-family:PingFangSC-Medium;
							font-weight:500;
							color:rgba(255,147,0,1);
							line-height:12px;
							border-radius:15px;
							border:1px solid rgba(255,147,0,0.7);
						}
						>p{
							font-size:18px;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(255,147,0,1);
							line-height:18px;
							margin: 0 15px;
						}
						>span{
							font-size:18px;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:18px;
						}
					}
					
				}
				>p{
					font-size:12px;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(102,102,102,1);
					line-height:24px;
					width: 375px;
				}
			}

		}

		.settlement-way{
			padding: 30px;
			.user-msg{
				display: flex;
				padding-bottom: 12px;
				border-bottom:1px solid rgba(239,239,239,1);
				>img{
					width: 68px;
					height: 68px;
					margin-right: 10px;
				}
				>div{
					div{
						font-size:16px;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(51,51,51,1);
						line-height:16px;
					}
					>p{
						margin-top: 15px;
						font-size:14px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(102,102,102,1);
						line-height:14px;
						>span{
							color: #FF9300;
						}
					}
				}
				>p{
					position: relative;
					padding-left: 25px;
					margin-left: 700px;
					font-size:14px;
					height: 14px;
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(84,120,235,1);
					line-height:14px;
					&::before{
						position: absolute;
						content: '';
						width: 8px;
						height: 8px;
						left: 4px;
						top: 50%;
						transform: translateY(-50%);
						background:rgba(84,120,235,1);
						border-radius: 50%;
					}
					&::after{
						position: absolute;
						content: '';
						width:14px;
						height:14px;
						border:1px solid rgba(84,120,235,1);
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						border-radius: 50%;
					}
				}
			}
		}
	}
}

</style>