angular.module('cliffWebsite', [
  'templates',
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'ngAnimate'
])
.config([
'$stateProvider',
'$urlRouterProvider',
'$sceDelegateProvider',
function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

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
          templateUrl: 'technologies/_technologies.html',
          controller: 'technologiesCtrl'
         }
      }
    })

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://s3-us-west-1.amazonaws.com/cliff-website/**'])

  $urlRouterProvider.otherwise('/');
}])
