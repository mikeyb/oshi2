'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-founders', {
        url: '/about/founders',
        templateUrl: 'app/about/about-founders/about-founders.html',
        controller: 'AboutFoundersCtrl'
      });
  });