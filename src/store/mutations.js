// https://vuex.vuejs.org/en/mutations.html
import './state'
export default {
  setCurrentUser (state, val) {
    state.currentUser = val
  },
  setUserProfile (state, val) {
    state.userProfile = val
  },
  addUser (state, val) {
    state.registeredUsers.push(val)
  },
  verifyphone (state, val) {
    state.registeredUsers.forEach(function (arrayItem) {
      if (arrayItem.regno === val.regno) {
        arrayItem.phoneverify = true
        arrayItem.phoneverify2 = 'Verified!'
      }
    })
  },
  verifypayment (state, val) {
    state.registeredUsers.forEach(function (arrayItem) {
      if (arrayItem.regno === val.regno) {
        arrayItem.payment = true
        arrayItem.paid = 'Verified!'
      }
    })
  },
  resetUsers (state) {
    state.registeredUsers = []
  }
}
