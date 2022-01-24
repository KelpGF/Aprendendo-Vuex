import * as types from './mutation-types'

export default {

  [types.SET_WATCHLIST]: function (state, payload) {
    state.watchlist = payload
  }

}
