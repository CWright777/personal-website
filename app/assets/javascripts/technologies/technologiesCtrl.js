angular.module('cliffWebsite')
.controller('technologiesCtrl', [
'$scope',
'$state',
function($scope, $state){
  $scope.techTiles = [
    {
      name: "Vim",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Vimlogo.svg',
      background: 'pastel-green'
    }, {
      name: "Python",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Python.svg',
      background: 'pastel-cyan'
    }, {
      name: "Ruby on Rails",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Ruby_on_Rails_logo.svg',
      background: 'pastel-red'
    }, {
      name: 'Sass',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Sass_Logo_Color.svg',
      background: 'beige'
    }, {
      name: 'Node.js',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Node.js_logo_2015.svg',
      background: 'green'
    }, {
      name: 'MongoDB',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/MongoDB-Logo.svg',
      background: 'light-green'
    }, {
      name: 'AngularJS',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/AngularJS_logo.svg',
      background: 'salmon'
    }, {
      name: 'Linux',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Tux.svg',
      background: 'light-orange'
    }, {
      name: 'Networking',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Cisco_logo.svg',
      background: 'black'
    }, {
      name: 'CSS',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/CSS.3.svg',
      background: 'cyan'
    }, {
      name: 'Git',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/GitHub_logo_2013.svg',
      background: 'orange'
    }, {
      name: 'PostgresSQL',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Postgresql_elephant.svg',
      background: 'blue'
    }, {
      name: 'MySQL',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/MySQL.svg',
      background: 'dark-gray'
    }, {
      name: 'Flask',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/logo_flask.svg',
      background: 'white-yellow'
    }, {
      name: 'JavaScript',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Unofficial_JavaScript_logo_2.svg',
      background: 'yellow'
    }, {
      name: 'Ruby',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Ruby_logo.svg',
      background: 'pink'
    }
  ]

}])
