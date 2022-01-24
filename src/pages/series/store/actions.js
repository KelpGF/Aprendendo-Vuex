import services from '@/http'
import * as types from './mutation-types'

export const ActionFindSeries = ({ commit }) => {
  services.series.findSeriesList().then(res => {
    commit(types.SET_SERIES, res.data.data)
  })
}
