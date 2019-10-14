/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'
import Cookies from 'js-cookie'
// Store functionality
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Create a new store
export const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      // setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
      removeItem: key => Cookies.remove(key)
    }
  })]
})

// export default store
