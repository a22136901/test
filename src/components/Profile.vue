<template>
  <div>
    <h2>我是profile组件</h2>
    <!-- 通过query获取参数 -->
    <h3>{{ $route.query.name }}</h3>
    <h3>{{ $route.query.age }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
</style>