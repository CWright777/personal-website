angular.module('cliffWebsite', [
  'templates',
  'ui.router',
  'ngMaterial'
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
         templateUrl:'main.html'
        },
        'sidenav@splash' : {
          templateUrl: 'sideNav/_sideNav.html',
          controller: 'navCtrl'
        },
        'main@splash' : {
          templateUrl: 'mainSplash/_mainSplash.html',
          controller: 'mainSplashCtrl'
        }
      },
    })

  $urlRouterProvider.otherwise('/ip');
}])
