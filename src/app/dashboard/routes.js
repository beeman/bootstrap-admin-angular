import angular from 'angular'

import templateDashboard from './templates/dashboard.html'
import templateTables from './templates/tables.html'

const MODULE_NAME = 'app.dashboard.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('app.dashboard', {
    url: '/dashboard',
    abstract: true,
    template: '<div ui-view></div>'
  })
  .state('app.dashboard.index', {
    url: '',
    controller: 'DashboardCtrl',
    controllerAs: 'ctrl',
    templateUrl: templateDashboard
  })
  .state('app.dashboard.tables', {
    url: '/tables',
    templateUrl: templateTables
  })
)

export default MODULE_NAME
