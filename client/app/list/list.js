'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        url: '/list?category&provider&display',
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      });
  });
