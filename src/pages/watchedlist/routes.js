export default [
  {
    path: '/watchedlist',
    name: 'watchedlist',
    component: () => import(/* webpackChunkName: "home" */ './WatchedList'),
    meta: {
      showNavBar: true,
      title: 'Watchedlist',
      icon: 'playlist_add_check',
      label: 'Já assisti'
    }
  }
]
