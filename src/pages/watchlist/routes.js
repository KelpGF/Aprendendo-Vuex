export default [
  {
    path: '/watchlist',
    name: 'watchlist',
    component: () => import(/* webpackChunkName: "home" */ './WatchList'),
    meta: {
      showNavBar: true,
      title: 'Watchlist',
      icon: 'playlist_play',
      label: 'Quero assistir'
    }
  }
]
