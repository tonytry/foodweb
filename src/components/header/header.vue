<template>
    <div class="header">
        {{seller.name}}
      <img :src="seller.avatar" alt="" @click="showDetail">
      <br>
      {{msg}}

      <!--点击图标弹出的一层-->
      <Detail></Detail>
    </div>

</template>

<script>
    //引用map
    import {mapGetters} from 'vuex'

    //引用detail 的组件
    import Detail from '../detail/detail'


    export default {
      created(){

          //进行调用store里modules里面的seller.js中的action getSeller
          this.$store.dispatch('getSeller');

      },
      //放入sell数据
      computed:{
        ...mapGetters([
          'seller'
        ]),

        msg(){
          return 'welcome tony web';
        }

      },

      //输出组件
      components:{
        Detail
      },
      // 添加showDetail 方法 注意是methods  是带S 的
      methods:{
        showDetail(){
          this.$store.dispatch('showDetail');
        }
      }

    }

</script>
<!--引入less 样式-->
<style lang="less" scoped>
    .header{
        height: 134px;
        background-color: rgba(7,17,27,0.1);
        font-size: 14px;
        color: #000;
        img{
          width: 64px;
          height: 64px;
          border-radius: 2pxß;
        }

    }


</style>
