'use strict';

angular.module('oshi2App')
  .controller('MainCtrl', function ($scope) {

    $scope.breakpoints = 
    	[
    	 {
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
          }
        ];
  });
