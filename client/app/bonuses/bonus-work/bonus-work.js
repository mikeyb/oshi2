'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonus-work', {
        url: '/bonuses/work',
        templateUrl: 'app/bonuses/bonus-work/bonus-work.html',
        controller: 'BonusWorkCtrl'
      });
  });