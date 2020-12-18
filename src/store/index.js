import vuex from 'vuex';
import Vue from 'vue';
//1.安装
Vue.use(vuex)
var store = new vuex.Store({ //仓库对象
  state: {
    list:[],
    name: '杨浩',
    count: 1
  },
  mutations: { // 作用，是专门用来修改 state 中的数据的
    // 注意：如果要修改 state 中的数据，必须要调用 mutations 提供的方法；
    add(state) {
      // mutations 中的方法，第一个参数，永远都是 state
      state.count++
      // 注意： vuex 官方，虽然说，不要在 mutations 中写异步的操作，但是，如果你不按官方的走，在 mutations 中定义的异步方法，可以正常执行，但是，vue-tools 工具，无法监视到数据的变化；
      /* setTimeout(() => {
        state.count++
      }, 1000) */
    },
    // mutations 中的方法，在调用的时候，只能传递唯一的一个参数
    // 如果要传递多个参数，可以以数组或对象的形式传递进去
    sub(state, step) {
      // console.log(step)
      state.count -= step
    },
    Setname(state, name) {
      state.name = name
    }
  },
  //getters是用于 store的计算属性
  getters: {
    countinfo(state) {
      return '!!!!!!!!!!!' + state.count
    }
  }
})

export default store;