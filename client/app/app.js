'use strict';

angular.module('oshi2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'slick',
  'LocalStorageModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
		.setPrefix('oshi')
		.setStorageCookieDomain('oshi.io')
		.setNotify(true, true);
});