'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-oshi', {
        url: '/about/oshi',
        templateUrl: 'app/about/about-oshi/about-oshi.html',
        controller: 'AboutOshiCtrl'
      });
  });