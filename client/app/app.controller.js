'use strict';

angular.module('oshi2App')
  .controller('AppCtrl', function ($scope, $rootScope, $window, $state, AuthLogin, AuthLogout, AuthRegister, localStorageService) {

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
	};
	
	$scope.register = function(rego) {
//			  "ageAcceptance": true,
//			  "confirmPassword": "testtest",
//			  "email": "tom.finlayson+2@gmail.com",
//			  "nickname": "tomfin2",
//			  "password": "testtest",
//			  "receiveNewsletters": true,
//			  "receivePromos": true,
//			  "termsAcceptance": true
		
		if (!rego.tcs || !rego.age) {
			return "Validation error";
		}
		
		var accountObj = {};
		accountObj.ageAcceptance = rego.age;
		accountObj.receiveNewsletters = rego.newsletters;
		accountObj.receivePromos = rego.promos;
		accountObj.termsAcceptance = rego.tcs;
		accountObj.email = rego.email;
		accountObj.nickname = rego.nickname;
		accountObj.password = rego.password;
		accountObj.confirmPassword = rego.password;
		AuthRegister.register(accountObj).$promise.then(function (res) {
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
		AuthLogout.logout().$promise.then(function () {
			$rootScope.account = null;
			localStorageService.clearAll();
			$state.go('main');
		}, function(err) {
			console.log('E> Error logging out: ', err);
			$rootScope.account = null;
			localStorageService.clearAll();
			$state.go('main');
		});
	};
  
  });
