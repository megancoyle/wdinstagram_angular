"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("PhotosShowController", PhotosShowControllerFunction)

  PhotosShowControllerFunction.$inject = ["$stateParams"]
  function PhotosShowControllerFunction($stateParams) {
    var showViewModel = this;
    showViewModel.photo = photos[$stateParams.id]

    showViewModel.update = function() {
      photos[$stateParams.id] = showViewModel.photo;
    };

    showViewModel.delete = function() {
      photos.splice( $stateParams.id, 1 );
    }
  }

})();
