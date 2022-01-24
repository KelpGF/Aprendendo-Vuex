import services from '@/http'
import * as types from './mutation-types'

export const ActionFindWatchedList = ({ commit }) => (
  services.watchedlist.findWatchedList().then(res => {
    commit(types.SET_WATCHEDLIST, res.data.data)
  })
)

export const ActionAddOnWatchedList = ({ dispatch }, payload) => {
  services.watchedlist.addOnWatchedList(payload)
}

export const ActionDeleteFromWatchedList = ({ dispatch }, payload) => {
  services.watchedlist.deleteFromWatchedList({ id: payload })
}
