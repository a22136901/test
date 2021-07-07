<template>
  <div class="home">
    <h2>我是首页home</h2>
    <h4>首页内容</h4>

    <router-link to="/home/news">新闻</router-link>|
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  components: {

  },
  // 组件内路由守卫，使用path属性记录离开时的状态
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  },
  // 这两个回调函数只有keep-alive标签时，才有效
  activated () {
    console.log(this.path);
    this.$router.push(this.path)
  },
  deactivated () {

  },

}
</script>
