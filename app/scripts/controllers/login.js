'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, AUTH_EVENTS, AuthService) {
	$scope.credentials = {
		email: '',
		password: ''
	};

	$scope.login = function (credentials) {

		AuthService.login(credentials).then(function (user) {
		  console.log('login success');
		  
		  $scope.setCurrentUser(user);
		  $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

		}, function () {
		  console.log('login error');

		  $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

		});
		
	};

  });
