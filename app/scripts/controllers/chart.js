'use strict';

/**
 * @ngdoc function
 * @name otroFidelApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the otroFidelApp
 */
angular.module('otroFidelApp')
  .controller('ChartCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var trace = {
      x: [1,2,3,4,5,6,7,8,9,10,11,12],
      y: [85,95,93,0,0,100,0,0,0,0,0,0],
      type: 'scatter'
    };

    var data = [trace];
    Plotly.newPlot('myDiv', data);
      
  });



