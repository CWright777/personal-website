angular.module('cliffWebsite')
.controller('templateCtrl', [
'$scope',
'$state',
'viewService',
'$stateParams',
function($scope, $state, $stateParams, viewService){
  console.log($stateParams)
}])
