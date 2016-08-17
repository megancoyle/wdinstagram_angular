"use strict";

(function(){
  angular
    .module("wdinstagram")
    .factory("EntryFactory", EntryFactoryFunction)

  EntryFactoryFunction.$inject = ["$resource"]
  function EntryFactoryFunction($resource) {
    return $resource("http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    });
  }
  
})();
