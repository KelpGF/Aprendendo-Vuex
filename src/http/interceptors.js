import store from '../store'

export default req => {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch('ActionSignOut')

      window._Vue.$router.push('login')
    }
  }
}
