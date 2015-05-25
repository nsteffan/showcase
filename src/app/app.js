(function() {
  'use strict';

  angular
    .module('bookbottles-showcase', [
      'ui.router',
      'templates-app'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      // Configure states here
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'components/home/home.tpl.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'components/signup/signup.tpl.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'components/login/login.tpl.html'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'components/dashboard/dashboard.tpl.html'
        });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    });

})();
