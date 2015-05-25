(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'AuthService', 'ERROR_CONSTANTS'];

  function LoginController($scope, AuthService, ERROR_CONSTANTS) {

    $scope.login = function(user) {
      var handleLoginSuccess = function() {
        window.alert("login success");
      };

      var handleLoginError = function(error){
        window.alert("login error - " + error);
        switch (error) {
          case ERROR_CONSTANTS.USERNAME_REQUIRED:

            break;
          default:

        }
      };

      AuthService
        .login(user.username, user.password)
        .then(handleLoginSuccess, handleLoginError);
    }

  }

})();
