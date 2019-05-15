<template>
    <section class="index-knowledge">
        <ul class="knowledge-wrap">
            <li v-for="(item,index) in 2" :key="index">
                <lazy-com >
                    <div>
                        <h5>8分钟学会LOGO的设计语言？</h5>
                        <!-- <video src=""></video> -->
                        <img class="know-video" src="@/assets/images/temp/video-banner.png" >
                        <div class="know-msg">
                            <div class="know-author">
                                <img src="@/assets/images/temp/header.png" >
                                <p>你丫才美工</p>
                                <span>《设计大师是如何成长的》</span>
                            </div>
                            <div class="know-hot">
                                <img src="@/assets/images/temp/browse-big.png" >
                                <span>18274</span>
                                <img src="@/assets/images/temp/collect.png" >
                            </div>
                        </div>
                    </div> 
                    <!-- 22 -->
                    <section class="knowledge-skeletion" slot='skeleton'>
                        <ul class="main">
                            <li class="big"></li>
                            <li></li>
                        </ul>
                    </section>
                </lazy-com>
                  
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'index-knowledge',
}
</script>


