import store from '../store'

export default async (to, from, next) => {
  if (to.name !== 'login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')

      document.title = `${to.name} - Series Wished`

      next({ path: to.path })
    } catch (error) {
      document.title = 'login - Series Wished'

      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      document.title = 'home - Series Wished'

      next({ name: 'home' })
    } else {
      document.title = `${to.name} - Series Wished`

      next()
    }
  }
}
