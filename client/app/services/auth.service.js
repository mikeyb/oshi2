'use strict';

angular.module('oshi2App')
.factory('AuthLogin', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/login', {}, {
		'login': {
			method: 'POST'
		}
	});
});

angular.module('oshi2App')
.factory('AuthLogout', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/logout', {}, {
		'logout': {
			method: 'GET',
			isArray: false
		}
	});
});

angular.module('oshi2App')
.factory('AuthRegister', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/account', {}, {
		'register': {
			method: 'POST'
		}
	});
});

angular.module('oshi2App')
.factory('AuthForgotPassword', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/resetPassword', {}, {
		'resetPassword': {
			method: 'POST'
		}
	});
});
