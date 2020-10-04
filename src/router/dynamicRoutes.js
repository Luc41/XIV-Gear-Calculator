function generateRoutes (payload) {
  var routes = []
  for (var index in payload) {
    for (var i in payload[index]) {
      routes.push({
        path: '/'.concat(payload[index][i].job),
        name: payload[index][i].job,
        component: () => import('../views/Container.vue')
      })
    }
  }
  return routes
}

export default generateRoutes
