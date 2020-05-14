'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['ngRoute', 'ngMaterial', 'ngMessages'])
demoApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
demoApp.config(['$routeProvider',
  function ($routeProvider) {
  // Define routes 
  $routeProvider.
  when('/homepage',
  {
    templateUrl: 'homepage.html',
    controller: 'HomePageCtrl'
  }).

  when('/registration',
  {
    templateUrl: 'registration.html',
    controller: 'HomePageCtrl'
  }).
  otherwise({ redirectTo: '/homepage' });
}]);
demoApp.factory('registration', function(){
    return { obj: ''};
});