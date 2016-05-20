angular.module('cliffWebsite')
.controller('navCtrl', [
'$scope',
'$state',
'viewService',
'$timeout',
function($scope, $state,viewService,$timeout){

  var views = ['technologies','about','projects']
  for(x of views){
    if (x == $state.current.url){
      $scope.currentView = $state.current.url;
      break;
    } else {
      $scope.currentView = 'main';
    }
  }

  $scope.changing = false;

  $scope.showTechnologies = function(){
    if (!$scope.changing && $scope.currentView != 'technologies') {
      $state.go('splash.technologies')
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
      $state.go('splash')
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
      $state.go('splash.projects')
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
      $state.go('splash.about')
      $scope.changing = true;
      $scope.currentView = 'about'
      viewService.changeView('about');
      $timeout(function(){
        $scope.changing = false;
      },2000)
    }
  }

}]);
