<template>
    <section class="newest-share">
       <ul>
           <li v-for="(item,index) in 3" :key="index">
               <dl class="share-head">
                   <dt><img src="@/assets/images/temp/header.png" ></dt>
                   <dd>
                       <h5>呼唤你的声音  <span>刚刚</span></h5>
                       <P>太不容易了终于画完了</P>
                   </dd>
               </dl>
               <div class="share-content">
                    <img src="@/assets/images/temp/Bitmap.png">
                    <ol>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                        <li>
                            <img src="@/assets/images/temp/homework-list.png">
                        </li>
                    </ol>
                    <dl>
                        <dd>
                            <span></span>
                            320
                        </dd>
                        <dd>
                            <span></span>
                            320
                        </dd>
                    </dl>
               </div>
               <div class="share-bototm">
                   <dl class="share-observer">
                       <dt>
                           <img src="@/assets/images/temp/header.png" >
                       </dt>
                       <dd>
                           <div>
                               <span>你丫才美工</span>
                               <span>来至<a>《插画30天实战挑战》</a>的点评</span>
                           </div>
                           <p>总的来说这个作品做的不错，比大多数人处理精致多。</p>
                       </dd>
                   </dl>
                   <ol>
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li> 
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li>
                        <li>
                            <img src="@/assets/images/temp/header.png" >
                            <div>
                                <h5>VixU_Studio  <span>12:23</span></h5>      
                                <p>大神你不睡觉的吗？昨天才做了一套应用，今天又出一套了？膜拜中…不过这个的确把之前一直疑惑的地方解决了，十分感谢！</p>  
                                <div>
                                    <span></span>
                                    回复
                                </div>
                            </div> 
                        </li> 
                   </ol>
               </div>
           </li>
       </ul>
    </section>
</template>
<script>
export default {
    name: 'newest-share'
}
</script>



