<template>
  <div>
    <h2>我是用户界面</h2>
    <p>用户相关信息</p>
    <h2>{{ userId }}</h2>
    <!-- 通过params获得动态动态路由 -->
    <h3>{{ $route.params.userId }}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId () {
      // $router和$route不一样，
      // 前者拿的是拿到的是index.js中定义的router路由对象（任何组件中this.$router都是一样的 ）
      // 后者拿的是router路由数组中的处于活跃状态的那个对象路由
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>
</style>