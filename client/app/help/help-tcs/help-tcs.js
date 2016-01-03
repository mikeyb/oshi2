'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-tcs', {
        url: '/help/tcs',
        templateUrl: 'app/help/help-tcs/help-tcs.html',
        controller: 'HelpTcsCtrl'
      });
  });