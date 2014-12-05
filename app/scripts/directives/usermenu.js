'use strict';

/**
 * @ngdoc directive
 * @name myLoginApp.directive:UserMenu
 * @description
 * # UserMenu
 */
angular.module('myLoginApp')
  .directive('userMenu', function (AUTH_EVENTS, authenticationService, userService) {
    return {
      templateUrl: 'views/loginmenu.html',
      restrict: 'E',
      link: function postLink(scope) {
      	  scope.user = userService.getUser();

      	  scope.logout = function() {
			authenticationService.logout().then(function () {

				userService.setUser(null);
				scope.$emit(AUTH_EVENTS.logoutSuccess);

				console.log('logout success');

			}, function () {
				console.log('logout error');
			});
			
		  };

      	  scope.$watch(function() {
      	  	return userService.getUser();
      	  }, function(newUser) {
		      scope.user = newUser;
		  });
      }
    };
  });
