'use strict';

angular.module('oshi2App')
  .controller('MainCtrl', function ($scope, Games, Categories) {

    //$scope.firstList = [];
    //Games.category('landing', '10').$promise.then(function (res) {
    //  console.log('D> Landing resp: ', res);
    //  $scope.firstList = res;
    //}, function(err) {
    //  console.log('E> Error getting first games: ', err);
    //});


    $scope.categories = [];
    Categories.getAllWithGames().then(function(categories) {
      $scope.categories = categories;
    });


    $scope.breakpoints =
      [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }];

;
  });

