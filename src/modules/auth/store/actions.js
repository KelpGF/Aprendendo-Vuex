import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(({ data }) => {
    dispatch('ActionSetUser', data.user)
    dispatch('ActionSetToken', data.token)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return new Promise().resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return new Promise().reject(new Error('Token Inválido!'))
  }

  dispatch('ActionSetToken', token)

  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    services.auth.loadSession().then(({ data: { user } }) => {
      dispatch('ActionSetUser', user)
      resolve()
    }).catch((error) => {
      dispatch('ActionSignOut')
      reject(error)
    })
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  storage.setHeaderToken('')
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
