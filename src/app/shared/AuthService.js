(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$q', 'Session', 'ERROR_CONSTANTS'];

  function AuthService($q, Session, ERROR_CONSTANTS) {
    var service = {};

    service.login = function(username, password) {
      var $d = $q.defer();

      if(username === 'bookbottles' && password === 'showcase') {
        Session.create("11", username);
        $d.resolve();
      } else {
        $d.reject(ERROR_CONSTANTS.INVALID_CREDENTIALS);
      }

      return $d.promise;
    };

    service.isAuthenticated = function() {
      return !!Session.username;
    };

    service.signup = function(username, password, passwordConfirmation) {
      var $d = $q.defer();

      if(!username) {
        $d.reject(ERROR_CONSTANTS.USERNAME_REQUIRED);
      } else if (!password) {
        $d.reject(ERROR_CONSTANTS.PASSWORD_REQUIRED);
      } else if (password !== passwordConfirmation) {
        $d.reject(ERROR_CONSTANTS.PASSWORD_MISMATCH);
      } else {
        $d.resolve();
      }

      return $d.promise;
    };

    return service;
  }

})();
