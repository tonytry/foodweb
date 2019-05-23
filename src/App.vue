<template>
  <div id="app">

    <!--自定义的组件myheader-->
    <myheader></myheader>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  /*进行引入header的vue组件*/
  import header from './components/header/header.vue'

  export default {
    /*组件进行重命名*/
    components:{
      'myheader' : header
    }

  }
</script>

<style lang="less" scoped>
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .tab-item{
      flex:1;
      text-align: center;
      display: block;
      & > a{
        font-size: 14px;

        &.active{
          color: #ff7300;
        }
      }
    }
  }
</style>
