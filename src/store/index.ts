import Vuex from 'vuex'
import Vue from 'vue'
import state from './state/index'
import mutations from './mutations/index'
import actions from './actions/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions
})