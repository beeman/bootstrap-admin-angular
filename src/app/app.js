import angular from 'angular'

import './core/index'

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [
  'app.core'
])

export default MODULE_NAME
