<template>
    <ul class="category-erap">
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
</template>
<script>
export default {
    name: 'category-erap'
}
</script>


