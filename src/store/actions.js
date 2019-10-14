// https://vuex.vuejs.org/en/actions.html
import fb from '../firebase'
import './state'
export default {
  fetchUserProfile ({ commit, state }) {
    console.log('FETCHING PROFILE')
    fb.db.collection('users').doc(state.currentUser.uid).get().then(res => {
      commit('setUserProfile', res.data())
    }).catch(err => {
      console.log(err)
    })
  }
}
