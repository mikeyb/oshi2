'use strict';

angular.module('oshi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('play', {
        url: '/play?gameUrl&aspectRatio',
        templateUrl: 'app/play/play.html',
        controller: 'PlayCtrl'
      });
  });
