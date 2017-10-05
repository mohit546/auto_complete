(function () {
	'use strict';
	angular.module('controllers')
	.controller('autoCompleteCtrl', autoCompleteCtrl);
	autoCompleteCtrl.$inject = ['$scope', '$timeout', 'AutoCompleteService'];

	function autoCompleteCtrl($scope, $timeout, AutoCompleteService) {
		$scope.hidethis = false;
		$scope.userNames = null;

		$timeout(function(){
			getUserNames();
		});

		var getUserNames = function(){
			AutoCompleteService.getUserNamesRequest().then(function(response){
				$scope.userNames = response;
			});
		};

		$scope.complete = function(string){
			if(!$scope.userNames) { return; }
			$scope.hidethis = false;
			var output = [],
			maxSuggestions = 0;
			for(var i = 0, l = $scope.userNames.length; i < l; i ++){
				if($scope.userNames[i].login.toLowerCase().indexOf(string.toLowerCase()) >= 0){
					output.push($scope.userNames[i]);
					maxSuggestions++;
					if(maxSuggestions == 5){ break; }
				}
			}
			$scope.filterUserNames = output;
		};

		$scope.fillTextbox = function(user){
			$scope.username = user.login;
			$scope.hidethis = true;
		};
	}

})();
