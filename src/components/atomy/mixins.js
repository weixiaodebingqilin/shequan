// import textHd from './text-hd';
const atomy = {
    textHd: () => import('./text-hd'), //多行超出隐藏
    test: () => import('./test'), // 测试
    tableNative: () => import('./table-native'), // 切换导航栏
    showStar: () => import('./show-star'), // 星星跟评论显示
    
}

export default atomy
