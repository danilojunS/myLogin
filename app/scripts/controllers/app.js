'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
	.controller('AppCtrl', function ($scope, $rootScope, USER_ROLES, AuthService) {

		$scope.currentUser = null;
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = AuthService.isAuthorized;

		$scope.setCurrentUser = function (user) {
			$scope.currentUser = user;
		};

	});
