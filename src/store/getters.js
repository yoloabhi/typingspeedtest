// https://vuex.vuejs.org/en/getters.html
import './state'
export default {
  user (state) {
    return state.currentUser
  },
  userdata (state) {
    return state.userProfile
  }
}
