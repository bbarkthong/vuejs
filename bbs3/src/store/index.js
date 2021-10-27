import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumb: [{
      menu_nm: '대시보드',
      href: '#',
      is_leaf: false
    }, {
      menu_nm: '내 대시보드',
      href: '#',
      is_leaf: true
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
