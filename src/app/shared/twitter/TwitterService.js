(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .factory('TwitterService', TwitterService);

  TwitterService.$inject = ['$http'];

  function TwitterService($http) {
    var service = {};

    service.getTweets = function() {
      return $http.get('/tweets');
    };

    return service;
  }

})();
