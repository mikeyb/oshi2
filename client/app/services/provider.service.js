'use strict';

angular.module('oshi2App')
  .factory('Providers', function (SiteData, $q) {
    return {

      getAll: function () {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          deferred.resolve(siteData.providers);
        });
        return deferred.promise;
      }

    };
  });
