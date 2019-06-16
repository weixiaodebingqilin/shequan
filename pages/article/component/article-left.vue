<template>
    <div class="main-left">
        <!-- //文章内 容 -->
        <div class="article-box">
		<div class="article-content">
			<div class="article-user">
			<div class="article-user-sum">阅读收获<span>80</span>分</div>
			<h5>{{article.title || '如何让算法解释自己为什么“算法歧视“？'}}</h5>
			<div class="user-msg">
				<img src="@/assets/images/temp/header.png">
				<dl>
					<dt>
					<font>胡凌</font><span>+关注</span>
					</dt>
					<dd>
					<p>阿里资深UI设计师，专注设计规则，提升作图效率</p>
					<div>
						<div>
							<img src="@/assets/images/icon/clock.png">
							<span>2019-03-18</span>
						</div>
						<div>
							<svg class="icon"
							aria-hidden="true"
							style="font-size:14px;">
							<use xlink:href="#iconliulan"></use>
							</svg>
							<span>8255</span>
						</div>
						<div>
							<svg class="icon"
							aria-hidden="true"
							style="color:#333;">
							<use xlink:href="#icontuijian1"></use>
							</svg>
							<span>102</span>
						</div>
						<div>
							<svg class="icon"
							aria-hidden="true">
							<use xlink:href="#icondianzan"></use>
							</svg>
							<span>646</span>
						</div>
					</div>
					</dd>
				</dl>

			</div>
			</div>
			<div class="article-details">

			</div>
		</div>
		<!-- //文章内容 -->
		<div v-if="article.content"
			class="article-comment">
			<div v-html="article.content"></div>
			上面的是创建的内荣
			<hr>
		</div>

		<div class="article-comment">
			<div class="article-content">
			<p>B端产品主要是在PC端，那么就涉及到屏幕大小，响应式/自适应设计的调整，内容呈现的多少。PC端产品的布局，也会比较固定，以左右布局居多，左导航右内容。移动端的产品，受硬件设备-手机的屏幕宽度高度受限，所以在展示的内容，交互的方式上面都有别于B端PC产品。现在部分B端产品也会同时做移动端，比如Trello和Teambition, 但是体验还是PC方便，而且有时候离了办公室不是很想在手机上办公。</p>
			<h5>从不同维度对Icon设计进行解析，整理一整套Icon设计的法则</h5>
			<p>网络上有很多关于Icon设计的文章，一些文章从部分维度切入讲述Icon的设计理念，但大部分缺乏整体性。 所以我尝试把自己的思考方式结合其他人的设计理念整理了一个完整的Icon设计法则，通过简单易懂的描述语言，并且结合设计案例呈现出来，希望能够对大家有所帮助。文章使用的案例只代表个人观点，并不代表相关产品。 本文重点讲述Icon设计思维，关于Icon的具体定义以及具体的制作过程就不再赘述，网络上有很多相关文章都有讲述。 从不同维度对Icon设计进行解析，整理一整套Icon的设计法则。每一个产品中都有不同类型的Icon，产品通过Icon可以快速的向用户传递语意，通过独特的设计语言让用户形成对于产品的认知心智。Icon的重要性就不言而喻了。 ICON的设计法则-菱形设计法则，主要包括语意、层级、设计形式、风格、一致性、范围。而其他的设计思考也是这个设计法则的变体，中心思想没有发生变化。通过对以上设计思考点的聚合，来设计能够传递Icon语意，并且能够清晰展现产品结构和信息层级的Icon系统，通过差异化的设计形式展现产品设计的独特风格，让具有一致性的设计语言传递信息，和用户形成共鸣。</p>
			<img src="@/assets/images/temp/articlepic.jpg">
			</div>
			<div class="article-comment-flow">
			<div>本文由 @胡凌 发布于 设圈 未经授权禁止转载</div>
			<ul>
				<li class="comment-flow-active">
					<!-- <img src="@/assets/images/icon/white.png"/> -->
					<svg class="icon"
					aria-hidden="true">
					<use xlink:href="#icondianzan2"></use>
					</svg>
					<font>赞</font>
					<span>42</span>
				</li>
				<li class="pointer">
					<svg class="icon"
					aria-hidden="true">
					<use xlink:href="#iconzuoye"></use>
					</svg>
					<font>收获</font>
				</li>
				<li class="like">
					<!-- <img src="@/assets/images/icon/blue-like.png"/> -->
					<svg class="icon"
					aria-hidden="true">
					<use xlink:href="#icontuijian1"></use>
					</svg>
					<font>已收藏</font>
					<span>52</span>
				</li>
			</ul>
			</div>
		</div>
	  </div>
        <!-- 作者信息 -->
        <div class="article-author">
            <div class="user-msg">
                <img src="@/assets/images/temp/header.png">
                <dl>
                    <dt>
                        <font>胡凌</font><span>关注</span>
                    </dt>
                    <dd>
                        <ul class="author-popularity">
                            <li>专题 <span>2</span></li>
                            <li>文章 <span>62</span></li>
                            <li>总人气 <span>60W</span></li>
                        </ul>
                    </dd>
                </dl>
                <div class="author-works">
                    <img src="@/assets/images/temp/pic1.png">
                    <img src="@/assets/images/temp/pic2.png">
                </div>
            </div>
        </div>
        <!-- 评论 -->
        <section class="palte-comment">
            <!-- 功能区--我发表评论 -->

           <div class="article-apprasie">
	      <spit-text ref='spitT'
                       @spit='createSpit'></spit-text>
	     </div>
            <div class="show-comment-box">
                <ul class="show-comment">
                    <li class="comment-list"
                        v-for="(item,index) in commits"
                        :key='item._id'>
                        <img src="@/assets/images/temp/header.png">
                        <section>
                            <dl class="spitOrReport">
                                <dt>{{item.nickname}}<span>{{item.publishtime}}</span></dt>
                                <dd>{{item.content}}</dd>
                                <dd>
                                   <p class="sidetext">14:02</p>
					      <p @click="spitIndx = index"><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                </dd>
                            </dl>
                            <spit-text ref='spitT'
                                       :data-id='item._id'
                                       v-if="index === spitIndx"
                                       @spit='createSpit'></spit-text>

                        </section>
                    </li>
                    <li class="comment-list">
                        <img src="@/assets/images/temp/userpic1.png">
                        <section>
                            <dl class="spitOrReport">
                                <dt>微笑的冰欺凌<span></span></dt>
                                <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                <dd>
						<p class="sidetext">14:02</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                </dd>
                            </dl>
                        </section>
                    </li>
                    <li class="comment-list">
                        <img src="@/assets/images/temp/userpic2.png">
                        <section>
                            <dl class="spitOrReport">
                                <dt>heytoo<span></span></dt>
                                <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                <dd>
                                   <p class="sidetext">5月</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                </dd>
                            </dl>
                            <ul class="show-comment show-second">
                                <li class="comment-list">
                                    <img class="second-list-img"
                                         src="@/assets/images/temp/userpic3.png">
                                    <section>
                                        <dl class="spitOrReport">
                                            <dt>林峰飘扬<span></span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd>
                                               <p class="sidetext">14:02</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                            </dd>
                                        </dl>
                                    </section>
                                </li>
                                <li class="comment-list">
                                    <img class="second-list-img"
                                         src="@/assets/images/temp/userpic4.png">
                                    <section>
                                        <dl class="spitOrReport">
                                            <dt>萌娅呀<span></span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd>
                                               <p class="sidetext">14:02</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                            </dd>
                                        </dl>
						    <div class="more-comment">展开更多评论</div>
                                    </section>
						
                                </li>
                                

                            </ul>
                        </section>
                    </li>
                    <li class="comment-list">
                        <img src="@/assets/images/temp/userpic5.png">
                        <section>
                            <dl class="spitOrReport">
                                <dt>HDK<span></span></dt>
                                <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                <dd>
                                     <p class="sidetext">14:02</p>
                                     <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                </dd>
                            </dl>
                            <ul class="show-comment show-second">
                                <li class="comment-list">
                                    <img class="second-list-img"
                                         src="@/assets/images/temp/userpic3.png">
                                    <section>
                                        <dl class="spitOrReport">
                                            <dt>时间的天气<span></span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd>
                                               <p class="sidetext">14:02</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                            </dd>
                                        </dl>
                                    </section>
                                </li>
                                <li class="comment-list">
                                    <img class="second-list-img"
                                         src="@/assets/images/temp/header.png">
                                    <section>
                                        <dl class="spitOrReport">
                                            <dt>微笑的冰欺凌<span></span></dt>
                                            <dd>第三类icon叫语意型有些容易混淆，其他的icon设计不也有语意这一层？笔者说的这类，我理解的为“说明型icon”“解释型icon”“辅助型icon”。</dd>
                                            <dd>
                                               <p class="sidetext">14:02</p>
                                    <p><svg class="icon"
                                             aria-hidden="true">
                                            <use xlink:href="#iconhuifu1"></use>
                                        </svg>回复</p>
                                            </dd>
                                        </dl>
                                    </section>
                                </li>
                            </ul>
                        </section>
                    </li>
                </ul>
            </div>
		 <div class="comment-addmore">
                    <span>更多评论</span>
        	 </div>
        </section>
        <!-- //文章推送 -->
        <div class="article-push">
            <ul class="kind-box">
                <card-artical></card-artical>
                <card-artical></card-artical>
            </ul>
        </div>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import cardArtical from '@/components/molecule/card-artical.vue'
