import angular from 'angular'

import './components'
import './controllers'
import './dependencies'
import './routes'
import './style'

const MODULE_NAME = 'app.core'

angular.module(MODULE_NAME, [
  'app.core.components',
  'app.core.controllers',
  'app.core.dependencies',
  'app.core.routes',
  'app.core.style'
])

export default MODULE_NAME
