angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function(userName,password ) {
		friendService.login(userName, password).then(function( response ) {
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				console.log(response.data.userFound);
				alert('user not found');
			}
		});
	};

});
