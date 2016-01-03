'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-tor', {
        url: '/help/tor',
        templateUrl: 'app/help/help-tor/help-tor.html',
        controller: 'HelpTorCtrl'
      });
  });