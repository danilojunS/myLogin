'use strict';

/**
 * @ngdoc service
 * @name myLoginApp.AuthService
 * @description
 * # AuthService
 * Service in the myLoginApp.
 */
angular.module('myLoginApp')

.factory('AuthService', function ($http, $q, Session) {
	
	var authService = {};

	authService.login = function (credentials) {

		return $q(function(resolve, reject) {
		    setTimeout(function() {
		      if (credentials.email === 'user' && credentials.password === '123') {

				var res = {
			  		data : {
			  			id: 'dataID',
			  			user: {
			  				id: 'userID',
			  				name: 'User Test',
			  				role: 'admin'
			  			}
			  		}
			  	};

			    resolve(res);

		      } else {
		        reject('It broke');
		      }
		    }, 1000);
	  	}).then(function (res) {
	  		Session.create(res.data.id, res.data.user.id, res.data.user.role);

	  		return res.data.user;
	  	});

		// return $http
	 //      .post('data/user.php', credentials)
	 //      .then(function (res) {

	 //      	console.log(res);

	 //        Session.create(res.data.id, res.data.user.id,
	 //                       res.data.user.role);
	 //        return res.data.user;
	 //      });
	};

	authService.logout = function () {
		Session.destroy();
	};

	authService.isAuthenticated = function () {
		return !!Session.userId;
	};

	authService.isAuthorized = function (authorizedRoles) {
		// only verify if user has rights to see the page if the page has any restriction
		if (!angular.isArray(authorizedRoles)) {
		  authorizedRoles = [authorizedRoles];
		}
		return (authService.isAuthenticated() &&
		  authorizedRoles.indexOf(Session.userRole) !== -1);
	};

	return authService;

})
.service('Session', function () {

	this.create = function (sessionId, userId, userRole) {
		this.id = sessionId;
		this.userId = userId;
		this.userRole = userRole;
	};

	this.destroy = function () {
		this.id = null;
		this.userId = null;
		this.userRole = null;
	};

	return this;

});
