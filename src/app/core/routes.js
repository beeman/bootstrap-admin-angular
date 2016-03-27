import angular from 'angular'

import templateDashboard from './templates/dashboard.html'
import templateTables from './templates/tables.html'

const MODULE_NAME = 'app.core.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('index', {
    url: '/',
    templateUrl: templateDashboard
  })
  .state('tables', {
    url: '/tables',
    templateUrl: templateTables
  })
)

app.config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

export default MODULE_NAME
