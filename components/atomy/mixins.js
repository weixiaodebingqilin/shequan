// import textHd from './text-hd';
const atomy = {
    textHd: () => import('./text-hd'), //多行超出隐藏
    test: () => import('./test'), // 测试
    tableNative: () => import('./table-native'), // 切换导航栏
    spitText: () => import('./spit-text'), // 评论内容
    showStar: () => import('./show-star'), // 星星跟评论显示
    dkSwitch: () => import('./dk-switch'), // switch toggle 开关， 点赞跟收藏的底层组件

}

export default atomy
