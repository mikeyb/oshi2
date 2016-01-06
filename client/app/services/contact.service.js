'use strict';

angular.module('oshi2App')
  .factory('ContactUs', function ($resource, ENDPOINT) {
    return $resource(ENDPOINT + 'api/open/contact', {}, {
      'post': {
        method: 'POST'
      }
    });
  });
