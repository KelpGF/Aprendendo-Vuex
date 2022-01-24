export default [
  {
    path: '/serie/:id',
    name: 'show-serie',
    component: () => import(/* webpackChunkName: "home" */ './ShowSerie')
  }
]
