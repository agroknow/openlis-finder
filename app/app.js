/*
* Mathioudakis Theodore
* Agro-Know Technologies - 2013
*/


//Define ng-app module
//----
//services needed 'ngRoute', 'ui.bootstrap'
var listing = angular.module('akListing',['ngRoute', 'ui.bootstrap']);
/* var listing = angular.module('akListing',['ngRoute','mainController','listingController']); */

//Shared Properties Service
listing.service('sharedProperties',
	function () {
	    var total = 0;
	    var activeFacets = [];
	    var inactiveFacets = [];

	    return {
	        getTotal: function () {
	            return total;
	        },

	        setTotal: function(value) {
	            total = value;
	        },
	    };
	});

//Routing
//----
//manages the routing and defines which template should be rendered in any time based on the url
listing.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			// search
			when('/educational/search/', {
				templateUrl: 'templates/search.html',
				controller: 'listingController'
			}).
			when('/educational/search/:search_param', {
				templateUrl: 'templates/search.html',
				controller: 'listingController'
			}).
			// view-item
			when('/item', {
				templateUrl: 'templates/item.html',
				controller: 'viewItemController'
			}).
			when('/item/:itemId', {
				templateUrl: 'templates/item.html',
				controller: 'viewItemController'
			}).

			// general
			when('/', {
				templateUrl: 'templates/main.html',
				controller: 'mainController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
