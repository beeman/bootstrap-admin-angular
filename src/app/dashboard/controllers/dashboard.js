import angular from 'angular'

function DashboardCtrl () {
  this.alerts = [ {
    type: 'success',
    msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
  }, {
    type: 'danger',
    msg: 'Found a bug? Create an issue with as many details as you can.'
  } ]

  this.alert = {
    msg: ''
  }

  this.types = [
    'success',
    'danger',
    'info',
    'warning'
  ]

  this.addAlert = () => {
    this.alerts.push(Object.assign({}, this.alert))
    this.alert.msg = ''
    this.alert.type = this.types[Math.floor(Math.random() * this.types.length)]
  }

  this.closeAlert = (index) => this.alerts.splice(index, 1)
}

const MODULE_NAME = 'app.dashboard.controllers.dashboard'

angular.module(MODULE_NAME, [])
  .controller('DashboardCtrl', DashboardCtrl)

export default MODULE_NAME
