import angular from 'angular'

import './controllers/app'

const MODULE_NAME = 'app.core.controllers'

angular.module(MODULE_NAME, [
  'app.core.controllers.app'
])

export default MODULE_NAME
