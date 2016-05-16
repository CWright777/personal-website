angular.module('cliffWebsite')
.directive('imgHover', function ($animate) {
  return {
    link: function(scope,elem,attrs) {
      elem.bind('mouseenter', function(){
        elem[0].querySelector('img').style.transform = 'translate3d(-5vh,-5vh,0)'
        elem[0].querySelector('.tile-footer').style.height = '65%'
        elem[0].querySelector('h1').style.fontSize = '1.3em'
        elem[0].querySelector('img').style.opacity = '0'
      });
      elem.bind('mouseleave',function(){
        elem[0].querySelector('img').style.transform = 'translate3d(0,0,0)'
        elem[0].querySelector('.tile-footer').style.height = '30% '
        elem[0].querySelector('h1').style.fontSize = '1.1em'
        elem[0].querySelector('img').style.opacity = '1'
      })
    }
  }
})
