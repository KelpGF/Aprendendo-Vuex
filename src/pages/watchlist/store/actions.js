import services from '@/http'
import * as types from './mutation-types'

export const ActionFindWatchList = ({ commit }) => (
  services.watchlist.findWatchList().then(res => {
    commit(types.SET_WATCHLIST, res.data.data)
  })
)

export const ActionAddOnWatchList = ({ dispatch }, payload) => {
  services.watchlist.addOnWatchList(payload)
}

export const ActionDeleteFromWatchList = ({ dispatch }, payload) => {
  services.watchlist.deleteFromWatchList({ id: payload })
}
