(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .directive('bbTwitterView', TwitterView);

  TwitterView.$inject = ['TwitterService'];

  function TwitterView(TwitterService) {
    var vm = {};

    vm.restrict = 'E';
    vm.scope = {};
    vm.templateUrl = 'shared/twitter/twitter-view.tpl.html';
    vm.controller = function($scope) {
      $scope.loading = true;

      TwitterService.getTweets().then(function handleResult(result) {
        $scope.tweets = result.data;
        $scope.loading = false;
      });
    };

    return vm;
  }

})();
