'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-contact', {
        url: '/help/contact',
        templateUrl: 'app/help/help-contact/help-contact.html',
        controller: 'HelpContactCtrl'
      });
  });