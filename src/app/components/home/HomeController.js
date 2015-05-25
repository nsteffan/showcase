(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.greeting = 'Hola!';
  }

})();
