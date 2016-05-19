angular.module('cliffWebsite')
.controller('navCtrl', [
'$scope',
'$state',
'viewService',
'$timeout',
function($scope, $state,viewService,$timeout){

  $scope.changing = false;
  $scope.currentView = 'main'

  $scope.showTechnologies = function(){
    if (!$scope.changing && $scope.currentView != 'technologies') {
      $scope.changing = true;
      $scope.currentView = 'technologies'
      viewService.changeView('technologies');
      $timeout(function(){
        $scope.changing = false;
      },2000)
    }
  }

  $scope.showHome = function(){
    if (!$scope.changing && $scope.currentView != 'main') {
      $scope.changing = true;
      $scope.currentView = 'main'
      viewService.changeView('main');
      $timeout(function(){
        $scope.changing = false;
      },2000)
    }
  }

  $scope.showProjects = function(){
    if (!$scope.changing && $scope.currentView != 'projects') {
      $scope.changing = true;
      $scope.currentView = 'projects'
      viewService.changeView('projects');
      $timeout(function(){
        $scope.changing = false;
      },2000)
    }
  }

  $scope.showAbout = function(){
    if (!$scope.changing && $scope.currentView != 'about') {
      $scope.changing = true;
      $scope.currentView = 'about'
      viewService.changeView('about');
      $timeout(function(){
        $scope.changing = false;
      },2000)
    }
  }

}]);
