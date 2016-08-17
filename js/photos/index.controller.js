"use strict";

(function(){
  angular
  .module("photos")
  .controller("WdinstagramIndexController", [
    WdinstagramIndexControllerFunction
  ]);

  function WdinstagramIndexControllerFunction(){
    this.photos = photos;
    this.newPhoto = {};
    this.create = function(){
      photos.unshift(this.newPhoto);
      this.newPhoto = {}
    }
    this.delete = function(id){
      photos.splice(id, 1);
    }
  }

}());
