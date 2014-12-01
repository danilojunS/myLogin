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
		  console.log('success');
		  
		  $scope.setCurrentUser(user);
		  $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		  
		  $location.url('/main');

		}, function () {
		  console.log('error');

		  $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

		});
		
	};

  });
