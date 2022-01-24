import service from '@/http'
import * as types from './mutation-types'

export const ActionFindSerie = ({ commit }, payload) => {
  service.showSerie.findSerie({ id: payload }).then(res => {
    commit(types.SET_SERIE, res.data.data)
  })
}
