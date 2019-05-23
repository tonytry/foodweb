import types from '../types'
import axios from 'axios'

const state={
  seller:{},
  detailShow:false,

}

const getters={
  seller(state){
    return state.seller;
  },
  detailShow(state){
    return state.detailShow;
  }

}

const  actions={
  getSeller({commit,state}){
    axios.get('/api/seller').then(resp => {
      // 去取数据
      if(resp.data.errno==0){
        commit(types.GET_SELLER,resp.data.data);
      }

    })
    
  },

  //show detail提交
  showDetail({commit}){
    commit(types.SHOW_DETAIL);
  },
  //detail.vue 里面的methods 调用这边的actions hideDetail
  hideDetail({commit}) {
    commit(types.HIDE_DETAIL);
  }

}

const mutations={
  [types.GET_SELLER](state,data){
    state.seller=data;
  },
  [types.SHOW_DETAIL](state){
    state.detailShow=true;
  },
  [types.HIDE_DETAIL](state){
    state.detailShow=false;
  }


}

export default {
    state,
    getters,
    actions,
    mutations

}
