"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])

    function RouterFunc($stateProvider) {
      $stateProvider
        .state("photosIndex", {
          url: "/entries",
          templateUrl: "js/photos/index.html",
          controller: "PhotosIndexController",
          controllerAs: "indexViewModel"
        })
        .state("entryShow", {
          url: "entryies/:id",
          templateUrl: "js/photos/show.html",
          controller: "PhotosShowController",
          controllerAs: "showViewModel"
        })
    }

})();
