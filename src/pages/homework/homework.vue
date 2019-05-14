<template>
    <!-- 批改作业 -->
    <div id="homework">
        <section class="work-head">
            <div>
                今天 · <font>办公室场景插图</font>
            </div>
            <p>请为您带领的设计师们，验收学习成果吧～被设置为不符合主题将会被退回，您可以将违规或<span>与主题无关</span>
            的作品退回并说明理由，若用户当天没有再次重新提交作业，将被算作缺练没有坚持，
            <span>退回理由将会公示在公屏。</span>点击作品可查看详情。
            </p>
        </section>
        <section class="work-main">
            <div class="main-nav">
                <ul>
                    <li class="nav-active">未查阅 <span>240</span></li>
                    <li>全部</li>
                    <li>精选</li>
                    <li>不合格</li>
                </ul>
                <div>提交批改</div>
            </div>
            <ul class="main-list">
                <li v-for="(item,index) in 25" :key="index" :class="index === 3 ?'active-correct1':''">
                    <div class="handpick">精选</div>
                    <img src="@/assets/images/temp/homework-list.png" >
                    <div class="work-explain">
                        <h6>@KIM_会飞的鱼 </h6>
                        <p>嗯，圈主教的太好了！经历了这么多天我居然会画这种插画了</p>
                    </div>
                    <div class="correct">不符合主题</div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
    name: 'homework',

}
</script>




