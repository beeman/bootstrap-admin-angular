import angular from 'angular'

import './controllers/alerts'

const MODULE_NAME = 'app.dashboard.controllers'

angular.module(MODULE_NAME, [
  'app.dashboard.controllers.alerts',
])

export default MODULE_NAME
