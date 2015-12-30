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