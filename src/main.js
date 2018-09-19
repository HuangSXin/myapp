import Vue from 'vue'
import App from './App';
import '@babel/polyfill';
import router from './components/router/router'

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App)
}).$mount('#app');
// 入口文件会替换原实例的节点
