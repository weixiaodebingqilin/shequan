<template>
    <section class="home-work">
        <div class="home-work-wrap">
            <h5>Icon的规范性设计（10题）</h5>
            <div class="hw-close">
                <img src="@/assets/images/temp/close.png" >
            </div>
            <div class="topic-wrap"  v-for="(item,index) in 8" :key="index">
                <div class="topic-item">
                    <h6>{{index+1}}.画一个Icon的步骤是？ <span>（单选）</span> </h6>
                    <ul>
                        <li><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-check"><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-true"><span></span>打开Sketch，好了完了</li> 
                        <li class="topic-active-error"><span></span>打开Sketch，好了完了</li> 
                    </ul>
                </div>
            </div>
            <div class="home-work-button">
                <button class="cencle">取消</button>
                <button class="confrim">确定</button>
            </div>
        </div>
    </section>
    
</template>
<script>
export default {
    name: 'home-work'
}
</script>



