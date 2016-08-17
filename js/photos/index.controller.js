"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("PhotosIndexController", PhotosIndexControllerFunction)

  function PhotosIndexControllerFunction() {
    var indexViewModel = this;
    indexViewModel.photos = photos;
    indexViewModel.newPhoto = {};

    indexViewModel.create = function() {
      photos.push(indexViewModel.newPhoto);
      indexViewModel.newPhoto = {};
    }
  }

})();
