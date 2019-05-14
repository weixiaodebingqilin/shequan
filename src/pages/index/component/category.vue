<template>
    <section class="index-category">
        <ul class="theme-wrap">
            <li v-for="(item,index) in 8" :key="index">
                <div class="theme-img">
                    <img src="@/assets/images/temp/theme-banner.png" >
                    <img src="@/assets/images/temp/homework-list.png" >
                </div>
                <div class="theme-title">
                    <h5>UI设计的奇妙世界</h5>
                    <p>微笑的冰欺凌，大厂丰富经验</p>
                    <div><span>试看</span>为什么你的界面总是不耐看？</div>
                </div>
                <div class="theme-msg">
                    <div>
                        <p>主题圈介绍</p>
                        <div>
                            <span>已更新23章</span>
                            <span>2101人参加</span>
                        </div>
                    </div>
                    <p>在奇妙世界每天会有实际项目中遇见的各种问题解析，带领大家提高设计的认知，指引设计师找到方向且提高设计能力，在学习过程中，优化设计思维，结交志同道合的设计...</p>
                    <dl>
                        <dt>￥398/年</dt>
                        <dd>
                            <img src="@/assets/images/temp/join-button.png" >
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'index-category'
}
</script>



