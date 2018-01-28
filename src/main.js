// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import request from './request'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    // let keywordList = ['上海大学', '滑冰', '技能', '吃播', '网红', '曹操', '赵丽颖', '能人', '洪水', '珠穆朗玛峰']
    // for (let i = 1; i < 100; i = i + 1) {
    //   let keyword = keywordList[parseInt((Math.random()) * 10)]
    //   request.queryVideo('?keyword=' + keyword)
    //   // this.$http({
    //   //   method: 'get',
    //   //   url: 'http://192.168.0.180:8081/query_video/',
    //   //   data: {
    //   //     keyword: keyword
    //   //   }
    //   // })
    // }
  }
})
