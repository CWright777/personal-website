angular.module('cliffWebsite')
.directive('viewLoad', function ($compile,$animate,viewService,$timeout) {
  return {
    restrict:'E',
    link: function(scope,elem,attrs){
      elem.html("<ui-view name='main' class='full-width'></div>")
      $compile(elem.contents())(scope)
      scope.$on('view_changed',function(){
        var view = viewService.getViewName()
        elem.append("<ui-view name='"+view+"'class='full-width'></div>")
        elem.children().wrap("<div>");
        $compile(elem.contents())(scope);
        $animate.addClass(elem,'open');

        $timeout(function(){
          var firstElement = elem[0].firstElementChild
          $animate.removeClass(elem,'open')
          $animate.addClass(firstElement,'close')
          $timeout(function(){
            firstElement.remove()
          },0)
        },2500)
      })

        //$animate.leave(angular.element(el.contents(),el))

        //$animate.enter(angular.element(el.children()[1]),el,el.parent())

        //angular.element(el[0].children[0]).addClass('closed')
        //angular.element(el[0].children[1]).addClass('open')
      }
    }
  }
)
        //var view = viewService.getViewName()
        //console.log(angular.element(el[0].children[0]))
        //angular.element(el[0].contents).append($compile("<ui-view name='"+view+"' class='slider full-width'></div>")(scope))
        //var newView = angular.element("<ui-view name='"+view+"'class='slider full-width'></div>").addClass('open')

        //$animate.enter(newView,el,el.parent()[0])
        //angular.element(el[0].children[0]).addClass('closed')
        //angular.element(el[0].children[1]).addClass('open')
//
//
//
//angular.module('cliffWebsite')
//.directive('viewLoad', function ($compile,$animate,viewService,$timeout) {
  //return {
    ////restrict:'E',
    //link: function(scope,el,attrs){
      //el.html("<ui-view name='main' class='slider full-width'></div>")
      //$compile(el.contents())(scope)
      //scope.$on('view_changed',function(){
        //var view = viewService.getViewName()
        //el.append("<ui-view name='"+view+"' class='animated-view slider full-width'></div>")
        //$compile(el.contents())(scope)

        //$animate.addClass(el.children()[0],'hide-js')

        ////$animate.leave(angular.element(el.contents(),el))

        ////$animate.enter(angular.element(el.children()[1]),el,el.parent())

        ////angular.element(el[0].children[0]).addClass('closed')
        ////angular.element(el[0].children[1]).addClass('open')
      //})
    //}
  //}
//})
