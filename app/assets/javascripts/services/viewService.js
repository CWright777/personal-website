angular.module('cliffWebsite')
.factory('viewService', function($rootScope,$timeout){

  var service = {}

  service.changeView = function(viewName){
    this.page = viewName;
    $rootScope.$broadcast('view_changed');
  }
  
  service.getViewName = function(){
    return this.page;
  };

  return service;
})
