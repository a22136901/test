import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  //产品构建的时候的提示信息（一般build时再改成true）

// 所有的组件都继承子Vue类的原型
Vue.prototype.show = () => {
  console.log('所有的组件都能调用这个函数');
}

new Vue({
  router,
  render: h => h(App),

  // render: function (createElement) {

  //   // 1.普通用法:createElement('标签',{标签属性},['标签里内容'])（数组中还可以继续createElement）
  //   // 创建出来后替换掉app
  //   // return createElement('h2', { class: 'box' }, ['Hello World'])

  //   // 2.传入组件对象:
  //   return createElement(App)
  // }
}).$mount('#app') //mount和el区别不大

//runtime-compiler(vue1)
//template -> ast -> render -> vdom -> UI

//runtime-only(vue2)(1.性能更高 2.代码量更少)
//render -> vdom -> UI

//.vue文件是vue-template-compiler解析的