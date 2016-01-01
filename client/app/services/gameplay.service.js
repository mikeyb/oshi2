'use strict';

angular.module('oshi2App')
  .factory('GamePlay', function ($resource, ENDPOINT) {
    return $resource(ENDPOINT + 'api/open/gamePlay', {}, {
      'post': {
        method: 'POST'
      }
    });
  });
