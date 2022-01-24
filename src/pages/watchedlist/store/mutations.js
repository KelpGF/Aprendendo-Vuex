import * as types from './mutation-types'

export default {

  [types.SET_WATCHEDLIST]: function (state, payload) {
    state.watchedlist = payload
  }

}
