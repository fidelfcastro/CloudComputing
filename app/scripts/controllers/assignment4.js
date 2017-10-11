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
      var characterId = new Map();
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
                          id: results[i].id,
                          name: results[i].name
                      };
                      characters.push(character.name);
                      characterId.set(character.name, character.id);
                  }
              })
              .catch(function (data) {
                  alert('Error. ' + data);
                  exit = true;
              });
          if(exit){
              break;
          }

          offset += 100;

    }
      $scope.charactersName = characters.sort();

      $scope.go = function () {
          $scope.comics = [];
          $scope.series = [];
          $scope.loading = "";
          if($scope.selectedName != null && $scope.selectedName2 != null) {
              $scope.loadingComic = "Loading...";
              $scope.loadingSeries = "Loading...";
              var firstId = characterId.get($scope.selectedName);
              var secondId = characterId.get($scope.selectedName2);
              console.log(firstId);
              console.log(secondId);

              var reqComics = {
                  method: 'PUT',
                  url: 'https://uz2jpf4798.execute-api.us-east-1.amazonaws.com/MarvelStage/filter/comics',
                  headers: {
                      'X-API-KEY': 'VNwdTVTftTaCZTLtBU9rg3VqyHRdfPdo9SAz2kt0'
                  },

                  data: {"firstCharacterId": firstId, "secondCharacterId": secondId}
              };

              $http(reqComics)
                  .then(function (response) {
                      $scope.comics = response.data;
                      $scope.loadingComic = "";
                      if($scope.comics.length == 0){
                          $scope.loadingComic = "No common comics";
                      }


                  })
                  .catch(function (data) {
                      alert('Error. ' + data);
              });

              var reqSeries = {
                  method: 'PUT',
                  url: 'https://uz2jpf4798.execute-api.us-east-1.amazonaws.com/MarvelStage/filter/series',
                  headers: {
                      'X-API-KEY': 'VNwdTVTftTaCZTLtBU9rg3VqyHRdfPdo9SAz2kt0'
                  },

                  data: {"firstCharacterId": firstId, "secondCharacterId": secondId}
              };

              $http(reqSeries)
                  .then(function (response) {
                      $scope.series = response.data;
                      $scope.loadingSeries = "";
                      if($scope.series.length == 0){
                          $scope.loadingSeries = "No common series";
                      }


                  })
                  .catch(function (data) {
                      alert('Error. ' + data);
                  });
          }

          else if($scope.selectedName == null || $scope.selectedName2 == null) {
              alert('Must select characters!');
          }

      };




  });




