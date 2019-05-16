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
                        <img src="@/assets/images/icon/right.png" >
                        <p>最有效的学习方法</p>
                    </li>
                    <li>
                        <img src="@/assets/images/icon/right.png" >
                        <p>最有效的学习</p>
                    </li>
                    <li>
                        <img src="@/assets/images/icon/right.png" >
                        <p>最有效的学习方法</p>
                    </li>
                    <li>
                        <img src="@/assets/images/icon/right.png" >
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
                    <div class="projects-timer">
                        <span>30天</span>
                        <span>实战</span>
                    </div>
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




