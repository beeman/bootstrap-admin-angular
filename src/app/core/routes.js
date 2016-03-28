import angular from 'angular'

import templateApp from './templates/app.html'

const MODULE_NAME = 'app.core.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('app', {
    url: '',
    abstract: true,
    controller: 'AppCtrl',
    controllerAs: 'app',
    templateUrl: templateApp
  })
)

app.config(($urlRouterProvider) => $urlRouterProvider.otherwise('/dashboard'))

export default MODULE_NAME
