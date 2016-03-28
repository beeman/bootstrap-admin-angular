import angular from 'angular'

import './controllers/alerts'
import './controllers/master'

const MODULE_NAME = 'app.dashboard.controllers'

angular.module(MODULE_NAME, [
  'app.dashboard.controllers.alerts',
  'app.dashboard.controllers.master'
])

export default MODULE_NAME
