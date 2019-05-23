<template>
    <div class="goods">
      <!--分两栏一边为菜单栏-->
      <div class="menu-wrapper">
        <ul>
          <!--v-for 循环 把 item 循环出来-->
          <li v-for="item in goods">
            {{item.name}}
          </li>
        </ul>

      </div>
      <!--分两栏一边为食品栏-->
      <div class="food-wrapper">
        <ul>
          <li v-for="item in goods">
            <h1>{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods">
                <img :src="food.icon" alt="">
                {{food.name}}
              </li>
            </ul>
            <hr>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>

    //引入mapGetters
    import {mapGetters} from 'vuex'

    export default {
        created() {
          this.$store.dispatch('getGoods');
        },
        computed:{
          ...mapGetters([
            'goods'
          ])
        }
    };
</script>

<style lang="less" scoped>
  .goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      background-color: #ccc;
    }
    .foot-wrapper{
      flex: 1;
    }
  }
</style>
