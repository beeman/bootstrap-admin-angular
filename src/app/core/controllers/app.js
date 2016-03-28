import angular from 'angular'

function AppCtrl ($scope, $cookieStore) {
  /**
   * Sidebar Toggle & Cookie Control
   */
  this.mobileView = 992

  this.getWidth = () => window.innerWidth

  $scope.$watch(this.getWidth, (newValue) => {
    if (newValue >= this.mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        this.toggle = !$cookieStore.get('toggle') ? false : true
      } else {
        this.toggle = true
      }
    } else {
      this.toggle = false
    }
  })

  this.toggleSidebar = () => {
    this.toggle = !this.toggle
    $cookieStore.put('toggle', this.toggle)
  }

  window.onresize = () => {
    $scope.$apply()
  }
}

const MODULE_NAME = 'app.core.controllers.app'

angular.module(MODULE_NAME, [])
  .controller('AppCtrl', AppCtrl)

export default MODULE_NAME
