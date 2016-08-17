"use strict";

(function(){
  angular
    .module("wdinstagram")
    .controller("EntryShowController", EntryShowControllerFunction)

  EntryShowControllerFunction.$inject = ["$stateParams", "$state", "EntryFactory"]
  function EntryShowControllerFunction($stateParams, $state, EntryFactory) {
    var showViewModel = this;
    showViewModel.entry = EntryFactory.get({id: $stateParams.id});

    showViewModel.update = function() {
      showViewModel.entry.$update({id: $stateParams.id}).then(function() {
        $state.go("entriesIndex");
      });
    }

    showViewModel.delete = function() {
      showViewModel.entry.$delete({id: $stateParams.id}).then(function() {
        $state.go("entriesIndex");
      });

    }
  }

})();
