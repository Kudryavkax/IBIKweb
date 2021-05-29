import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    log:{},
    user: null,
  },
  getters:{
    getUser: state=>{
      if(state.user==null && localStorage.user){
        state.user= JSON.parse(localStorage.user);
      }
      return state.user;
    }
  },
  mutations: {
    changeuser(state){
      state.user= JSON.parse(localStorage.user);
    },
    deleteUser(state){
      state.user=null;
    }
  },
  actions: {
  },
  modules: {
  }
})
