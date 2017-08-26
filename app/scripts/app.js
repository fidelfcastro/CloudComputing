'use strict';

/**
 * @ngdoc overview
 * @name otroFidelApp
 * @description
 * # otroFidelApp
 *
 * Main module of the application.
 */
angular
  .module('otroFidelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl',
        controllerAs: 'assignments'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl',
        controllerAs: 'chart'
      })
      .when('/assignment2', {
        templateUrl: 'views/assignment2.html',
        controller: 'Assignment2Ctrl',
        controllerAs: 'assignment2'
      })
      .when('/assignment1', {
        templateUrl: 'views/assignment1.html',
        controller: 'Assignment1Ctrl',
        controllerAs: 'assignment1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
