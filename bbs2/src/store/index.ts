import { createStore } from 'vuex'

export default createStore({
  state: {
    breadcrumb: [{
      menu_nm: "대시보드",
      href: "#",
      is_leaf: false
    }, {
      menu_nm: "내 대시보드",
      href: "#",
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
