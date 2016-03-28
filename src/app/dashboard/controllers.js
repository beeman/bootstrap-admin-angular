import angular from 'angular'

import './controllers/dashboard'

const MODULE_NAME = 'app.dashboard.controllers'

angular.module(MODULE_NAME, [
  'app.dashboard.controllers.dashboard'
])

export default MODULE_NAME
