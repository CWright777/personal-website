angular.module('cliffWebsite')
.controller('navCtrl', [
'$scope',
'$state',
'viewService',
function($scope, $state,viewService){

  $scope.showTechnologies = function(){
    viewService.changeView('technologies');
  }

  $scope.showHome = function(){
    viewService.changeView('main');
  }

}]);
