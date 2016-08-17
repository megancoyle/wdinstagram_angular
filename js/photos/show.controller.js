"use strict";

(function(){
  angular.module("photos")
  .controller("WdinstagramShowController", [
    "$stateParams",
    WdinstagramShowControllerFunction
  ]);

  function WdinstagramShowControllerFunction($stateParams){
    this.photo = photos[$stateParams.id];
  }
}());
