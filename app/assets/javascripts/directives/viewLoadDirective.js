angular.module('cliffWebsite')
.directive('viewLoad', function ($compile,$animate,viewService,$timeout) {
  return {
    restrict:'E',
    link: function(scope,el,attrs){
      el.html("<ui-view name='main' class='slider full-width'></div>")
      $compile(el.contents())(scope)
      scope.$on('view_changed',function(){
        var view = viewService.getViewName()
        el.append("<ui-view name='"+view+"' id='slide' class='slider full-width'></div>")
        $animate.enter($compile(el.contents())(scope),el,el.parent()[0])

        //angular.element(el[0].children[0]).addClass('closed')
        //angular.element(el[0].children[1]).addClass('open')
      })
    }
  }
})
        //var view = viewService.getViewName()
        //console.log(angular.element(el[0].children[0]))
        //angular.element(el[0].contents).append($compile("<ui-view name='"+view+"' class='slider full-width'></div>")(scope))
        //var newView = angular.element("<ui-view name='"+view+"'class='slider full-width'></div>").addClass('open')

        //$animate.enter(newView,el,el.parent()[0])
        //angular.element(el[0].children[0]).addClass('closed')
        //angular.element(el[0].children[1]).addClass('open')
