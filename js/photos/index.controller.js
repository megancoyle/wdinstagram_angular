"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("PhotoIndexController", PhotoIndexControllerFunction)

  function PhotoIndexControllerFunction() {
    var indexViewModel = this;
    indexViewModel.photos = photos;
    indexViewModel.newPhoto = {};

    indexViewModel.create = function() {
      photos.push(indexViewModel.newPhoto);
      indexViewModel.newPhoto = {};
    }
  }

})();
