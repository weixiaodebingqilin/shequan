<template>
    <div id="challenge">
        <div class="main">
            <section class="challenge-top">
                <div class="challenge-banner">
                    <img src="@/assets/images/temp/challenge-banner.png" />
                    <span>挑战</span>
                </div>
                <dl class="top-cont">
                    <dt>
                        <h2>
                            简约插画30天挑战训练
                            <span>该模式连续坚持完30天退还所有保证金</span>
                        </h2>
                        <text-hd>
                            学习是自己的，有收获就有付出，没有付出就一定没有收获。在这里我将每天带领大家一起学习插画，每天完成一些简单插画的作业。成功需要的是坚持，如果你想学习到东西。那请你对自己保证吧。30天实战挑战练习，你还在等什么？百见不如一练，来吧，用行动说话！
                        </text-hd>
                        <dl class="challenge-careful">
                            <dt>注意：</dt>
                            <dd>
                                <text-hd>本着监督自身积极学习的态度，用实际行动说话，为自己保证。该模式需要先支付99元对抗金，完成老师每天带领的练习后将所有保证金！但是若此过程中有一天没有坚持完成练习，保证金将一分不退还。</text-hd>
                            </dd>
                        </dl>
                        <ul class="challenge-popularity">
                            <li>
                                3459 <span>人参加</span>
                            </li>
                            <li>
                                32W <span>人气</span>
                            </li>
                        </ul>
                    </dt>
                    <dd>
                        <div class="challenge-day">
                            <img src="@/assets/images/icon/challenge-day.png">
                            <p>30</p>
                        </div>
                        <div class="chanlenge-money">
                            <dl>
                                <dt>￥99.00</dt>
                                <dd>保证金</dd>
                            </dl>
                            <p>
                                截止日期：
                                <span>2019年4月20日</span>
                            </p>
                        </div>
                        <div class="chanllenge-join">
                            <img src="@/assets/images/icon/join-right.png">
                        </div>
                    </dd>
                </dl>
            </section>
            <!-- cont -->
            <section class="challenge-cont">
                <div class="challenge-left">
                    <nav class="challenge-cont-nav">
                        <table-native :clounms="kindNative"
                                      @tableMoveIndex="tableMoveIndex"></table-native>
                    </nav>
                    <section class="chanllenge-contBox">
                        <!-- 日程 -->
                        <ul class="chanllenge-schedule"
                            v-if="tableIndex===0">
                            <!-- status 状态：['今日','今日已完成','已完成','未完成'] -->
                            <timeTaskAxis isToday>
                                <nav>
                                    <span>今天</span>
                                    <p>请在明日9:30之前提交练习作业</p>
                                </nav>
                            </timeTaskAxis>
                            <timeTaskAxis></timeTaskAxis>
                            <timeTaskAxis></timeTaskAxis>
                        </ul>
                        <!-- 挑战圈 -->
                        <div class="chanllenge-circle"
                             v-if="tableIndex===1">
                            <ul class="circle-nav">
                                <li class="screen-active">全部</li>
                                <li>作业</li>
                                <li>精选</li>
                                <li>红名单</li>
                            </ul>
                            <ul class="circle-comment">
                                <li v-for="(item,index) in 5"
                                    :key="index">
                                    <img src="@/assets/images/temp/challenge-head.png">
                                    <section>
                                        <h6>KIM_会飞的鱼 <span>刚刚</span></h6>
                                        <p><span>＃作业 </span> 嗯，圈主教的太好了！</p>
                                        <div class="comment-img">
                                            <img src="@/assets/images/temp/challenge-comment.png">
                                            <img src="@/assets/images/temp/challenge-comment.png">
                                            <img src="@/assets/images/temp/challenge-comment.png">
                                        </div>
                                        <dl>
                                            <dt class="green">
                                                <img src="@/assets/images/temp/challenge-comment.png">
                                                <span>已批改</span>
                                            </dt>
                                            <dd class="dd-green">来！我把我把画笔给你，你来做圈主！</dd>
                                        </dl>
                                        <div class="comment-browse">
                                            <div>
                                                <img src="@/assets/images/temp/challenge-comment.png">
                                                <span>320</span>
                                            </div>
                                            <div>
                                                <img src="@/assets/images/temp/challenge-comment.png">
                                            </div>
                                        </div>
                                        <ol>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png">
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png">
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png">
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png">
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <li>
                                                <img src="@/assets/images/temp/challenge-head.png">
                                                <section>
                                                    <h6>胡凌 <span> 02.20 14:23</span></h6>
                                                    <p>楼下的这个家伙是真的笑死我了，脑洞真的大，哈哈哈。求老大明天的实战是动物世界！</p>
                                                    <div>
                                                        <div>
                                                            <img src="@/assets/images/temp/challenge-comment.png">
                                                            <span>320</span>
                                                        </div>
                                                    </div>
                                                </section>
                                            </li>
                                            <button>展开更多评论</button>
                                        </ol>
                                    </section>
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
                        </div>
                    </section>
                </div>
                <div class="challenge-right">
                    <author-wrap></author-wrap>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import atomy from "@/components/atomy/mixins.js";
import molecule from "@/components/molecule/mixins.js";
export default {
    name: "challenge",
    components: {
        textHd: atomy.textHd,
        tableNative: atomy.tableNative,
        showStar: atomy.showStar,
        timeTaskAxis: molecule.timeTaskAxis,
        authorWrap: molecule.authorWrap
    },
    data() {
        return {
            kindNative: ["日程", "挑战圈"],
            tableIndex: 0
        };
    },
    methods: {
        tableMoveIndex(index) {
            this.tableIndex = index;
        }
    }
};
</script>


