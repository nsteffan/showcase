(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'AuthService', 'ERROR_CONSTANTS'];

  function SignupController($scope, AuthService, ERROR_CONSTANTS) {

    $scope.signup = function(user) {
      var handleSignupSuccess = function() {
        window.alert("signup success");
      };

      var handleSignupError = function(error){
        window.alert("signup error - " + error);
        switch (error) {
          case ERROR_CONSTANTS.USERNAME_REQUIRED:

            break;
          default:

        }
      };

      AuthService
        .signup(user.username, user.password, user.passwordConfirmation)
        .then(handleSignupSuccess, handleSignupError);
    }
    
  }

})();
