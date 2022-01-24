import * as types from './mutation-types'

export default {
  [types.SET_SERIES]: function (state, payload) {
    state.series = payload
  }
}
