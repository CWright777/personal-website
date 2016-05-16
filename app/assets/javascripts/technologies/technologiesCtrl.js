angular.module('cliffWebsite')
.controller('technologiesCtrl', [
'$scope',
'$state',
function($scope, $state){
  $scope.techTiles = [
    {
      name: "Vim",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Vimlogo.svg',
      height: "70%",
      background: 'pastel-green'
    }, {
      name: "Python",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Python.svg',
      height: "80%",
      background: 'pastel-cyan'
    }, {
      name: "Ruby on Rails",
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Ruby_on_Rails_logo.svg',
      height: "80%",
      background: 'pastel-red'
    }, {
      name: 'Sass',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Sass_Logo_Color.svg',
      height: "80%",
      background: 'beige'
    }, {
      name: 'Node.js',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Node.js_logo_2015.svg',
      height: "37%",
      background: 'green'
    }, {
      name: 'MongoDB',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/MongoDB-Logo.svg',
      height: "45%",
      background: 'light-green'
    }, {
      name: 'AngularJS',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/AngularJS_logo.svg',
      height: "42%",
      background: 'salmon'
    }, {
      name: 'Linux',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Tux.svg',
      height: "80%",
      background: 'light-orange'
    }, {
      name: 'Networking',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Cisco_logo.svg',
      height: "60%",
      background: 'black'
    }, {
      name: 'CSS',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/CSS.3.svg',
      height: "70%",
      background: 'cyan'
    }, {
      name: 'Git',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/GitHub_logo_2013.svg',
      height: "33%",
      background: 'orange'
    }, {
      name: 'PostgresSQL',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Postgresql_elephant.svg',
      height: "70%",
      background: 'blue'
    }, {
      name: 'MySQL',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/MySQL.svg',
      height: "60%",
      background: 'dark-gray'
    }, {
      name: 'Flask',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/logo_flask.svg',
      height: "105%",
      background: 'white-yellow'
    }, {
      name: 'JavaScript',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Unofficial_JavaScript_logo_2.svg',
      height: "90%",
      background: 'yellow'
    }, {
      name: 'Ruby',
      url: 'https://s3-us-west-1.amazonaws.com/cliff-website/Ruby_logo.svg',
      height: "80%",
      background: 'med-green'
    }
  ]

  function chunk(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }

  $scope.items = chunk($scope.techTiles,4)

}])
