import angular from 'angular'

import './controllers'
import './routes'

const MODULE_NAME = 'app.dashboard'

angular.module(MODULE_NAME, [
  'app.dashboard.controllers',
  'app.dashboard.routes'
])

export default MODULE_NAME
