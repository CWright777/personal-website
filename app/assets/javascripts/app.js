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
'$locationProvider',
function($stateProvider, $urlRouterProvider, $sceDelegateProvider,$locationProvider) {

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
        },
        'technologies@splash' : {
          templateUrl: 'technologies/_technologies.html',
          controller: 'technologiesCtrl'
         },
        'projects@splash' : {
          templateUrl: 'projects/_projects.html',
          controller: 'projectsCtrl'
         },
        'about@splash' : {
          templateUrl: 'about/_cAbout.html',
         },
      },
    })
    .state('splash.technologies',{
      url: 'technologies'
    })
    .state('splash.projects',{
      url: 'projects'
    })
    .state('splash.about',{
      url: 'about'
    })

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://s3-us-west-1.amazonaws.com/cliff-website/**'])

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
