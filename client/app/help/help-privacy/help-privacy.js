'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-privacy', {
        url: '/help/privacy',
        templateUrl: 'app/help/help-privacy/help-privacy.html',
        controller: 'HelpPrivacyCtrl'
      });
  });