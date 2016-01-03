'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help-payment', {
        url: '/help/payment',
        templateUrl: 'app/help/help-payment/help-payment.html',
        controller: 'HelpPaymentCtrl'
      });
  });