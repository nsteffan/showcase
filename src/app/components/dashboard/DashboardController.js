(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', 'Session'];

  function DashboardController($scope, Session) {
    $scope.username = Session.username;
  }

})();
