"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntryIndexController", EntryIndexControllerFunction)

  EntryIndexControllerFunction.$inject = ["EntryFactory"]
  function EntryIndexControllerFunction(EntryFactory) {
    var indexViewModel = this;
    indexViewModel.entries = EntryFactory.query();
    indexViewModel.newEntry = new EntryFactory();

    indexViewModel.create = function() {
      indexViewModel.newEntry.$save().then(function(res) {
        indexViewModel.entries.push(res);
        indexViewModel.newEntry = new EntryFactory();
      })
    }
  }

})();
