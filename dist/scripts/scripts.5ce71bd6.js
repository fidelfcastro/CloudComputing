"use strict";angular.module("otroFidelApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/assignments",{templateUrl:"views/assignments.html",controller:"AssignmentsCtrl",controllerAs:"assignments"}).otherwise({redirectTo:"/"})}]),angular.module("otroFidelApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("otroFidelApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("otroFidelApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>Informacion General</h1> <p align="left"><font size="5"><b>Nombre:</b> Fidel Castro Mendivil</font></p> <p align="left"><font size="5"><b>Matricula:</b> 23102</font></p> <p align="left"><font size="5"><b>Carrera:</b> ICC</font></p> <h1>Cuenta GitHub</h1> <p><font size="5"><a href="https://github.com/fidelfcastro">URL GitHub</a></font></p> </div>'),a.put("views/assignments.html",'<h1>Cloud Computing Assignments</h1> <div> <li><a href="https://docs.google.com/document/d/1HJVZiFN43J-yLaT8pe88IVs6TIbll9n9QOweZ-MgkmU/edit">Assignment 1</a></li> <li><a href="https://drive.google.com/open?id=0B0fwjUvqYrh3Z2o2bmJoT1RnNzA">A1 Question 2 - Setup Environment </a> </li> <li><a href="https://drive.google.com/open?id=0B0fwjUvqYrh3ODN6d3BjOVFBRmM">A1 Question 3 - Grunt Task Website Deployment</a> </li> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Cloud Computing</h1> <p>FIDEL CASTRO 23102</p> </div>')}]);