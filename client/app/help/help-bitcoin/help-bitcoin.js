'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-bitcoin', {
        url: '/help/bitcoin',
        templateUrl: 'app/help/help-bitcoin/help-bitcoin.html',
        controller: 'HelpBitcoinCtrl'
      });
  });