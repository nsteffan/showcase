(function() {
  'use strict';

  angular
    .module('bookbottles-showcase')
    .directive('bbsTwitterView', twitterView);

  function twitterView() {
    return {
      templateUrl: 'twitter-view.tpl.html'
    };
  }

})();
