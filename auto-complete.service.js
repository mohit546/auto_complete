/**
* @namespace AutoCompleteService
* @desc The factory to be returned
*/
(function () {
	'use strict';

	angular
	.module('services')
	.factory('AutoCompleteService', AutoCompleteService);

	AutoCompleteService.$inject = ['$http'];

	function AutoCompleteService($http) {
		var AutoCompleteService = {
			getUserNamesRequest: getUserNamesRequest
		};

		return AutoCompleteService;

		function getUserNamesRequest() {
			return $http.get('https://api.github.com/users?since=0')
			.then(function(response){
				return response.data;
			});
		}

	}
})();
