'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
	.controller('AppCtrl', function ($scope, $route, $location, USER_ROLES, AUTH_EVENTS, AuthService) {

		$scope.currentUser = null;
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = AuthService.isAuthorized;

		$scope.setCurrentUser = function (user) {
			$scope.currentUser = user;
		};

		$scope.logout = function() {
			AuthService.logout();
			$scope.currentUser = null;
			$scope.$emit(AUTH_EVENTS.logoutSuccess);
			console.log('logout success');
		};

	});
