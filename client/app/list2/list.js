'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list2', {
        url: '/list2',
        templateUrl: 'app/list2/list.html',
        controller: 'List2Ctrl'
      });
  });