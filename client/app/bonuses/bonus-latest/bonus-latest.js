'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonus-latest', {
        url: '/bonuses/latest',
        templateUrl: 'app/bonuses/bonus-latest/bonus-latest.html',
        controller: 'BonusLatestCtrl'
      });
  });