'use strict';

angular.module('oshi2App')
  .factory('Categories', function (SiteData, Games, $q) {

    function setGames(categories) {
      _.each(categories, function (category) {
        Games.getByCategory(category.name).then(function (games) {
          category.games = games;
        });
      });
    }

    return {

      getMainPageCategories: function () {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          var mainPageCategories = _.filter(siteData.categories, function(category) {
            return category.mainPageOrder;
          });

          mainPageCategories = _.sortBy(mainPageCategories, function(category) {
            return category.mainPageOrder;
          });

          setGames(mainPageCategories);

          deferred.resolve(mainPageCategories);
        });
        return deferred.promise;
      },

      getMenuCategories: function () {
        var deferred = $q.defer();
        SiteData.load().then(function (siteData) {
          var menuCategories = _.filter(siteData.categories, function(category) {
            return category.menuOrder;
          });

          menuCategories = _.sortBy(menuCategories, function(category) {
            return category.menuOrder;
          });

          setGames(menuCategories);

          deferred.resolve(menuCategories);
        });
        return deferred.promise;
      }

    };

  });
