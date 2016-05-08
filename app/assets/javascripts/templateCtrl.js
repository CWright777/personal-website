angular.module('cliffWebsite')
.controller('templateCtrl', [
'$scope',
'$state',
'$document',
'viewService',
function($scope, $state, viewService, $document){

  $scope.currentView = 'main';

  $scope.$on('view_changed',function(){
    //$scope.currentView = viewService.getViewName();
    console.log(3)
    $document('.main-container').append('<div ui-view="main"></div>')
  })

}])
