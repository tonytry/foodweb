<template>
  <!--动画效果要放在transition里面-->
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <div class="detail" v-show="detailShow" >
      详情页
      <br>
      <br>
      <h2>{{seller.name}}</h2>
      <hr>
      <h2>{{seller.bulletin}}</h2>
      <br>
      <ul>
        <!--进行商家支持支付方式的循环输出-->
        <li v-for="item in seller.supports">
          {{item.description}}
        </li>
      </ul>
      <button @click="hideDetail" class="close">关闭</button>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  //引入 animate css
  import 'animate.css/animate.css'


    export default {

    //要放在computed 里面ß
      computed:{
        ...mapGetters([
          'detailShow',
          'seller'
        ])
      },

      //调用hideDetial的方法
      methods:{
        hideDetail(){
          this.$store.dispatch('hideDetail');
        }
      }

    };
</script>

<style lang="less" scoped>
  .detail{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6666;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7,17,27,0.8);
    color: #fff;
    .close{
      position: absolute;
      bottom:60px;
      left:40%;
      display: block;
      border: 1px solid #fff;
      background-color: #fff;
    }

  }

</style>
