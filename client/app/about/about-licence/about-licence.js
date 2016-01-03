'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about-licence', {
        url: '/about/licence',
        templateUrl: 'app/about/about-licence/about-licence.html',
        controller: 'AboutLicenceCtrl'
      });
  });