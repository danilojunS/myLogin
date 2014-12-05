'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
  .controller('MainCtrl', function ($scope, userService) {
    $scope.user = userService.getUser();

    $scope.$watch(function() {
		  	return userService.getUser();
		  }, function(newUser) {
	      $scope.user = newUser;
	  });
  });
