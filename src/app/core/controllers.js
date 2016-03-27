import angular from 'angular'

import './controllers/alerts'
import './controllers/master'

const MODULE_NAME = 'app.core.controllers'

angular.module(MODULE_NAME, [
  'app.core.controllers.alerts',
  'app.core.controllers.master'
])

export default MODULE_NAME
