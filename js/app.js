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
        .state("photoIndex", {
          url: "/entries",
          templateUrl: "js/photos/index.html",
          controller: "PhotoIndexController",
          controllerAs: "indexViewModel"
        })
        .state("photoShow", {
          url: "photos/:id",
          templateUrl: "js/photos/show.html",
          controller: "PhotoShowController",
          controllerAs: "showViewModel"
        })
    }

})();
