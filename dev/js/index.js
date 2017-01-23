'use strict';

(function(){
	console.log('THIS SHIT');
	
	var app = angular.module('myApp', []);

	app.controller('mainController', [
		'$log', 
		'$scope', 
		function($log, $scope){

			$log.debug('Angular Ready for Development');

		}]);


}());