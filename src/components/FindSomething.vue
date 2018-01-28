<template>
    <div class="">
        <input type="text" name="" v-model.trim="search_name">
        <button type="button" name="button" @click="searchSomething">搜索</button>
        <p>搜索字段：{{search_name}}</p>
    </div>
</template>

<script>
import request from '../request'
export default {
  name: 'FindSomething',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search_name: null
    }
  },
  methods: {
    searchSomething () {
      if (this.search_name) {
        request.queryVideo('?keyword=' + this.search_name)
          .then(function (response) {
            console.log(response)
          })
      }
      console.log(this.search_name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input{
      line-height: 30px;
      border: 1px solid #ebebeb;
      border-radius: 2px;
      width: 50%;
      outline: none;
      padding: 0 5px;
      color: #333;
      font-size: 14px;
    }
    button{
      border-color: #ebebeb;
      line-height: 30px;
      margin-left: 10px;
      padding: 0 20px;
      background: #f0f0f0;
      font-size: 14px;
      color: #333;
    }
</style>
