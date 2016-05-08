angular.module('cliffWebsite')
.factory('viewService', function($rootScope){

  var service = {}
  service.page = ''

  service.changeView = function(viewName){
    this.page = viewName;
    $rootScope.$broadcast('view_changed');
  }
  
  service.getViewName = function(){
    return this.page;
  };

  return service;
})
