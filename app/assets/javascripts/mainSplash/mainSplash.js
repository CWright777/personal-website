angular.module('cliffWebsite')
.controller('mainSplashCtrl', [
'$scope',
'$state',
'$window',
function($scope, $state,$window){
  $scope.goLinkedIn = function(){
    $window.location.href = "https://www.linkedin.com/in/cliffordrwright"
  }
  $scope.goEmail = function(){
    $window.location.href = "mailto:clifford@cliffordwright.com"
  }
  $scope.goGithub = function(){
    $window.location.href = "https://github.com/CWright777"
  }
}])
