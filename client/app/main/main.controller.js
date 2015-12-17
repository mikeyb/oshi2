'use strict';

angular.module('oshi2App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.breakpoints = 
    	[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
        	  breakpoint: 360,
        	  settings: {
        		  slidesToShow: 1,
        		  slidesToScroll: 1
        	  }
          }
        ];
  });
