'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-rg', {
        url: '/help/rg',
        templateUrl: 'app/help/help-rg/help-rg.html',
        controller: 'HelpRGCtrl'
      });
  });