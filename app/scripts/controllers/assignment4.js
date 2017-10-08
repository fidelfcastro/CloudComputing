'use strict';
/**
 * @ngdoc function
 * @name otroFidelApp.controller:Assignment4Ctrl
 * @description
 * # Assignment4Ctrl
 * Controller of the otroFidelApp
 */
angular.module('otroFidelApp')
  .controller('Assignment4Ctrl', function($scope, $http, md5) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      var limit = 100;
      var superLimit = limit * 10;
      var offset = 0;
      var characters = [];
      var privateKey = 'b9ba3729edaf63db911bced03dca632d152ac7b8';
      var apiKey = 'c6ee7f48f9b3169a24bb4114d98a3fff';
      var ts = new Date();
      var exit = false;
      var hash = md5.createHash(ts + privateKey + apiKey);
      while (offset <= superLimit) {
          var url = "https://gateway.marvel.com:443/v1/public/characters?ts=" + ts + "&apikey=" + apiKey + "&hash=" + hash + "&limit=" + limit + "&offset=" + offset;
          $http.get(url)
              .then(function (response) {
                  var info = response.data;
                  var results = info.data.results;
                  for (var i = 0; i < results.length; i++) {
                      var character = {
                          name: results[i].name,
                      };
                      characters.push(character.name);
                  }
              })
              .catch(function (data) {
                  console.log('Error. ' + data);
                  exit = true;
              });
          if(exit){
              break;
          }

          offset += 100;

    }
      $scope.charactersName = characters.sort();


  });