import { spitAdd, spitQuery } from '@/api/spit.js'
import { articleDetailQuery } from '@/api/article.js'
export default {
    name: 'article-left',
    components: {
        cardArtical,
        spitText: atomy.spitText
    },
    data() {
        return {
            emptChange: 0,
            test: '',
            spitKey: true, // 
            commits: [],
            spitIndx: '', // 索引值
            article: '', // 文章内容
        }
    },
    created() {
        let param = this.$route.query
        if (param.aid) {
            this.articleDetailQuery(param.aid)
        }

        this.querySpit()
    },
    methods: {
        articleDetailQuery(id) {
            articleDetailQuery(id).then(res => {
                console.log('articleDetailQueryres: ', res)
                this.article = res.data.data
            })
        },
        // 发表评论
        createSpit(e) {
            if (!this.spitKey) return
            this.spitKey = false
            let ref = this.$refs.spitT[0]
            let parentid = ref ? ref.$attrs['data-id'] : ''
            let _data = {
                content: e,
                nickname: 'heytoo',
                url: '',
                parentid: parentid,
            }

            spitAdd(_data).then(res => {
                this.spitKey = true
                if (res.data.flag) {
                    ref.empty()
                    this.spitIndx = ''
                } else {
                    // 评论失败
                }
            })
        },
        // 查询评论
        querySpit() {
            spitQuery().then(res => {
                if (res.data.flag) {
                    this.commits = res.data.data
                }
            })
        }
    }
}
</script>
