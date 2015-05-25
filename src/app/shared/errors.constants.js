(function() {
  'use strict';

  var ERROR_CONSTANTS = {
    INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
    USERNAME_REQUIRED: "USERNAME_REQUIRED",
    PASSWORD_REQUIRED: "PASSWORD_REQUIRED",
    PASSWORD_MISMATCH: "PASSWORD_MISMATCH"
  };

  angular
    .module('bookbottles-showcase')
    .constant('ERROR_CONSTANTS', ERROR_CONSTANTS);

})();
