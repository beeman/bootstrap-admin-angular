import angular from 'angular'

import 'angular-cookies'
import 'angular-ui-bootstrap'
import 'angular-ui-router'

const MODULE_NAME = 'app.core.dependencies'

angular.module(MODULE_NAME, [
  'ui.bootstrap',
  'ui.router',
  'ngCookies'
])

export default MODULE_NAME
