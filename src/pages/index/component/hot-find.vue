<template>
    <section class="hot-find loadUp">
        <ul class="kind-box">
            <card-artical></card-artical>
        </ul>
        <!-- 专题 special -->
        <section class="index-special">
            <img src="@/assets/images/temp/Group2.png" >
            <div >
                <p>专题</p>
                <div class="special-user">
                    <section>
                        <img src="@/assets/images/temp/header.png" >
                        <p>Seany</p>
                    </section>
                    <div>
                        <img src="@/assets/images/temp/browse.png" >   
                    </div>
                    
                    <p>502582</p>
                    <span>26篇文章</span>
                </div>
                <dl>
                    <dt>10000个知识点的大型快速复盘</dt>
                    <dd>
                        <text-hd >网络上有很多关于Icon设计的文章，一些文章从部分维度切入讲述Icon的设计理念，但大部分缺乏整体性，所以我尝试把自己的思考方式结合其他人的设计理念整理了一个完整的Icon设计法则。</text-hd>
                    </dd> 
                </dl>
            </div>
            
        </section>
        <!-- others -->
        <ul class="kind-box">
            <card-artical></card-artical>
            <card-artical></card-artical>
        </ul>
    </section>
</template>
<script>
import molecule from '@/components/molecule/mixins.js'
import atomy from '@/components/atomy/mixins.js'
export default {
    name: 'hot-find',
    components: {
        cardArtical: molecule.cardArtical,
        textHd: atomy.textHd
    },
}
</script>



