'use strict';

angular.module('oshi2App')
  .factory('SiteData', function ($resource, $q, ENDPOINT) {
    console.log('begin SiteData');

//    var timesLoadMethodCalled = 0;
    var siteData;
    var loading = false;
    var pendingPromises = [];

    return {

      load: function () {
//        console.log('called SiteData.load - (time ' + (++timesLoadMethodCalled) + ')');

        var loadDeferred = $q.defer();
        pendingPromises.push(loadDeferred);

        if (loading) {
          return loadDeferred.promise;
        }

        if (siteData == undefined) { //jshint ignore:line
          console.log('calling site data endpoint');
          loading = true;

          callEndpoint().$promise.then(function (siteDataResponse) {
            loading = false;
            console.log(siteDataResponse);
            siteData = siteDataResponse;

            _.each(pendingPromises, function (pendingPromise) {
              pendingPromise.resolve(siteDataResponse);
            });
          }, function () {
            loading = false;
            console.log('falhou');
            _.each(pendingPromises, function (pendingPromise) {
              pendingPromise.reject('Error loading site data');
            });
          });

        } else {
          console.log('getting site data from cache');
          loadDeferred.resolve(siteData);
        }
        return loadDeferred.promise;
      }

    };

    function callEndpoint() { //jshint ignore:line
      console.log('called callEndpoint');
      return $resource(ENDPOINT + 'api/open/site-data').get();
    }

  });

