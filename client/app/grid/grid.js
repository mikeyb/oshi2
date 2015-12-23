'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('grid', {
        url: '/grid',
        templateUrl: 'app/grid/grid.html',
        controller: 'GridCtrl'
      });
  });