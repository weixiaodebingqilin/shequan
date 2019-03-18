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
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: _import('index/index'),
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

            ]
        }

    ]
})