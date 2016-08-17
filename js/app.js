"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("entriesIndex", {
        url: "/entries",
        templateUrl: "js/photos/index.html",
        controller: "EntryIndexController",
        controllerAs: "indexViewModel"
      })
      .state("entryShow", {
        url: "entries/:id",
        templateUrl: "js/photos/show.html",
        controller: "EntryShowController",
        controllerAs: "showViewModel"
      })
  }

})();
