import angular from 'angular'

import './core/index'
import './dashboard/index'

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [
  'app.core',
  'app.dashboard'
])

export default MODULE_NAME
