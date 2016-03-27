import angular from 'angular'

const MODULE_NAME = 'app.core.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('index', {
    url: '/',
    template: '<h1>Dashboard!</h1>'
  })
  .state('tables', {
    url: '/tables',
    template: '<h1>Tables!</h1>'
  })
)

app.config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

export default MODULE_NAME
