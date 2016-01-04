'use strict';

angular.module('oshi2App')
  .controller('AppCtrl', function ($scope, $rootScope, $window, $state, $log, localStorageService,
                                   AuthLogin, AuthLogout, AuthRegister, AuthForgotPassword, Categories, Providers,
                                   GamePlay, Favorites) {

	$scope.rego = {};
	$scope.rego.promos = true;
	
    if(!FlashDetect.installed) { //jshint ignore:line
    	$scope.hasFlash = false;
    }else{
    	$scope.hasFlash = true;
    }

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

		if (!rego.tcs) {
			return 'Validation error';
		}

		var accountObj = {};
		accountObj.ageAcceptance = rego.tcs;
		accountObj.receiveNewsletters = true;
		accountObj.receivePromos = rego.promos;
		accountObj.termsAcceptance = rego.tcs;
		accountObj.email = rego.email;
		accountObj.nickname = rego.email;
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


  //$scope.email = // TODO store store/read from storage last logged in user
  $scope.login = function () {
    if (!$scope.email || $scope.email.trim().length === 0) {
      $scope.loginMessage = 'Please enter your email';
      return;
    }
    if (!$scope.password || $scope.password.trim().length === 0) {
      $scope.loginMessage = 'Please enter your password';
      return;
    }

    $rootScope.account = {};
    AuthLogin.login({email: $scope.email, password: $scope.password}).$promise.then(function (res) {
      console.log('D> Login resp: ', res);
      $rootScope.$emit('login:success', res);
      $rootScope.account = res;
      localStorageService.set('account', res);
      $scope.password = '';
      $state.go('main');
    }, function (err) {
      console.log('E> Error logging in: ', err);
      $scope.loginMessage = 'Email or Password invalid';
      $rootScope.account = null;
      localStorageService.clearAll();
    });
  };

  $scope.isForgotPasswordForm = false;
  $scope.toggleShowForgotPasswordForm = function () {
    $scope.loginMessage = undefined;
    $scope.isForgotPasswordForm = !$scope.isForgotPasswordForm;
  };
  $scope.forgotPassword = function () {
    if (!$scope.email || $scope.email.trim().length === 0) {
      $scope.loginMessage = 'Please enter your email';
      return;
    }
    AuthForgotPassword.resetPassword({email: $scope.email}).$promise.then(function () {
      $scope.loginMessage = 'We’ve sent you a password reset email';
    }, function () {
      $scope.loginMessage = 'Oops, something wrong happened';
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


  $scope.categories = [{displayName:'loading...'}];
  Categories.getMenuCategories().then(function(categories) {
    $scope.categories = categories;
  });

  $scope.providers = [{name:'loading...'}];
  Providers.getAll().then(function(providers) {
    $scope.providers = providers;
  });

  // TODO when not logged in, store games played in the local storage to show last played games
  $scope.playGame = function (gameUrl, gameId, playForFun, fromRecommendation, aspectRatio) {
	  console.log('D> in playGame with id: ', gameId, aspectRatio);
    var request = {
      gameId: gameId,
      playForFun: playForFun,
      fromRecommendation: fromRecommendation
    };
    console.log('D> posting request: ', request);
    GamePlay.post(request).$promise.then(function () {
    	console.log('D> playing game with id: ', gameId);
    	var params = {gameUrl: gameUrl, aspectRatio: aspectRatio};
    	if (!$scope.hasFlash) {
    		$window.location.href = gameUrl;
    	} else {
    		$state.go('play', params);
    	}
    }, function (err) {
      $log.error('Failed calling gamePlay endpoint', err);
      console.log('E> Error calling game: ', err);
	  	console.log('D> playing (error) game with id: ', gameId);
		var params = {gameUrl: gameUrl, aspectRatio: aspectRatio};
    	if (!$scope.hasFlash) {
    		$window.location.href = gameUrl;
    	} else {
    		$state.go('play', params);
    	}
    });
  };

  $scope.toggleFavorite = function (game) {
    Favorites.addOrRemove(game).then(function () {
    }, function (err) {
      //TODO show message to user
      $log.error('Failed removing favorite', err);
    });
  };

});
