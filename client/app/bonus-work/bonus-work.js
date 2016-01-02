'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonus-work', {
        url: '/bonus-work',
        templateUrl: 'app/bonus-work/bonus-work.html',
        controller: 'BonusWorkCtrl'
      });
  });