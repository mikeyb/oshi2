'use strict';

angular.module('oshi2App')
  .controller('HelpContactCtrl', function ($scope, ContactUs) {
	  
	$scope.contactus = function(contact) {
		  
		$scope.contactResponse = {};
		  ContactUs.post(contact).$promise.then(function (res) {
		  $scope.contactResponse = res;
		  console.log('D> Res: ', res);
		  $scope.contact = {};
		  $scope.responseSuccess = 'Success';
		  $scope.responseError = null;
		}, function() {
			$scope.responseSuccess = null;
			$scope.responseError = 'Error';
		});
	};

  });
