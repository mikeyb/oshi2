'use strict';

angular.module('oshi2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'slick',
  'LocalStorageModule',
  'ngAnimate',
  'ngScrollbars',
  'angularSpinner'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.defaults.withCredentials = true;
  })
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('oshi')
      .setStorageCookieDomain('oshi.io')
      .setNotify(true, true);
  })
  .run(function (SiteData) {
    SiteData.load();
  })
  .config(function (ScrollBarsProvider) {
    // the following settings are defined for all scrollbars unless the
    // scrollbar has local scope configuration
    ScrollBarsProvider.defaults = {
        scrollButtons: {
            scrollAmount: 'auto', // scroll amount when button pressed
            enable: false // enable scrolling buttons by default
        },
        scrollInertia: 200, // adjust however you want
        axis: 'yx', // enable 2 axis scrollbars by default,
        theme: 'light-3',
        autoHideScrollbar: true
    };
});
