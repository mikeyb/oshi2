'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-fair', {
        url: '/about/fair',
        templateUrl: 'app/about/about-fair/about-fair.html',
        controller: 'AboutFairCtrl'
      });
  });