'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bonus-winners', {
        url: '/bonuses/winners',
        templateUrl: 'app/bonuses/bonus-winners/bonus-winners.html',
        controller: 'BonusWinnersCtrl'
      });
  });