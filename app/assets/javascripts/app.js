angular.module('cliffWebsite', [
  'templates',
  'ui.router',
  'ngMaterial',
  'ngAnimate'
])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
      url: '/',
      views: {
        '@': {
         templateUrl:'main.html',
         controller: 'templateCtrl'
        },
        'sidenav@splash' : {
          templateUrl: 'sideNav/_sideNav.html',
          controller: 'navCtrl'
        },
        'main@splash' : {
          templateUrl: 'mainSplash/_mainSplash.html',
          controller: 'mainSplashCtrl'
        },
        'technologies@splash' : {
          templateUrl: 'technologies/_technologies.html'
         }
      }
    })

  $urlRouterProvider.otherwise('/');
}])
