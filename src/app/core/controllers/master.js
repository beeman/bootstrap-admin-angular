import angular from 'angular'

function MasterCtrl ($scope, $cookieStore) {
  /**
   * Sidebar Toggle & Cookie Control
   */
  var mobileView = 992

  $scope.getWidth = () => window.innerWidth

  $scope.$watch($scope.getWidth, (newValue) => {
    if (newValue >= mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        $scope.toggle = !$cookieStore.get('toggle') ? false : true
      } else {
        $scope.toggle = true
      }
    } else {
      $scope.toggle = false
    }
  })

  $scope.toggleSidebar = () => {
    $scope.toggle = !$scope.toggle
    $cookieStore.put('toggle', $scope.toggle)
  }

  window.onresize = () => {
    $scope.$apply()
  }
}

const MODULE_NAME = 'app.core.controllers.master'

angular.module(MODULE_NAME, [])
  .controller('MasterCtrl', MasterCtrl)

export default MODULE_NAME
