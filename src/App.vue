<template>
  <div id="app">
    <h2>我是App组件</h2>
    <!-- router-link是vue-router内置的全局组件，默认会被渲染成<a>标签 -->
    <router-link to="/home" replace>首页</router-link>|

    <!-- tag属性可以改变渲染方式 -->
    <!-- replace属性的设置类似于replaceState，不能返回 -->
    <router-link to="/about" tag="button" replace>关于</router-link>|

    <!-- 默认会在点击的标签中有class="router-link-exact-active router-link-active" -->
    <!-- 使用active-class可以修改后者的类名，但是开发中一般不使用，可以在路由中去配置 -->
    <!-- 
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
     -->

    <!-------------------------------------------------------------------->

    <!-- 动态路由的使用 -->
    <router-link v-bind:to="'/user/' + name">用户</router-link>|

    <!-- 参数传递的使用 -->
    <!-- url = 协议://服务器地址:端口/路径?查询 -->
    <router-link :to="{ path: '/profile', query: { name: '张三', age: 18 } }"
      >档案</router-link
    >
    <!-- 动态路由只传一个参数，而参数传递可以传递一个对象，所以数据量大的时候使用query -->

    <!-- 用button实现动态路由和参数传递 -->
    <!--     
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
     -->

    <!-- keep-alive可以防止组件路由跳转之后频繁被创建或销毁 -->
    <!-- 属性有exclude排除，include包含，可以传入组件名字用逗号隔开（不要加空格） -->
    <keep-alive exclude="Profile">
      <!-- 显示路由组件用router-view -->
      <router-view />
    </keep-alive>

    <button @click="btnClick">调用Vue原型自定义方法</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: '李四'
    }
  },

  methods: {
    //
    homeClick () {
      this.$router.push('/home')
      // this.$router.replace('/home')  不能返回
    },
    aboutClick () {
      this.$router.push('/about')
    },
    //
    userClick () {
      this.$router.push('/user/' + this.name)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: '张三',
          age: 18

        }
      })
    },
    //
    btnClick () {
      this.show()
    }

  }

}
</script>

<style>
/* .router-link-active {
  color: #f00;
} */
.active {
  color: red;
}
</style>
