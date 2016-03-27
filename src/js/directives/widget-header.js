/**
 * Widget Header Directive
 */

angular
  .module('RDash')
  .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle () {
  var directive = {
    requires: '^rdWidget',
    scope: {
      title: '@',
      icon: '@'
    },
    transclude: true,
    template: '<div class="panel-heading"><i class="fa" ng-class="icon"></i> {{title}} <div class="pull-right " ng-transclude></div></div>',
    restrict: 'E'
  };
  return directive;
};