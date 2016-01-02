'use strict';

angular.module('oshi2App')
  .factory('TopWinners', function ($resource, ENDPOINT) {
    return $resource(ENDPOINT + 'api/open/winners/top');
  })
  .factory('LatestWinners', function ($resource, ENDPOINT) {
    return $resource(ENDPOINT + 'api/open/winners/latest');
  });
