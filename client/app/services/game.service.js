'use strict';

angular.module('oshi2App')
.factory('Games', function($resource, ENDPOINT) {
	return $resource(ENDPOINT + 'api/open/game/:category', {}, {
		'all': {
			method: 'GET',
			isArray: true
		},
		'category': {
			method: 'GET',
			category: '@category',
			isArray: true
		}
	});
});


//http://136.243.111.170:8080/api/open/game
	