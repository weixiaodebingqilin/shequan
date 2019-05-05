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
                

            ]
        },
        {
            path: '/login',
            name: 'login',
            component: _import('login/login'),
            meta: { title: '登陆' },
        }

    ]
})