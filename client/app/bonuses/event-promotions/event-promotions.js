'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event-promotions', {
        url: '/bonuses/event-promotions',
        templateUrl: 'app/bonuses/event-promotions/event-promotions.html',
        controller: 'PromotionsEventCtrl'
      });
  });