<template>
    <div class="category-challenge loadUp" >
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
</template>
<script>
export default {
    name: 'category-challenge'
}
</script>



