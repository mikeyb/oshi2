'use strict';

angular.module('oshi2App')
  .controller('AppCtrl', function ($scope, $rootScope, $window, $state, AuthLogin, AuthLogout, localStorageService) {

	$scope.isHome = function () {
		if ($window.location.pathname === '/') {
		    return true;
		} else {
		    return false;
		}
	};
	
	$scope.isAuth = function() {
		$rootScope.account = localStorageService.get('account');
		if ($rootScope.account) {
			return true;
		} else {
			return false;
		}
	}
	
	$scope.login = function(email, password) {
		$rootScope.account = {};
		$scope.loginObj = {};
		$scope.loginObj.email = email;
		$scope.loginObj.password = password;
		AuthLogin.login($scope.loginObj).$promise.then(function (res) {
			console.log('D> Login resp: ', res);
			$rootScope.account = res;
			localStorageService.set('account', res);
			$state.go('main');
		}, function(err) {
			console.log('E> Error logging in: ', err);
			$rootScope.account = null;
			localStorageService.clearAll();
			$state.go('main');
		});
	};
  
	$scope.logout = function() {
		AuthLogout.logout().$promise.then(function (res) {
			$rootScope.account = null;
			localStorageService.clearAll();
			$state.go('main');
		});
	};
  
  });
