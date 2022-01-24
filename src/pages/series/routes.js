export default [
  {
    path: '/series',
    name: 'serie',
    component: () => import(/* webpackChunkName: "home" */ './Series'),
    meta: {
      showNavBar: true,
      title: 'Séries',
      icon: 'dvr',
      label: 'Todas as séries'
    }
  }
]
