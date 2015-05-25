(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .factory('Session', Session);

  function Session() {
    var vm = this;

    vm.create = function (sessionId, username) {
      vm.id = sessionId;
      vm.username = username;
    };

    vm.destroy = function () {
      vm.id = null;
      vm.username = null;
    };

    return vm;
  }

})();
