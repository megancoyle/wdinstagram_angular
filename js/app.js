"use strict";

(function(){
  angular.module("wdinstagram", [
    "ui.router",
    "photos"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("wdinstagramIndex", {
      url: "/photos",
      templateUrl: "js/photos/index.html",
      controller: "WdinstagramIndexController",
      controllerAs: "WdinstagramIndexViewModel"
    })
    .state("wdinstagramShow", {
      url: "/photos/:id",
      templateUrl: "js/photos/show.html",
      controller: "WdinstagramShowContoller",
      controllerAs: "WdinstagramShowViewModel"
    });
  }
})();
