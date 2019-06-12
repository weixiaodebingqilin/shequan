import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const _import = file => () => import(`@/pages/${file}.vue`)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _import('Home'),
            redirect: '/index',
            meta: { title: '首页' },
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: _import('index/index'),
                    meta: { title: '首页' },
                },
                {
                    path: '/article',
                    name: 'article',
                    component: _import('article/article'),
                },
                {
                    path: '/challenge',
                    name: 'challenge',
                    component: _import('challenge/challenge'),
                },
                {
                    path: '/category',
                    name: 'category',
                    component: _import('category/category'),
                },
                {
                    path: '/combat',
                    name: 'combat',
                    component: _import('combat/combat'),
                },
                {
                    path: '/homework',
                    name: 'homework',
                    component: _import('homework/homework'),
                },
                {
                    path: '/work',
                    name: 'article-work',
                    component: _import('article/component/home-work'),
                },
                {
                    path: '/category-details',
                    name: 'category-details',
                    component: _import('category/category-details'),
                },
                {
                    path: '/mine',
                    name: 'mine',
                    component: _import('mine/mymine'),
                },
                {
                    path: '/myInformation',
                    name: 'myInformation',
                    component: _import('mine/myInformation'),
                },
                {
                    path: '/search',
                    name: 'search',
                    component: _import('search/search'),
                },
                {
                    path: '/create',
                    name: 'create',
                    redirect: '/create-category',
                    component: _import('create/create'),
                    children: [
                        {
                            path: '/create-category',
                            name: 'create-category',
                            component: _import('create/create-category'),
                        },
                        {
                            path: '/create-circle',
                            name: 'create-circle',
                            component: _import('create/create-circle'),
                        },
                        {
                            path: '/create-article',
                            name: 'create-article',
                            component: _import('create/create-article'),
                        },
                    ]
                },
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: _import('test/test'),
        },
        {
            path: '/study',
            name: 'study',
            component: _import('test/study'),
        },
        {
            path: '/logins',
            name: 'logins',
            component: _import('login/loginIndex'),
            redirect: '/login',
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: _import('login/login'),
                    meta: { title: '登陆' },
                },
                {
                    path: '/register',
                    name: 'register',
                    component: _import('login/register'),
                    meta: { title: '注册' },
                },
                {
                    path: '/forgot',
                    name: 'forgot',
                    component: _import('login/forgot'),
                    meta: { title: '忘记密码' },
                },
            ]
        },



    ]
})
