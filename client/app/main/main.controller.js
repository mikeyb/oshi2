'use strict';

angular.module('oshi2App')
  .controller('MainCtrl', function ($scope, Games, Categories) {

    $scope.categories = [{displayName:'loading...'}];
    Categories.getMainPageCategories().then(function(categories) {
      $scope.categories = categories;
    });

    $scope.slidesToShow = function(index) {
    	if (index <= 1) {
    		return 4;
    	} else if (index > 1 && index <= 4) {
    		return 5;
    	} else {
    		return 6;
    	}
    };
    
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

  });

