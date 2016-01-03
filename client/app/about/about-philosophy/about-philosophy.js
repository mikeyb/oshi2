'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-philosophy', {
        url: '/about/philosophy',
        templateUrl: 'app/about/about-philosophy/about-philosophy.html',
        controller: 'AboutPhilosophyCtrl'
      });
  });