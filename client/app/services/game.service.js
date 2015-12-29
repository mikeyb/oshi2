'use strict';

angular.module('oshi2App')
.factory('Games', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/game', {}, {
		'all': {
			method: 'GET',
			isArray: true
		}
	});
});


//http://136.243.111.170:8080/api/open/game
	