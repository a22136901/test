import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

//Vue.use(插件),安装操作
Vue.use(VueRouter)

const routes = [
  // 在控制台location.hash可以改变url的哈希，不刷新页面，而使用路由
  // 或者用history.pushState({},'','home')

  // history.replaceState({},'','about') 直接替换栈顶

  // go()可以传入整数对栈操作
  // history.back()相当于history.go(-1)
  // history.forward()相当于history.go(1)
  {
    path: '/',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    // 子路由
    children: [
      // 子路由路径不加'/'，在home中记得要路由到子组件
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {

        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // beforeEnter: (to, from, next) => {

    // },
    meta: {
      title: '关于'
    }
  },
  {
    // 动态路由的配置
    path: '/user/:userId',
    name: 'User',
    // 路由懒加载（会分包），为方便管理，可以在外边导入const User = () => import('../components/User.vue') 
    component: () => import('../components/User.vue'),
    meta: {
      title: '用户'
    },
  },
  {
    //query配置和其他一样，因为是参数在变化的静态路由
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  //routes用于配置组件和路由的应用关系
  routes,
  // 把hash模式改成history模式，这样路径中就不会有#号
  mode: 'history',
  linkActiveClass: 'active'
})

//全局路由守卫
//前置钩子/守卫（hook/guard）beforeEach，传入一个函数参数有(to,from,next)（监听跳转，可以切换网页的名字）
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  //to.meta.title。点击有子路由的时候会出现undefined,输出查看发现他有一个matched属性可以取到title
  // console.log(to);
  //第一个{name:undefined}是子路路由没有起名字
  //一定要记得调用next
  next()
})

//后置钩子afterEach，已调转完毕不需要next
// router.afterEach((to, from) => {
//   console.log('后置钩子函数被调用了');
// })

export default router
